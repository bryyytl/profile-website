import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import "eslint-plugin-only-warn";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ...eslint.configs.recommended,
    rules: {
      "no-console": "warn",
      "sort-keys": "warn",
    },
  },
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    ...reactPlugin.configs.flat.recommended,
    rules: {
      "react/jsx-sort-props": "warn",
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  jsxA11y.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
