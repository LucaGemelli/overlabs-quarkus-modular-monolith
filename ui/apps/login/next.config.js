/** @type {import('next').NextConfig} */

const HOME_URL = process.env.HOME_URL || "http://home:3000";
const DASHBOARD_URL = process.env.DASHBOARD_URL || "http://dashboard:3001";

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  assetPrefix: "/login",
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
        source: "/dashboard",
        destination: `${DASHBOARD_URL}/`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${DASHBOARD_URL}/:path*`,
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
