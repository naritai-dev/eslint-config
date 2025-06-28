# @naritai-dev/eslint-config

naritai-dev組織のNext.js + TypeScript + Reactプロジェクト用の共有ESLint・Prettier設定です。

## インストール

```bash
npm install --save-dev @naritai-dev/eslint-config
```

### Tailwind CSS v4を使用している場合

Tailwind CSS v4を使用しているプロジェクトでは、以下のコマンドを使用してください：

```bash
npm install --save-dev @naritai-dev/eslint-config --legacy-peer-deps
```

または

```bash
npm install --save-dev @naritai-dev/eslint-config --force
```

## 使用方法

### ESLint設定

プロジェクトルートに`.eslintrc.json`を作成：

```json
{
    "extends": ["@naritai-dev/eslint-config"]
}
```

### Prettier設定

プロジェクトルートに`.prettierrc`を作成：

```json
"@naritai-dev/eslint-config/.prettierrc"
```

### VS Code設定

`.vscode/settings.json`をプロジェクトにコピーしてください。

## 必要な依存関係

`package.json`に以下を追加してください：

```json
{
    "devDependencies": {
        "eslint": "^9.0.0",
        "prettier": "^3.0.0",
        "@typescript-eslint/eslint-plugin": "^7.0.0",
        "@typescript-eslint/parser": "^7.0.0",
        "eslint-config-next": "^15.0.0",
        "eslint-config-prettier": "^9.0.0",
        "eslint-plugin-react": "^7.0.0",
        "eslint-plugin-react-hooks": "^5.0.0",
        "eslint-plugin-jsx-a11y": "^6.0.0",
        "eslint-plugin-import": "^2.0.0"
    }
}
```

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
