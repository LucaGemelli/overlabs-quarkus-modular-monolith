/** @type {import('next').NextConfig} */

const DASHBOARD_URL = process.env.DASHBOARD_URL || "http://localhost:3001";
const LOGIN_URL = process.env.LOGIN_URL || "http://localhost:3002";

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
        source: "/dashboard/:path*",
        destination: `${DASHBOARD_URL}/:path*`,
      },
      {
        source: "/login",
        destination: `${LOGIN_URL}/`,
        source: "/login/:path*",
        destination: `${LOGIN_URL}/:path*`,
      },
    ];
  },
};
