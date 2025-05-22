/** @type {import('next').NextConfig} */

const DASHBOARD_URL = process.env.DASHBOARD_URL || "http://dashboard:3001";
const LOGIN_URL = process.env.LOGIN_URL || "http://login:3002";

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  assetPrefix: "/home",
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: `${DASHBOARD_URL}/`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${DASHBOARD_URL}/:path*`,
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
