import { $, cd } from "zx";
// import fs from "fs";
import { join, resolve } from "path";
import { writeFileSync, readFileSync } from "fs";
const init_dir = resolve("./");

async function buildEncode() {
  await cd(init_dir);
  const encodeRoot = join(init_dir, "lib", "avif.io", "conversion");
  await cd(encodeRoot);
  console.log("encodeRoot", encodeRoot);
  await $`wasm-pack build --target web --release`;
  await $`single-wasm ./pkg/ -n avif.js`;
  const avifJsPath = join(encodeRoot, "avif.js");
  const avifDTSPath = join(encodeRoot, "pkg", "conversion.d.ts");
  const avifJsPathCopy = join(init_dir, "src", "encode", "avif", "index.js");
  const avifDTSPathCopy = join(init_dir, "src", "encode", "avif", "index.d.ts");
  writeFileSync(avifJsPathCopy, readFileSync(avifJsPath));
  writeFileSync(avifDTSPathCopy, readFileSync(avifDTSPath));
}

async function start() {
  await buildEncode();
}
start();
