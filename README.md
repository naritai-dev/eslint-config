# @naritai-dev/eslint-config

厳格なESLintとPrettier設定パッケージ。Node.js + Next.js + TypeScript + React + Tailwind CSSプロジェクト向け。

## 特徴

- **厳格なコード品質**: TypeScript Deep Dive スタイルガイド準拠
- **最新機能対応**: 最新のJavaScript/TypeScript機能を優先
- **アクセシビリティ**: jsx-a11yルールでアクセシビリティを確保
- **複雑度制限**: 関数の複雑度を制限して保守性を向上
- **自動フォーマット**: Prettierとの統合で一貫したコードスタイル

## インストール

```bash
npm install --save-dev @naritai-dev/eslint-config
```

### 必要な依存関係

以下のパッケージもインストールしてください：

```bash
npm install --save-dev @eslint/js @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier prettier-plugin-tailwindcss
```

## 使用方法

### 1. ESLint設定ファイルの作成

プロジェクトのルートに `eslint.config.js` を作成：

```javascript
export { default } from '@naritai-dev/eslint-config';
```

### 2. package.jsonにスクリプトを追加

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{js,ts,tsx}\"",
    "lint:fix": "eslint \"**/*.{js,ts,tsx}\" --fix"
  }
}
```

### 3. Prettier設定（オプション）

プロジェクトのルートに `.prettierrc` を作成：

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 4,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## ルール概要

### TypeScript
- 厳密なnullチェック
- `any`型の使用禁止
- 適切な型ガードの使用
- 型推論の活用

### React
- フックのルール遵守
- アクセシビリティガイドライン
- JSXの適切な使用

### Next.js
- App Router対応
- 画像最適化の推奨
- セキュリティルール

### コード品質
- 複雑度制限（最大3）
- 未使用変数の検出
- 一貫した命名規則

## 段階的導入

新規プロジェクトでは以下の順序で導入することを推奨：

1. **基本設定**: ESLintとPrettierの設定
2. **エラー修正**: エラー（error）レベルの問題を修正
3. **警告修正**: 警告（warning）レベルの問題を修正
4. **スタイル統一**: コードスタイルの統一

## トラブルシューティング

### よくある問題

**Q: TypeScriptの型エラーが発生する**
A: `tsconfig.json`で適切な型定義を確認してください

**Q: Reactのフックエラーが発生する**
A: フックの呼び出し順序を確認し、"use client"ディレクティブを追加してください

**Q: 複雑度制限エラーが発生する**
A: 関数を小さく分割するか、一時的にルールを緩和してください

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告を歓迎します。
