#!/usr/bin/env node

/**
 * A minimal wrapper around the "next build" API which accepts arguments --src_dir and --out_dir
 */

const path = require("path");
const minimist = require("minimist");
const nextBuild = require("next/dist/build").default;

main(process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});

async function main(argv) {
  const args = minimist(argv);
  await nextBuild(path.resolve(args.src_dir), {
    distDir: path.resolve(args.out_dir)
  });
}
