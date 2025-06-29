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
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: ".",
            },
            globals: {
                browser: true,
                window: "readonly",
                es2022: true,
                node: true,
                // テスト用のグローバル変数
                fetch: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
                console: "readonly",
                alert: "readonly",
                process: "readonly",
                __dirname: "readonly",
                React: "readonly",
                ReactDOM: "readonly",
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
                    filter: { regex: "^[a-z]", match: true },
                },
                {
                    selector: "function",
                    format: ["PascalCase"],
                    filter: { regex: "^[A-Z]", match: true },
                },
                { selector: "variable", format: ["camelCase", "PascalCase"] },
                { selector: "parameter", format: ["camelCase"] },
                { selector: "class", format: ["PascalCase"] },
                { selector: "interface", format: ["PascalCase"] },
                { selector: "typeAlias", format: ["PascalCase"] },
                { selector: "enum", format: ["PascalCase"] },
                { selector: "enumMember", format: ["PascalCase"] },
                { selector: "property", format: ["camelCase"] },
                { selector: "method", format: ["camelCase"] },
                { selector: "accessor", format: ["camelCase"] },
            ],
            // ファイル名の命名規則
            "unicorn/filename-case": ["error", { case: "camelCase" }],
            // null vs undefined の扱い（TypeScript Deep Dive スタイルガイド）
            eqeqeq: ["error", "always", { null: "ignore" }],
            // 引用符の使用（TypeScript Deep Dive スタイルガイド）
            quotes: ["error", "single", { avoidEscape: true }],
            "jsx-quotes": ["error", "prefer-double"],
            // 複雑度制限
            complexity: ["error", 3],
            "max-depth": ["error", 3],
            "max-lines-per-function": ["error", 50],
            "max-params": ["error", 3],
            "max-nested-callbacks": ["error", 3],
            // React ルール
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-key": "error",
            "react/jsx-no-duplicate-props": "error",
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
            // 一般的なルール
            "no-console": "error",
            "no-debugger": "error",
            "no-alert": "error",
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

            // MDN非推奨機能の検出・防止ルール
            "unicorn/no-new-array": "error", // new Array()を防止
            "no-void": "error", // void演算子の使用を制限
            "no-with": "error", // with文は非推奨
            "no-caller": "error", // arguments.caller 非推奨
            "no-catch-shadow": "error", // catch句の変数名の重複を防止
            "no-delete-var": "error", // var宣言の削除を防止
            "no-func-assign": "error", // 関数の再代入を防止
            "no-import-assign": "error", // importの再代入を防止
            "no-native-reassign": "error", // グローバルオブジェクトの再代入を防止
            "no-negated-in-lhs": "error", // in演算子の左辺での否定を防止
            "no-new-require": "error", // new require()を防止
            "no-path-concat": "error", // パス連結の非推奨パターンを防止
            "no-process-env": "error", // process.envの直接使用を制限
            "no-process-exit": "error", // process.exit()の使用を制限
            "no-spaced-func": "error", // 関数呼び出しのスペースを制限
            "no-sync": "error", // 同期メソッドの使用を制限
            "no-undef": "error", // 未定義変数の使用を防止
            "no-undefined": "error", // undefinedの再代入を防止
            "no-unused-labels": "error", // 未使用ラベルの検出
            "no-use-before-define": "error", // 定義前使用を防止
            "no-warning-comments": "error", // 警告コメントの検出
            "no-mixed-spaces-and-tabs": "error", // スペースとタブの混在を防止
            "no-trailing-spaces": "error", // 末尾スペースを防止
            "no-irregular-whitespace": "error", // 不正な空白文字を防止
            "no-multi-spaces": "error", // 複数スペースを防止
            "no-multi-str": "error", // 複数行文字列の非推奨パターンを防止
            "no-octal": "error", // 8進数リテラルを防止
            "no-octal-escape": "error", // 8進数エスケープを防止
            "no-proto": "error", // __proto__の使用を防止
            "no-redeclare": "error", // 変数の再宣言を防止
            "no-self-compare": "error", // 自己比較を防止
            "no-sequences": "error", // カンマ演算子を防止
            "no-throw-literal": "error", // リテラルのthrowを防止
            "no-unused-expressions": "error", // 未使用式を防止
            "no-useless-call": "error", // 不要なcall/applyを防止
            "no-useless-concat": "error", // 不要な文字列連結を防止
            "no-useless-return": "error", // 不要なreturnを防止
            "prefer-promise-reject-errors": "error", // Promise.rejectでErrorオブジェクトを要求
            "require-await": "error", // async関数でのawaitを要求
            yoda: "error", // Yoda条件を防止

            // React固有の非推奨機能検出
            "react/no-access-state-in-setstate": "error", // setStateでのstate直接参照を防止
            "react/no-did-mount-set-state": "error", // componentDidMountでのsetStateを防止
            "react/no-did-update-set-state": "error", // componentDidUpdateでのsetStateを防止
            "react/no-will-update-set-state": "error", // componentWillUpdateでのsetStateを防止
            "react/no-redundant-should-component-update": "error", // 不要なshouldComponentUpdateを防止
            "react/no-typos": "error", // Reactライフサイクルメソッドのタイポを防止
            "react/no-unsafe": ["error", { checkAliases: true }], // 非推奨メソッドの使用を防止
            "react/prefer-es6-class": "error", // ES6クラスの使用を推奨
            "react/prefer-stateless-function": "error", // 関数コンポーネントの使用を推奨
            "react/require-default-props": "error", // defaultPropsの定義を要求
            "react/require-optimization": "error", // パフォーマンス最適化を要求
            "react/sort-comp": "error", // コンポーネントメソッドの順序を強制
            "react/sort-prop-types": "error", // propTypesの順序を強制
            "react/state-in-constructor": "error", // コンストラクタでのstate初期化を要求
            "react/static-property-placement": "error", // 静的プロパティの配置を強制
            "react/style-prop-object": "error", // styleプロパティの型を強制
            "react/void-dom-elements-no-children": "error", // void要素での子要素を防止
            "react/function-component-definition": [
                "error",
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],
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
    // TypeScriptファイル専用ルール
    {
        files: ["**/*.{ts,tsx}"],
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

            // TypeScript固有の非推奨機能検出
            "@typescript-eslint/no-array-constructor": "error", // new Array()を防止
            "@typescript-eslint/no-empty-function": "error", // 空関数を防止
            "@typescript-eslint/no-inferrable-types": "error", // 推論可能な型注釈を防止
            "@typescript-eslint/no-misused-new": "error", // インターフェースでのnewを防止
            "@typescript-eslint/no-namespace": "error", // namespaceの使用を防止
            "@typescript-eslint/no-this-alias": "error", // thisの別名付けを防止
            "@typescript-eslint/no-unnecessary-type-assertion": "error", // 不要な型アサーションを防止
            "@typescript-eslint/no-useless-constructor": "error", // 不要なコンストラクタを防止
            "@typescript-eslint/prefer-as-const": "error", // as constの使用を推奨
            "@typescript-eslint/prefer-function-type": "error", // 関数型の使用を推奨
            "@typescript-eslint/prefer-includes": "error", // includes()の使用を推奨
            "@typescript-eslint/prefer-nullish-coalescing": "error", // ??演算子の使用を推奨
            "@typescript-eslint/prefer-optional-chain": "error", // ?.演算子の使用を推奨
            "@typescript-eslint/prefer-readonly": "error", // readonlyの使用を推奨
            "@typescript-eslint/prefer-reduce-type-parameter": "error", // reduceの型パラメータを推奨
            "@typescript-eslint/prefer-string-starts-ends-with": "error", // startsWith/endsWithの使用を推奨
            "@typescript-eslint/prefer-ts-expect-error": "error", // @ts-expect-errorの使用を推奨
            "@typescript-eslint/require-array-sort-compare": "error", // sort()での比較関数を要求
            "@typescript-eslint/require-await": "error", // async関数でのawaitを要求
            "@typescript-eslint/restrict-plus-operands": "error", // +演算子の型チェック
            "@typescript-eslint/restrict-template-expressions": "error", // テンプレートリテラルの型チェック
            "@typescript-eslint/return-await": "error", // return awaitの使用を推奨
            "@typescript-eslint/strict-boolean-expressions": "error", // 厳密な真偽値チェック
            "@typescript-eslint/switch-exhaustiveness-check": "error", // switch文の網羅性チェック
            "@typescript-eslint/unbound-method": "error", // メソッドの未束縛使用を防止
            "@typescript-eslint/unified-signatures": "error", // 統一されたシグネチャを要求
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                browser: true,
                window: "readonly",
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
    },
    // テストファイル用の設定
    {
        files: ["tests/**/*"],
        rules: {
            // テストファイルでは一部のルールを緩和
            "unicorn/filename-case": "off", // ファイル名の命名規則を無効化
            "no-console": "off", // console.logを許可
            "max-lines-per-function": "off", // 関数の行数制限を無効化
            complexity: "off", // 複雑度制限を無効化
            "react/require-default-props": "off", // defaultProps要求を無効化
            "@typescript-eslint/strict-boolean-expressions": "off", // 厳密な真偽値チェックを無効化
            "@typescript-eslint/prefer-nullish-coalescing": "off", // nullish coalescing要求を無効化
            "@typescript-eslint/require-await": "off", // await要求を無効化
            "@typescript-eslint/no-floating-promises": "off", // 浮動Promiseチェックを無効化
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                browser: true,
                window: "readonly",
                es2022: true,
                node: true,
                // テスト用のグローバル変数
                fetch: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
                console: "readonly",
                alert: "readonly",
                process: "readonly",
                __dirname: "readonly",
                React: "readonly",
                ReactDOM: "readonly",
            },
        },
    }
);
