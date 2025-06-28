import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unicornPlugin from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true,
            },
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: ".",
            },
        },
        plugins: {
            "@next/next": nextPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
            import: importPlugin,
            unicorn: unicornPlugin,
        },
        rules: {
            // TypeScript Deep Dive スタイルガイドに基づく命名規則
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "function",
                    format: ["camelCase"],
                },
                {
                    selector: "variable",
                    format: ["camelCase"],
                },
                {
                    selector: "parameter",
                    format: ["camelCase"],
                },
                {
                    selector: "class",
                    format: ["PascalCase"],
                },
                {
                    selector: "interface",
                    format: ["PascalCase"],
                },
                {
                    selector: "typeAlias",
                    format: ["PascalCase"],
                },
                {
                    selector: "enum",
                    format: ["PascalCase"],
                },
                {
                    selector: "enumMember",
                    format: ["PascalCase"],
                },
                {
                    selector: "property",
                    format: ["camelCase"],
                },
                {
                    selector: "method",
                    format: ["camelCase"],
                },
                {
                    selector: "accessor",
                    format: ["camelCase"],
                },
                {
                    selector: "getter",
                    format: ["camelCase"],
                },
                {
                    selector: "setter",
                    format: ["camelCase"],
                },
            ],

            // ファイル名の命名規則
            "unicorn/filename-case": ["error", { case: "camelCase" }],

            // 配列の型注釈（TypeScript Deep Dive スタイルガイド）
            "@typescript-eslint/array-type": ["error", { default: "array" }],

            // null vs undefined の扱い（TypeScript Deep Dive スタイルガイド）
            eqeqeq: ["error", "always", { null: "ignore" }],

            // 引用符の使用（TypeScript Deep Dive スタイルガイド）
            quotes: ["error", "single", { avoidEscape: true }],
            "jsx-quotes": ["error", "prefer-double"],

            // 厳格なルール
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "warn",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/no-misused-promises": "error",

            // 複雑度制限
            complexity: ["error", 3],
            "max-depth": ["error", 3],
            "max-lines-per-function": ["error", 50],
            "max-params": ["error", 3],
            "max-nested-callbacks": ["error", 3],

            // 命名規則
            camelcase: ["error", { properties: "always" }],
            "id-match": ["error", "^[a-zA-Z][a-zA-Z0-9]*$"],

            // React ルール
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "react/jsx-uses-vars": "error",
            "react/jsx-key": "error",
            "react/jsx-no-duplicate-props": "error",
            "react/jsx-no-undef": "error",
            "react/no-unescaped-entities": "error",
            "react/no-array-index-key": "error",
            "react/no-danger": "error",
            "react/no-deprecated": "error",
            "react/no-direct-mutation-state": "error",
            "react/no-find-dom-node": "error",
            "react/no-is-mounted": "error",
            "react/no-render-return-value": "error",
            "react/no-string-refs": "error",
            "react/no-unknown-property": "error",
            "react/no-unsafe": ["error", { checkAliases: true }],
            "react/require-render-return": "error",

            // React Hooks ルール
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",

            // JSX A11y ルール
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/anchor-has-content": "error",
            "jsx-a11y/anchor-is-valid": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/aria-proptypes": "error",
            "jsx-a11y/aria-unsupported-elements": "error",
            "jsx-a11y/role-has-required-aria-props": "error",
            "jsx-a11y/role-supports-aria-props": "error",
            "jsx-a11y/click-events-have-key-events": "error",
            "jsx-a11y/no-static-element-interactions": "error",
            "jsx-a11y/iframe-has-title": "error",
            "jsx-a11y/img-redundant-alt": "error",
            "jsx-a11y/no-access-key": "error",

            // Import ルール
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    "newlines-between": "always",
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
            "import/no-unresolved": "off",
            "import/named": "off",
            "import/no-duplicates": "error",
            "import/no-unused-modules": "error",

            // 一般的なルール
            "no-console": "error",
            "no-debugger": "error",
            "no-alert": "error",
            "no-duplicate-imports": "error",
            "no-unused-expressions": "error",
            "no-unreachable": "error",
            "prefer-const": "error",
            "no-var": "error",
            "object-shorthand": "error",
            "prefer-template": "error",
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-new-func": "error",
            "no-script-url": "error",
            "no-sequences": "error",
            "no-throw-literal": "error",
            "no-unmodified-loop-condition": "error",
            "no-useless-call": "error",
            "no-useless-concat": "error",
            "no-useless-return": "error",
            "prefer-promise-reject-errors": "error",
            "require-await": "error",
            yoda: "error",
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                browser: true,
                es2022: true,
                node: true,
            },
        },
    },
    {
        ignores: [
            "node_modules/",
            ".next/",
            "out/",
            "dist/",
            "build/",
            "*.config.js",
            "*.config.ts",
        ],
    }
);
