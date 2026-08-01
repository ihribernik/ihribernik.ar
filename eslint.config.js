import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [".astro/", "dist/", "node_modules/", "playwright-report/", "test-results/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"]
      }
    }
  },
  {
    files: ["**/*.{js,mjs,ts}"],
    languageOptions: {
      globals: {
        document: "readonly",
        localStorage: "readonly",
        matchMedia: "readonly",
        window: "readonly"
      }
    }
  }
];
