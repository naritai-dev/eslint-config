# @naritai-dev/eslint-config

naritai-dev組織のNode.js + Next.js + TypeScript + React + Tailwind CSSプロジェクト用の厳格なESLint・Prettier設定です。

> **注意**
> Node.js専用設定では `eslint-plugin-node` はFlat Configや他プラグイン(import/unicorn/typescript等)と競合しやすいため、原則として利用しません。
> import/unicorn/typescript/JS標準ルールのみで十分な堅牢性を担保しています。

## 特徴

- **厳格な複雑度制限**: 関数の複雑度を3以下に制限
- **Node.js最適化**: サーバーサイド開発に最適化されたルール
- **Next.js最適化**: App Router対応のNext.js専用ルール
- **TypeScript厳格モード**: 型安全性を最大限活用
- **React 18対応**: 最新のReact機能に対応
- **Tailwind CSS対応**: クラス名の自動並び替え
- **アクセシビリティ**: jsx-a11yによる厳格なアクセシビリティチェック

## インストール

```bash
npm install --save-dev @naritai-dev/eslint-config
```

## 使用方法

### フルスタック設定（Next.js + React + Node.js）

プロジェクトルートに`eslint.config.js`を作成：

```javascript
import eslintConfig from "@naritai-dev/eslint-config";

export default eslintConfig;
```

### Node.js専用設定

Node.js環境のみで使用する場合：

```javascript
import nodeConfig from "@naritai-dev/eslint-config/node";

export default nodeConfig;
```

### Prettier設定

プロジェクトルートに`.prettierrc`を作成：

```json
"@naritai-dev/eslint-config/.prettierrc"
```

### VS Code設定

`.vscode/settings.json`をプロジェクトにコピーしてください。

## 必要な依存関係

### フルスタック設定用

```json
{
    "devDependencies": {
        "@eslint/js": "^9.30.0",
        "@next/eslint-plugin-next": "^15.3.4",
        "@typescript-eslint/eslint-plugin": "^8.35.0",
        "@typescript-eslint/parser": "^8.35.0",
        "eslint": "^9.30.0",
        "eslint-config-prettier": "^10.1.5",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.2",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-react": "^7.37.5",
        "eslint-plugin-react-hooks": "^5.2.0",
        "eslint-plugin-unicorn": "^58.0.0",
        "prettier": "^3.6.2",
        "prettier-plugin-tailwindcss": "^0.5.12"
    }
}
```

### Node.js専用設定用

```json
{
    "devDependencies": {
        "@eslint/js": "^9.30.0",
        "@typescript-eslint/eslint-plugin": "^8.35.0",
        "@typescript-eslint/parser": "^8.35.0",
        "eslint": "^9.30.0",
        "eslint-config-prettier": "^10.1.5",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-unicorn": "^58.0.0",
        "prettier": "^3.6.2"
    }
}
```

## ルール概要

### 複雑度制限

- 関数の複雑度: 最大3
- ネストの深さ: 最大3
- 関数の行数: 最大50行
- パラメータ数: 最大3

### Node.js専用ルール

- サーバーサイド開発最適化
- Node.jsグローバル変数の適切な定義
- ファイルシステム操作の安全性
- 環境変数の適切な使用
- 非同期処理の最適化
- コールバック関数の適切な処理
- 非推奨APIの使用禁止

### Next.js専用ルール

- App Router対応
- 画像最適化の強制
- パフォーマンス最適化
- SEO最適化

### TypeScript厳格ルール

- `any`型の使用禁止
- 非nullアサーション禁止
- 厳密な真偽値チェック
- 型推論の活用

### React最適化

- フックのルール
- コンポーネント最適化
- パフォーマンス考慮

## 設定の違い

| 機能             | フルスタック設定 | Node.js専用設定 |
| ---------------- | ---------------- | --------------- |
| React/Next.js    | ✅               | ❌              |
| Node.js          | ✅               | ✅              |
| TypeScript       | ✅               | ✅              |
| 複雑度制限       | ✅               | ✅              |
| アクセシビリティ | ✅               | ❌              |
| Tailwind CSS     | ✅               | ❌              |

## 更新方法

設定を更新した場合：

```bash
# パッケージ側
npm run publish:patch

# 各プロジェクト側
npm update @naritai-dev/eslint-config
```

## ライセンス

MIT
