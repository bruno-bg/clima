import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const IGNORED_DIRS = new Set(["node_modules", ".git", "dist", "build", ".vite"]);
const ALLOWED_DIR = "docs";

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      files.push(...walk(path.join(dir, entry.name)));
    } else {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function isReadme(filePath) {
  return path.basename(filePath).toLowerCase() === "readme.md";
}

function isInDocs(filePath) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
  return rel.startsWith(`${ALLOWED_DIR}/`);
}

const allFiles = walk(ROOT);
const markdowns = allFiles.filter((f) => f.toLowerCase().endsWith(".md"));

const violations = markdowns.filter((f) => !isReadme(f) && !isInDocs(f));

if (violations.length > 0) {
  console.error("Os seguintes arquivos .md devem estar em 'docs/':");
  for (const v of violations) {
    console.error("- " + path.relative(ROOT, v).replace(/\\/g, "/"));
  }
  process.exit(1);
} else {
  console.log("Verificação de Markdown OK: somente README.md fora de 'docs/'.");
}

