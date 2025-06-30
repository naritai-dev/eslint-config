#!/bin/bash
# @naritai-dev/eslint-config セットアップスクリプト (macOS/Linux)
# 自動セットアップスクリプト

echo "🚀 @naritai-dev/eslint-config セットアップを開始します..."

# 1️⃣ パッケージのインストール
echo "📦 ESLint設定パッケージをインストール中..."
npm install --save-dev @naritai-dev/eslint-config

if [ $? -ne 0 ]; then
    echo "❌ パッケージのインストールに失敗しました"
    exit 1
fi

# 2️⃣ 必要な依存関係のインストール
echo "🔧 必要な依存関係をインストール中..."
npm install --save-dev @eslint/js @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier prettier-plugin-tailwindcss

if [ $? -ne 0 ]; then
    echo "❌ 依存関係のインストールに失敗しました"
    exit 1
fi

# 3️⃣ ESLint設定ファイルの作成
echo "⚙️ ESLint設定ファイルを作成中..."
echo 'export { default } from "@naritai-dev/eslint-config";' > eslint.config.js

if [ -f "eslint.config.js" ]; then
    echo "✅ eslint.config.js を作成しました"
else
    echo "❌ eslint.config.js の作成に失敗しました"
    exit 1
fi

# 4️⃣ package.jsonにスクリプトを追加
echo "📝 package.jsonにスクリプトを追加中..."
if [ -f "package.json" ]; then
    npm pkg set scripts.lint="eslint \"**/*.{js,ts,tsx}\""
    npm pkg set scripts."lint:fix"="eslint \"**/*.{js,ts,tsx}\" --fix"
    echo "✅ package.jsonにスクリプトを追加しました"
else
    echo "⚠️ package.jsonが見つかりません。手動でスクリプトを追加してください"
fi

# 5️⃣ Prettier設定ファイルの作成
echo "🎨 Prettier設定ファイルを作成中..."
cat > .prettierrc << 'EOF'
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 4,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
EOF

if [ -f ".prettierrc" ]; then
    echo "✅ .prettierrc を作成しました"
else
    echo "❌ .prettierrc の作成に失敗しました"
fi

# 6️⃣ セットアップ完了
echo ""
echo "🎉 セットアップが完了しました！"
echo ""
echo "📋 次のコマンドでESLintを実行できます："
echo "   npm run lint        # エラーチェック"
echo "   npm run lint:fix    # 自動修正"
echo ""
echo "🔧 トラブルシューティング："
echo "   README.mdを参照してください"
echo "" 