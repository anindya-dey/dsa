// Compiles the C++ on every DSA problem page so a broken solution cannot
// ship. Each page's ```cpp blocks are concatenated in order (later blocks may
// call helpers from earlier ones) behind a prelude of standard headers and
// the LeetCode node types, then checked with -fsyntax-only.
//
// Requires a C++20 compiler: set CXX, or have clang++ / g++ on PATH. Skips
// (exit 0) when none is available so it never blocks a machine without one.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const patternsDir = path.join(root, "content", "dsa", "patterns");

const PRELUDE = `
#include <algorithm>
#include <array>
#include <bit>
#include <bitset>
#include <cctype>
#include <climits>
#include <cmath>
#include <cstdint>
#include <deque>
#include <functional>
#include <limits>
#include <list>
#include <map>
#include <memory>
#include <numeric>
#include <optional>
#include <queue>
#include <random>
#include <set>
#include <sstream>
#include <stack>
#include <string>
#include <tuple>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    explicit ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* n) : val(x), next(n) {}
};

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    explicit TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* l, TreeNode* r) : val(x), left(l), right(r) {}
};

// LeetCode's "Node" for Clone Graph and Copy List with Random Pointer.
struct Node {
    int val;
    std::vector<Node*> neighbors;
    Node* next = nullptr;
    Node* random = nullptr;
    Node() : val(0) {}
    explicit Node(int x) : val(x) {}
    Node(int x, std::vector<Node*> n) : val(x), neighbors(std::move(n)) {}
};
`;

function findCompiler() {
  const candidates = [process.env.CXX, "clang++", "g++"].filter(Boolean);
  for (const cxx of candidates) {
    const probe = spawnSync(cxx, ["--version"], { encoding: "utf8" });
    if (probe.status === 0) return cxx;
  }
  return null;
}

const cxx = findCompiler();
if (!cxx) {
  console.log("check:cpp skipped: no C++ compiler found (set CXX).");
  process.exit(0);
}

const files = fs
  .readdirSync(patternsDir)
  .flatMap((pattern) => {
    const dir = path.join(patternsDir, pattern, "problems");
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => path.join(dir, f));
  })
  .sort();

const scratch = fs.mkdtempSync(path.join(os.tmpdir(), "check-cpp-"));
const failures = [];
let compiled = 0;

for (const file of files) {
  const blocks = [...fs.readFileSync(file, "utf8").matchAll(/```cpp\n([\s\S]*?)```/g)];
  if (blocks.length === 0) continue;

  const source = path.join(scratch, `${path.basename(file, ".mdx")}.cpp`);
  fs.writeFileSync(source, PRELUDE + blocks.map((b) => b[1]).join("\n"));
  const result = spawnSync(cxx, ["-std=c++20", "-fsyntax-only", source], {
    encoding: "utf8",
  });
  compiled += 1;
  if (result.status !== 0) {
    const firstErrors = result.stderr
      .split("\n")
      .filter((line) => line.includes("error:"))
      .slice(0, 3)
      .map((line) => `    ${line.split(".cpp:").pop()}`);
    failures.push(`${path.relative(root, file)}\n${firstErrors.join("\n")}`);
  }
}

fs.rmSync(scratch, { recursive: true, force: true });

if (failures.length > 0) {
  for (const failure of failures) console.error(`error: ${failure}`);
  console.error(`\nC++ check failed: ${failures.length} of ${compiled} problem pages.`);
  process.exit(1);
}

console.log(`C++ check passed (${compiled} problem pages compiled with ${cxx}).`);
