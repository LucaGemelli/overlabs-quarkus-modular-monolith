const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: [
        "@repo/eslint-config/react",
        "plugin:@next/next/recommended",
        "plugin:@next/next/core-web-vitals",
    ],
    parserOptions: {
        project,
        tsconfigRootDir: process.cwd(),
    },
    globals: {
        React: true,
        JSX: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
            node: {
                extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/"],
    // add rules configurations here
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "@next/next/no-img-element": "off",
        "react/display-name": "off",
    },
};
