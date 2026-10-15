import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { dsaPatterns } from "../lib/catalog/dsa.ts";
import { systemDesignTopics } from "../lib/catalog/system-design.ts";
import { aiMlTopics } from "../lib/catalog/ai-ml.ts";
import { cppEntries } from "../lib/catalog/cpp.ts";

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

for (const warning of warnings) console.warn(`warning: ${warning}`);
for (const error of errors) console.error(`error: ${error}`);

if (errors.length > 0) {
  console.error(`\nContent check failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(
  `Content check passed (${dsaPatterns.length} DSA patterns, ${systemDesignTopics.length} system design topics, ${aiMlTopics.length} AI/ML topics, ${cppEntries.length} C++ entries).`,
);
