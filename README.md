# bazel-frontend-examples

Bazel frontend project examples

## Install

```
$ yarn
```

### nextjs-app

A work-in-progress example [Next.js](https://nextjs.org/) application. This does not yet work. Try building:

```bash-session

$ yarn build
...
ERROR: /path/to/bazel-frontend-examples/nextjs-app/BUILD:17:1: Action nextjs-app/build failed (Exit 1) next_build.sh failed: error executing command bazel-out/host/bin/nextjs-app/next_build.sh --src_dir nextjs-app/src --out_dir bazel-out/darwin-fastbuild/bin/nextjs-app/build ... (remaining 2 argument(s) skipped)

Use --sandbox_debug to see verbose messages from the sandbox
Error: > Build directory is not writeable. https://err.sh/zeit/next.js/build-dir-not-writeable
    at build (/private/var/tmp/_bazel_spencerelliott/d59f504d8c6ae58caa702041c7337ba9/sandbox/darwin-sandbox/9/execroot/bazel_frontend_examples/node_modules/next/dist/build/index.js:1:6840)
    at async main (/private/var/tmp/_bazel_spencerelliott/d59f504d8c6ae58caa702041c7337ba9/sandbox/darwin-sandbox/9/execroot/bazel_frontend_examples/nextjs-app/next-build.js:18:3)
```
