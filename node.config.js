import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";

export default [
    // 基本設定
    js.configs.recommended,
    {
        ignores: [
            "node_modules/",
            "dist/",
            "build/",
            "*.config.js",
            "*.config.ts",
        ],
    },
    // 全ファイル共通ルール
    {
        files: ["**/*.{js,ts}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                // Node.js グローバル
                console: "readonly",
                process: "readonly",
                Buffer: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                global: "readonly",
                module: "readonly",
                require: "readonly",
                exports: "readonly",
                // Node.js 組み込みモジュール
                fs: "readonly",
                path: "readonly",
                os: "readonly",
                util: "readonly",
                events: "readonly",
                stream: "readonly",
                crypto: "readonly",
                http: "readonly",
                https: "readonly",
                url: "readonly",
                querystring: "readonly",
                child_process: "readonly",
                cluster: "readonly",
                dgram: "readonly",
                dns: "readonly",
                domain: "readonly",
                net: "readonly",
                punycode: "readonly",
                readline: "readonly",
                repl: "readonly",
                string_decoder: "readonly",
                tls: "readonly",
                tty: "readonly",
                v8: "readonly",
                vm: "readonly",
                zlib: "readonly",
                assert: "readonly",
                constants: "readonly",
                perf_hooks: "readonly",
                timers: "readonly",
                worker_threads: "readonly",
            },
        },
        plugins: {
            import: importPlugin,
            unicorn,
        },
        rules: {
            // 基本ルール
            "no-console": "error",
            "no-debugger": "error",
            "no-alert": "error",
            "no-unused-expressions": "error",
            "no-unreachable": "error",
            "prefer-const": "error",
            "object-shorthand": "error",
            "prefer-template": "error",
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-new-func": "error",
            "no-useless-concat": "error",
            quotes: ["error", "single"],
            eqeqeq: ["error", "always", { null: "ignore" }],
            "no-var": "error",
            "no-useless-return": "error",

            // 複雑度制限
            complexity: ["error", 3],
            "max-depth": ["error", 3],
            "max-lines-per-function": ["error", 50],
            "max-params": ["error", 3],
            "max-nested-callbacks": ["error", 3],

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
            "import/no-duplicates": "error",

            // Unicorn ルール
            "unicorn/filename-case": "error",
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
                node: {
                    extensions: [".js", ".ts"],
                },
            },
        },
    },
    // TypeScriptファイル専用ルール
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: ".",
            },
        },
        plugins: {
            "@typescript-eslint": typescript,
        },
        rules: {
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/array-type": ["error", { default: "array" }],
            "@typescript-eslint/prefer-nullish-coalescing": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/strict-boolean-expressions": "error",
            "@typescript-eslint/no-undefined": "error",
            "@typescript-eslint/no-empty-function": "error",
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/prefer-as-const": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/prefer-includes": "error",
            "@typescript-eslint/prefer-readonly": "error",
            "@typescript-eslint/prefer-string-starts-ends-with": "error",
            "@typescript-eslint/require-array-sort-compare": "error",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/restrict-template-expressions": "error",
            "@typescript-eslint/return-await": "error",
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            "@typescript-eslint/unbound-method": "error",
            "@typescript-eslint/unified-signatures": "error",
        },
    },
    // テストファイル用の例外
    {
        files: ["tests/**/*", "**/*.test.{ts,js}", "**/*.spec.{ts,js}"],
        rules: {
            "unicorn/filename-case": "off",
            "no-console": "off",
            "max-lines-per-function": "off",
            complexity: "off",
            eqeqeq: "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/await-thenable": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-call": "off",
        },
    },
    // 設定ファイル用の例外
    {
        files: ["*.config.js", "*.config.ts"],
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-var-requires": "off",
            "unicorn/filename-case": "off",
        },
    },
    // スクリプトファイル用の例外
    {
        files: ["scripts/**/*"],
        rules: {
            "no-console": "off",
            "no-process-exit": "off",
        },
    },
    prettier,
];
