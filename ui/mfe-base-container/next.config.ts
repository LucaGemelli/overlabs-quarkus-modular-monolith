const { CUSTOMER_PATH,PRODUCT_PATH } = process.env;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/customer",
        destination: `${CUSTOMER_PATH}/customer`,
      },
      {
        source: "/customer/:path+",
        destination: `${CUSTOMER_PATH}/customer/:path+`,
      },
      {
        source: "/customer-static/_next/:path+",
        destination: `${CUSTOMER_PATH}/customer-static/_next/:path+`,
      },
      {
        source: "/products",
        destination: `${PRODUCT_PATH}/products`,
      },
      {
        source: "/products/:path+",
        destination: `${PRODUCT_PATH}/products/:path+`,
      },
      {
        source: "/products-static/_next/:path+",
        destination: `${PRODUCT_PATH}/products-static/_next/:path+`,
      }
    ];
  },
};

export default nextConfig;
