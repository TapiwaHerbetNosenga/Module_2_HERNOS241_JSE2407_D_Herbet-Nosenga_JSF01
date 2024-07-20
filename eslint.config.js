import globals from "globals";
import pluginJs from "@eslint/js";
import htmlhint from "eslint-plugin-htmlhint";

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:tailwindcss/recommended", "plugin:htmlhint/recommended" ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["html", "tailwindcss", "htmlhint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "htmlhint/htmlhint": [
      "error",
      {
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "doctype-first": true,
        "tag-pair": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "attr-no-duplication": true,
        "alt-require": true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.html"],
      processor: "html/html-processor",
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".html"],
      },
    },
  },
  languageOptions: {
    globals: globals.browser,
  },
};
