const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "../build");
const indexPath = path.join(buildDir, "index.html");
const fallbackPath = path.join(buildDir, "404.html");
const noJekyllPath = path.join(buildDir, ".nojekyll");

if (!fs.existsSync(indexPath)) {
  throw new Error(`Missing build output: ${indexPath}`);
}

fs.copyFileSync(indexPath, fallbackPath);

if (!fs.existsSync(noJekyllPath)) {
  fs.writeFileSync(noJekyllPath, "");
}
