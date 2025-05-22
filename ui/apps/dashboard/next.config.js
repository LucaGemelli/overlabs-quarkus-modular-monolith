/** @type {import('next').NextConfig} */

const HOME_URL = process.env.HOME_URL || "http://home:3000";
const LOGIN_URL = process.env.LOGIN_URL || "http://login:3002";

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  assetPrefix: "/dashboard",
  async rewrites() {
    return [
      {
        source: "/home",
        destination: `${HOME_URL}/`,
      },
      {
        source: "/home/:path*",
        destination: `${HOME_URL}/:path*`,
      },
      {
        source: "/login",
        destination: `${LOGIN_URL}/`,
      },
      {
        source: "/login/:path*",
        destination: `${LOGIN_URL}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
};
