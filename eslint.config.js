import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';

export default [
    // 1. 基本設定
    js.configs.recommended,
    {
        ignores: [
            'node_modules/',
            '.next/',
            'out/',
            'dist/',
            'build/',
            '*.config.js',
            '*.config.ts',
        ],
    },

    // 2. 全ファイル共通ルール
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                // 基本グローバル（全技術スタック共通）
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                global: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
            },
        },
        plugins: {
            import: importPlugin,
            unicorn,
        },
        rules: {
            // 基本ルール
            'no-console': 'error',
            'no-debugger': 'error',
            'no-alert': 'error',
            'no-unused-expressions': 'error',
            'no-unreachable': 'error',
            'prefer-const': 'error',
            'object-shorthand': 'error',
            'prefer-template': 'error',
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-new-func': 'error',
            'no-useless-concat': 'error',
            quotes: ['error', 'single'],
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'no-var': 'error',
            'no-useless-return': 'error',

            // 複雑度制限
            complexity: ['error', 3],
            'max-depth': ['error', 3],
            'max-lines-per-function': ['error', 50],
            'max-params': ['error', 3],
            'max-nested-callbacks': ['error', 3],

            // Import ルール
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            'import/no-duplicates': 'error',

            // Unicorn ルール
            'unicorn/filename-case': 'error',
        },
    },

    // 3. TypeScript専用ルール
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: '.',
            },
            globals: {
                // TypeScriptファイル用のグローバル変数
                crypto: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
        },
        rules: {
            // TypeScriptファイルでは基本のno-unused-varsを無効化し、@typescript-eslint/no-unused-varsのみを使用
            'no-unused-vars': 'off',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    args: 'all',
                    ignoreRestSiblings: true,
                    vars: 'all',
                },
            ],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/array-type': ['error', { default: 'array' }],
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/strict-boolean-expressions': 'error',
            '@typescript-eslint/no-empty-function': 'error',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/prefer-as-const': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/unbound-method': 'error',
            '@typescript-eslint/unified-signatures': 'error',
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
    },

    // 4. Node.js専用ルール（JavaScriptファイルのみ）
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                // Node.js 組み込みモジュール（JavaScriptファイルのみ）
                fs: 'readonly',
                path: 'readonly',
                os: 'readonly',
                util: 'readonly',
                events: 'readonly',
                stream: 'readonly',
                http: 'readonly',
                https: 'readonly',
                url: 'readonly',
                querystring: 'readonly',
                child_process: 'readonly',
                cluster: 'readonly',
                dgram: 'readonly',
                dns: 'readonly',
                net: 'readonly',
                punycode: 'readonly',
                readline: 'readonly',
                repl: 'readonly',
                string_decoder: 'readonly',
                tls: 'readonly',
                tty: 'readonly',
                v8: 'readonly',
                vm: 'readonly',
                zlib: 'readonly',
                assert: 'readonly',
                constants: 'readonly',
                perf_hooks: 'readonly',
                timers: 'readonly',
                worker_threads: 'readonly',
            },
        },
    },

    // 5. React専用ルール（JSX/TSXファイルのみ）
    {
        files: ['**/*.{jsx,tsx}'],
        languageOptions: {
            globals: {
                // React グローバル（JSX/TSXファイルのみ）
                React: 'readonly',
                ReactDOM: 'readonly',
                // ブラウザ環境のグローバル変数
                fetch: 'readonly',
                alert: 'readonly',
                window: 'readonly',
                document: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            // React ルール
            'react/prop-types': 'off',
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/no-unescaped-entities': 'error',
            'react/no-array-index-key': 'error',
            'react/no-danger': 'error',
            'react/no-deprecated': 'error',
            'react/no-direct-mutation-state': 'error',
            'react/no-find-dom-node': 'error',
            'react/no-is-mounted': 'error',
            'react/no-render-return-value': 'error',
            'react/no-string-refs': 'error',
            'react/no-unknown-property': 'error',
            'react/no-unsafe': ['error', { checkAliases: true }],
            'react/require-render-return': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // JSX A11y ルール
            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/anchor-has-content': 'error',
            'jsx-a11y/anchor-is-valid': 'error',
            'jsx-a11y/aria-props': 'error',
            'jsx-a11y/aria-proptypes': 'error',
            'jsx-a11y/aria-unsupported-elements': 'error',
            'jsx-a11y/role-has-required-aria-props': 'error',
            'jsx-a11y/role-supports-aria-props': 'error',
            'jsx-a11y/click-events-have-key-events': 'error',
            'jsx-a11y/no-static-element-interactions': 'error',
            'jsx-a11y/iframe-has-title': 'error',
            'jsx-a11y/img-redundant-alt': 'error',
            'jsx-a11y/no-access-key': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // 6. Next.js専用ルール（JSX/TSXファイルのみ）
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            // Next.js ルール
            '@next/next/no-html-link-for-pages': 'error',
            '@next/next/no-img-element': 'error',
            '@next/next/no-sync-scripts': 'error',
            '@next/next/no-unwanted-polyfillio': 'error',
            '@next/next/no-page-custom-font': 'error',
            '@next/next/no-css-tags': 'error',
            '@next/next/no-head-element': 'error',
            '@next/next/no-typos': 'error',
            '@next/next/no-before-interactive-script-outside-document': 'error',
            '@next/next/no-title-in-document-head': 'error',
            '@next/next/no-duplicate-head': 'error',
            '@next/next/no-script-component-in-head': 'error',
            '@next/next/no-styled-jsx-in-document': 'error',
        },
    },

    // 7. ファイルパターン別例外
    // Next.js App Router 専用ルール
    {
        files: ['app/**/*.{ts,tsx}'],
        rules: {
            '@next/next/no-head-element': 'off', // App Routerではlayout.tsxでheadを管理
            '@next/next/no-html-link-for-pages': 'off', // App RouterではLinkコンポーネントを使用
        },
    },

    // 設定ファイル用の例外
    {
        files: ['*.config.js', '*.config.ts', 'next.config.{js,ts}'],
        rules: {
            'no-console': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'unicorn/filename-case': 'off',
        },
    },

    // スクリプトファイル用の例外
    {
        files: ['scripts/**/*'],
        rules: {
            'no-console': 'off',
            'no-process-exit': 'off',
        },
    },

    prettier,
];
