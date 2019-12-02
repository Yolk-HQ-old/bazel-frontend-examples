workspace(
    name = "bazel_frontend_examples",
    managed_directories = {"@npm": ["node_modules"]},
)

# https://bazelbuild.github.io/rules_nodejs/install.html
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "c612d6b76eaa17540e8b8c806e02701ed38891460f9ba3303f4424615437887a",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.42.1/rules_nodejs-0.42.1.tar.gz"],
)
load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")
node_repositories(
    package_json = ["//:package.json"],
    node_version = "12.13.0",
    yarn_version = "1.19.1",
)
yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)
