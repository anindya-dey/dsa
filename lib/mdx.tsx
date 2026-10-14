import fs from "node:fs";
import path from "node:path";
import type { ComponentProps } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { createHighlighter, type Highlighter } from "shiki";
import { paperCodeTheme } from "@/lib/code-theme";

export const CONTENT_ROOT = path.join(process.cwd(), "content");

let highlighterPromise: Promise<Highlighter> | undefined;

function getSharedHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= createHighlighter({
    themes: [paperCodeTheme],
    langs: ["cpp", "text", "bash", "json"],
  });
  return highlighterPromise;
}

export type BaseFrontmatter = Record<string, unknown> & {
  title: string;
  summary?: string;
};

export interface Heading {
  id: string;
  text: string;
  depth: 2 | 3;
}

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

function textOf(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(textOf).join("");
}

function rehypeCollectHeadings(headings: Heading[]) {
  return () => (tree: HastNode) => {
    const walk = (node: HastNode) => {
      if (node.type === "element" && (node.tagName === "h2" || node.tagName === "h3")) {
        const id = node.properties?.id;
        if (typeof id === "string") {
          headings.push({
            id,
            text: textOf(node).trim(),
            depth: node.tagName === "h2" ? 2 : 3,
          });
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

const mdxComponents = {
  table: (props: ComponentProps<"table">) => (
    <div className="table-scroll">
      <table {...props} />
    </div>
  ),
};

export function contentFileExists(absolutePath: string): boolean {
  return fs.existsSync(absolutePath);
}

export async function compileContentFile<
  T extends Record<string, unknown> = BaseFrontmatter,
>(absolutePath: string) {
  const source = fs.readFileSync(absolutePath, "utf8");
  const headings: Heading[] = [];

  const { content, frontmatter } = await compileMDX<T>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          rehypeCollectHeadings(headings),
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [
            rehypePrettyCode,
            {
              theme: paperCodeTheme,
              keepBackground: false,
              defaultLang: { block: "text" },
              getHighlighter: getSharedHighlighter,
            },
          ],
        ],
      },
    },
  });

  return { content, frontmatter, headings };
}
