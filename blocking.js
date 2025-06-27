// // blocking
// const fs = require("fs");
// const path = require("path");

// const file = fs.readFileSync(path.join(__dirname, "package.json"), "utf-8");
// console.log("🚀 ~ file:", file);
// console.log("🚀 ~ Hii:");

// // non-blocking
const fs = require("fs/promises");
const path = require("path");

const read = async () => {
  const result = await fs.readFile(
    path.join(__dirname, "package.json"),
    "utf-8"
  );

  console.log("🚀 ~ read ~ result:", result);
  return result;
};

read();
console.log("🚀 ~ Hii:");
