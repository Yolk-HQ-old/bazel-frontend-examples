load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary", "npm_package_bin")
load("@npm//next:index.bzl", "next")

nodejs_binary(
    name = "next_build",
    data = [
        "@npm//minimist",
        "@npm//next",
    ],
    entry_point = ":next-build.js",
)

# This doesn't work; results in this error:
#   $ bazel build :build
#   > Build error occurred
#   Error: > Build directory is not writeable. https://err.sh/zeit/next.js/build-dir-not-writeable
npm_package_bin(
    name = "build",
    args = [
        "--node_options=--inspect-brk",
        "--src_dir",
        "$(location :src)",
        "--out_dir",
        "$(@D)",
    ],
    data = ["src/."],
    output_dir = True,
    tool = ":next_build",
)

next(
    name = "dev",
    args = [
        "dev",
        "nextjs-app/src",  # TODO: resolve this path properly using a filegroup
    ],
    data = [
        "src/.",
        "@npm//:node_modules",
        "@npm//react",
        "@npm//react-dom",
    ],
)
