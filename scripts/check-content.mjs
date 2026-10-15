import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { dsaPatterns } from "../lib/catalog/dsa.ts";
import { systemDesignTopics } from "../lib/catalog/system-design.ts";
import { aiMlTopics } from "../lib/catalog/ai-ml.ts";
import { cppEntries } from "../lib/catalog/cpp.ts";
import { tierOf } from "../lib/catalog/tiers.ts";

const root = process.cwd();
const contentRoot = path.join(root, "content");
const DSA_PATTERNS_DIR = path.join(contentRoot, "dsa", "patterns");
const SD_ROOT = path.join(contentRoot, "system-design");
const AI_ML_ROOT = path.join(contentRoot, "ai-ml");

const DSA_PHASES = [1, 2, 3, 4];
const SD_TRACKS = ["fundamentals", "lld", "hld"];
const AI_ML_TRACKS = ["concepts", "systems"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const errors = [];
const warnings = [];

function readFrontmatter(file) {
  return matter(fs.readFileSync(file, "utf8")).data;
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

const dsaBySlug = new Map();
for (const pattern of dsaPatterns) {
  if (dsaBySlug.has(pattern.slug)) {
    errors.push(`Duplicate DSA pattern slug "${pattern.slug}"`);
  }
  dsaBySlug.set(pattern.slug, pattern);

  if (!DSA_PHASES.includes(pattern.phase)) {
    errors.push(`DSA pattern "${pattern.slug}" has invalid phase ${pattern.phase}`);
  }
  if (!pattern.title) errors.push(`DSA pattern "${pattern.slug}" is missing a title`);
  if (!pattern.summary) errors.push(`DSA pattern "${pattern.slug}" is missing a summary`);
}

const sdBySlug = new Map();
for (const topic of systemDesignTopics) {
  if (sdBySlug.has(topic.slug)) {
    errors.push(
      `Duplicate system design slug "${topic.slug}" (tracks "${sdBySlug.get(topic.slug).track}" and "${topic.track}")`,
    );
  }
  sdBySlug.set(topic.slug, topic);

  if (!SD_TRACKS.includes(topic.track)) {
    errors.push(`System design topic "${topic.slug}" has invalid track "${topic.track}"`);
  }
  if (!topic.title) errors.push(`System design topic "${topic.slug}" is missing a title`);
  if (!topic.summary) errors.push(`System design topic "${topic.slug}" is missing a summary`);
}

for (const slug of listDirs(DSA_PATTERNS_DIR)) {
  if (!dsaBySlug.has(slug)) {
    errors.push(`content/dsa/patterns/${slug} has no catalog entry`);
  }
}

for (const track of SD_TRACKS) {
  for (const slug of listDirs(path.join(SD_ROOT, track))) {
    if (!sdBySlug.has(slug) || sdBySlug.get(slug).track !== track) {
      errors.push(`content/system-design/${track}/${slug} has no catalog entry`);
    }
  }
}

const aiMlBySlug = new Map();
for (const topic of aiMlTopics) {
  if (aiMlBySlug.has(topic.slug)) {
    errors.push(
      `Duplicate AI/ML slug "${topic.slug}" (tracks "${aiMlBySlug.get(topic.slug).track}" and "${topic.track}")`,
    );
  }
  aiMlBySlug.set(topic.slug, topic);

  if (!AI_ML_TRACKS.includes(topic.track)) {
    errors.push(`AI/ML topic "${topic.slug}" has invalid track "${topic.track}"`);
  }
  if (!topic.title) errors.push(`AI/ML topic "${topic.slug}" is missing a title`);
  if (!topic.summary) errors.push(`AI/ML topic "${topic.slug}" is missing a summary`);
}

for (const track of AI_ML_TRACKS) {
  for (const slug of listDirs(path.join(AI_ML_ROOT, track))) {
    if (!aiMlBySlug.has(slug) || aiMlBySlug.get(slug).track !== track) {
      errors.push(`content/ai-ml/${track}/${slug} has no catalog entry`);
    }
  }
}

for (const pattern of dsaPatterns) {
  const dir = path.join(DSA_PATTERNS_DIR, pattern.slug);
  const overview = path.join(dir, "index.mdx");

  if (fs.existsSync(overview)) {
    const data = readFrontmatter(overview);
    if (!data.title) {
      errors.push(`Missing title in content/dsa/patterns/${pattern.slug}/index.mdx`);
    } else if (data.title !== pattern.title) {
      warnings.push(
        `Title mismatch for "${pattern.slug}": catalog "${pattern.title}" vs content "${data.title}"`,
      );
    }
  }

  const problemsDir = path.join(dir, "problems");
  if (!fs.existsSync(problemsDir)) continue;

  for (const file of fs.readdirSync(problemsDir).filter((f) => f.endsWith(".mdx"))) {
    const rel = `content/dsa/patterns/${pattern.slug}/problems/${file}`;
    const data = readFrontmatter(path.join(problemsDir, file));

    if (!data.title) errors.push(`Missing title in ${rel}`);
    if (data.difficulty && !DIFFICULTIES.includes(data.difficulty)) {
      errors.push(`Invalid difficulty "${data.difficulty}" in ${rel}`);
    }
    if (data.practiceLinks !== undefined && !Array.isArray(data.practiceLinks)) {
      errors.push(`practiceLinks must be an array in ${rel}`);
    }
    for (const link of data.practiceLinks ?? []) {
      if (
        !link ||
        typeof link.href !== "string" ||
        !/^https?:\/\//.test(link.href)
      ) {
        errors.push(`Invalid practice link in ${rel}: ${JSON.stringify(link)}`);
      }
    }
  }
}

for (const topic of systemDesignTopics) {
  const file = path.join(SD_ROOT, topic.track, topic.slug, "index.mdx");
  if (!fs.existsSync(file)) continue;
  const data = readFrontmatter(file);
  if (!data.title) {
    errors.push(
      `Missing title in content/system-design/${topic.track}/${topic.slug}/index.mdx`,
    );
  }
}

for (const topic of aiMlTopics) {
  const file = path.join(AI_ML_ROOT, topic.track, topic.slug, "index.mdx");
  if (!fs.existsSync(file)) continue;
  const data = readFrontmatter(file);
  if (!data.title) {
    errors.push(
      `Missing title in content/ai-ml/${topic.track}/${topic.slug}/index.mdx`,
    );
  }
}

const CPP_ROOT = path.join(root, "content", "cpp");
for (const entry of cppEntries) {
  const file = path.join(CPP_ROOT, `${entry.slug}.mdx`);
  if (!fs.existsSync(file)) {
    errors.push(`C++ Toolkit entry missing: content/cpp/${entry.slug}.mdx`);
    continue;
  }
  const data = readFrontmatter(file);
  if (!data.title) {
    errors.push(`Missing title in content/cpp/${entry.slug}.mdx`);
  }
}
const cppFiles = fs.existsSync(CPP_ROOT)
  ? fs.readdirSync(CPP_ROOT).filter((f) => f.endsWith(".mdx"))
  : [];
for (const file of cppFiles) {
  const slug = file.replace(/\.mdx$/, "");
  if (!cppEntries.some((e) => e.slug === slug)) {
    errors.push(`content/cpp/${file} has no catalog entry`);
  }
}

// ---------------------------------------------------------------------------
// Catalog <-> frontmatter titles. Pages render the catalog title, so a
// mismatch means the page and its <title>/search entry disagree.
// ---------------------------------------------------------------------------
function checkTitle(rel, catalogTitle) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return;
  const { title } = readFrontmatter(file);
  if (title && title !== catalogTitle) {
    errors.push(`Title mismatch in ${rel}: catalog "${catalogTitle}" vs frontmatter "${title}"`);
  }
}
for (const topic of systemDesignTopics) {
  checkTitle(`content/system-design/${topic.track}/${topic.slug}/index.mdx`, topic.title);
}
for (const topic of aiMlTopics) {
  checkTitle(`content/ai-ml/${topic.track}/${topic.slug}/index.mdx`, topic.title);
}
for (const entry of cppEntries) {
  checkTitle(`content/cpp/${entry.slug}.mdx`, entry.title);
}

// ---------------------------------------------------------------------------
// Every catalog slug needs an explicit tier (tierOf silently falls back).
// ---------------------------------------------------------------------------
const MISSING_TIER = "__missing__";
for (const slug of [
  ...dsaPatterns.map((p) => p.slug),
  ...systemDesignTopics.map((t) => t.slug),
  ...aiMlTopics.map((t) => t.slug),
  ...cppEntries.map((e) => e.slug),
]) {
  if (tierOf(slug, MISSING_TIER) === MISSING_TIER) {
    errors.push(`No tier assigned for "${slug}" in lib/catalog/tiers.ts`);
  }
}

// ---------------------------------------------------------------------------
// Corpus-wide checks on every MDX file: internal links resolve, Mermaid
// labels parse, and prose follows the no-em-dash house rule.
// ---------------------------------------------------------------------------
function listMdx(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listMdx(full);
    return entry.name.endsWith(".mdx") ? [full] : [];
  });
}

