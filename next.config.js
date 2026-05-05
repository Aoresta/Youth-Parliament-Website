const path = require("path");

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const githubPagesPath = "/Youth-Parliament-Website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? githubPagesPath : "",
  assetPrefix: isGithubPages ? `${githubPagesPath}/` : "",
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname)
  }
};

module.exports = nextConfig;
