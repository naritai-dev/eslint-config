# @naritai-dev/eslint-config

厳格なESLintとPrettier設定パッケージ。Node.js + Next.js + TypeScript + React + Tailwind CSSプロジェクト向け。

## 🚀 特徴

- **厳格なコード品質**: TypeScript Deep Dive スタイルガイド準拠
- **最新機能対応**: 最新のJavaScript/TypeScript機能を優先
- **アクセシビリティ**: jsx-a11yルールでアクセシビリティを確保
- **複雑度制限**: 関数の複雑度を制限して保守性を向上
- **自動フォーマット**: Prettierとの統合で一貫したコードスタイル

## 🎯 クイックスタート

### 方法1: npmパッケージとしてインストール（推奨）

```bash
# 1️⃣ パッケージをインストール
npm install --save-dev @naritai-dev/eslint-config

# 2️⃣ 必要な依存関係をインストール
npm install --save-dev @eslint/js @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier prettier-plugin-tailwindcss

# 3️⃣ ESLint設定ファイルを作成
echo 'export { default } from "@naritai-dev/eslint-config";' > eslint.config.js

# 4️⃣ package.jsonにスクリプトを追加
npm pkg set scripts.lint="eslint \"**/*.{js,ts,tsx}\""
npm pkg set scripts."lint:fix"="eslint \"**/*.{js,ts,tsx}\" --fix"
```

### 方法2: リポジトリをクローンして一発セットアップ

```bash
# 1️⃣ リポジトリをクローン
git clone https://github.com/naritai-dev/eslint-config.git
cd eslint-config

# 2️⃣ セットアップスクリプトを実行
# macOS/Linux
chmod +x setup-eslint.sh
./setup-eslint.sh

# Windows (PowerShell)
.\setup-eslint.ps1

# Windows (コマンドプロンプト)
setup-eslint.bat
```

## 📦 インストール

### 1️⃣ パッケージのインストール

```bash
npm install --save-dev @naritai-dev/eslint-config
```

### 2️⃣ 必要な依存関係のインストール

```bash
npm install --save-dev @eslint/js @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier prettier-plugin-tailwindcss
```

## ⚙️ 設定手順

### 3️⃣ ESLint設定ファイルの作成

プロジェクトのルートに `eslint.config.js` を作成：

```javascript
export { default } from '@naritai-dev/eslint-config';
```

### 4️⃣ package.jsonにスクリプトを追加

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{js,ts,tsx}\"",
    "lint:fix": "eslint \"**/*.{js,ts,tsx}\" --fix"
  }
}
```

### 5️⃣ Prettier設定（オプション）

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

## 🎯 実際の使用例

### 6️⃣ ESLintの実行

#### エラーチェックのみ
```bash
npm run lint
```

#### 自動修正付き
```bash
npm run lint:fix
```

#### 特定ファイルのみ
```bash
npx eslint src/components/Button.tsx
```

#### 特定ディレクトリのみ
```bash
npx eslint src/components/
```

## 🔧 段階的導入ガイド

### 新規プロジェクトの場合

1. **📋 基本設定**: ESLintとPrettierの設定
2. **❌ エラー修正**: エラー（error）レベルの問題を修正
3. **⚠️ 警告修正**: 警告（warning）レベルの問題を修正
4. **🎨 スタイル統一**: コードスタイルの統一

### 既存プロジェクトの場合

1. **🔍 現状把握**: `npm run lint`で現在のエラー数を確認
2. **📊 優先度設定**: エラー → 警告 → スタイルの順で修正
3. **🔄 段階的修正**: ファイル単位で少しずつ修正
4. **✅ 継続的改善**: CI/CDに組み込んで継続的にチェック

## 🛠️ トラブルシューティング

### よくある問題と解決方法

#### ❓ TypeScriptの型エラーが発生する
**原因**: `tsconfig.json`の設定が不適切
**解決方法**: 
```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["**/*.{ts,tsx}"],
  "exclude": ["node_modules"]
}
```

#### ❓ Reactのフックエラーが発生する
**原因**: フックの呼び出し順序や"use client"ディレクティブの問題
**解決方法**: 
```typescript
// フックを使うファイルの先頭に追加
"use client";

import { useState, useEffect } from 'react';
```

#### ❓ 複雑度制限エラーが発生する
**原因**: 関数が複雑すぎる（複雑度3を超えている）
**解決方法**: 
```typescript
// Before: 複雑な関数
function complexFunction() {
  if (condition1) {
    if (condition2) {
      if (condition3) {
        // 処理
      }
    }
  }
}

// After: 関数を分割
function handleCondition1() {
  if (condition2) {
    return handleCondition2();
  }
}

function handleCondition2() {
  if (condition3) {
    return handleCondition3();
  }
}
```

#### ❓ import順序エラーが発生する
**原因**: import文の順序がルールに合っていない
**解決方法**: 
```typescript
// 正しい順序
// 1. ビルトインモジュール
import fs from 'fs';
import path from 'path';

// 2. 外部ライブラリ
import React from 'react';
import lodash from 'lodash';

// 3. 内部モジュール
import { Component } from './Component';
import { utils } from '../utils';

// 4. 相対パス
import './styles.css';
```

## 📋 ルール概要

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

## 🔗 関連リンク

- [ESLint公式ドキュメント](https://eslint.org/)
- [Prettier公式ドキュメント](https://prettier.io/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)

## 📄 ライセンス

MIT License

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します。