function internalRouteExists(href) {
  const clean = href.split("#")[0].replace(/\/$/, "");
  if (clean === "") return true;
  const parts = clean.split("/").filter(Boolean);
  const [section, a, b] = parts;
  const exists = (...segments) => fs.existsSync(path.join(contentRoot, ...segments));
  switch (section) {
    case "dsa":
      if (parts.length === 1 || clean === "/dsa/cheat-sheet") return true;
      if (a !== "patterns") return false;
      if (parts.length === 3) return exists("dsa", "patterns", b, "index.mdx");
      if (parts.length === 4) {
        return exists("dsa", "patterns", b, "problems", `${parts[3]}.mdx`);
      }
      return false;
    case "system-design":
      if (parts.length === 1) return true;
      return parts.length === 3 && exists("system-design", a, b, "index.mdx");
    case "ai-ml":
      if (parts.length === 1) return true;
      return parts.length === 3 && exists("ai-ml", a, b, "index.mdx");
    case "cpp":
      if (parts.length === 1) return true;
      return parts.length === 2 && exists("cpp", `${a}.mdx`);
    default:
      return false;
  }
}

// Mermaid rejects "(", ")" and "{", "}" inside an unquoted [square] label.
// [(cylinder)] shapes are fine; quote anything else: A["label (note)"].
const SQUARE_LABEL = /\w\[(?![("])([^\]]*)\]/g;

let linkCount = 0;
for (const file of listMdx(contentRoot)) {
  const rel = path.relative(root, file);
  const raw = fs.readFileSync(file, "utf8");
  const { content } = matter(raw);
  const lineOf = (index) => raw.slice(0, raw.indexOf(content) + index).split("\n").length;

  for (const block of content.matchAll(/```mermaid\n([\s\S]*?)```/g)) {
    for (const label of block[1].matchAll(SQUARE_LABEL)) {
      if (/[(){}]/.test(label[1])) {
        errors.push(
          `${rel}:${lineOf(block.index)}: Mermaid label "[${label[1]}]" needs quotes: ["${label[1]}"]`,
        );
      }
    }
  }

  // Prose only: drop fenced code and inline code before scanning.
  const prose = content
    .replace(/```[\s\S]*?```/g, (code) => code.replace(/[^\n]/g, " "))
    .replace(/`[^`\n]*`/g, (code) => " ".repeat(code.length));

  for (const link of prose.matchAll(/\]\(([^)\s]+)\)/g)) {
    const href = link[1];
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    linkCount += 1;
    if (!internalRouteExists(href)) {
      errors.push(`${rel}:${lineOf(link.index)}: broken internal link ${href}`);
    }
  }

  const dash = prose.indexOf("\u2014");
  if (dash !== -1) {
    errors.push(`${rel}:${lineOf(dash)}: em-dash in prose (house rule: none)`);
  }
}

for (const warning of warnings) console.warn(`warning: ${warning}`);
for (const error of errors) console.error(`error: ${error}`);

if (errors.length > 0) {
  console.error(`\nContent check failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(
  `Content check passed (${dsaPatterns.length} DSA patterns, ${systemDesignTopics.length} system design topics, ${aiMlTopics.length} AI/ML topics, ${cppEntries.length} C++ entries, ${linkCount} internal links).`,
);
