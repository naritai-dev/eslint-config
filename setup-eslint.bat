@echo off
REM @naritai-dev/eslint-config セットアップスクリプト (バッチファイル)
REM Windows用の自動セットアップスクリプト

echo 🚀 @naritai-dev/eslint-config セットアップを開始します...

REM 1️⃣ パッケージのインストール
echo 📦 ESLint設定パッケージをインストール中...
call npm install --save-dev @naritai-dev/eslint-config
if %errorlevel% neq 0 (
    echo ❌ パッケージのインストールに失敗しました
    pause
    exit /b 1
)

REM 2️⃣ 必要な依存関係のインストール
echo 🔧 必要な依存関係をインストール中...
call npm install --save-dev @eslint/js @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier prettier-plugin-tailwindcss
if %errorlevel% neq 0 (
    echo ❌ 依存関係のインストールに失敗しました
    pause
    exit /b 1
)

REM 3️⃣ ESLint設定ファイルの作成
echo ⚙️ ESLint設定ファイルを作成中...
echo export { default } from "@naritai-dev/eslint-config"; > eslint.config.js
if exist eslint.config.js (
    echo ✅ eslint.config.js を作成しました
) else (
    echo ❌ eslint.config.js の作成に失敗しました
    pause
    exit /b 1
)

REM 4️⃣ Prettier設定ファイルの作成
echo 🎨 Prettier設定ファイルを作成中...
(
echo {
echo   "singleQuote": true,
echo   "semi": true,
echo   "tabWidth": 4,
echo   "trailingComma": "es5",
echo   "printWidth": 80,
echo   "plugins": ["prettier-plugin-tailwindcss"]
echo }
) > .prettierrc
if exist .prettierrc (
    echo ✅ .prettierrc を作成しました
) else (
    echo ❌ .prettierrc の作成に失敗しました
)

REM 5️⃣ セットアップ完了
echo.
echo 🎉 セットアップが完了しました！
echo.
echo 📋 次のコマンドでESLintを実行できます：
echo    npm run lint        # エラーチェック
echo    npm run lint:fix    # 自動修正
echo.
echo 📝 package.jsonに以下のスクリプトを手動で追加してください：
echo    "lint": "eslint \"**/*.{js,ts,tsx}\""
echo    "lint:fix": "eslint \"**/*.{js,ts,tsx}\" --fix"
echo.
echo 🔧 トラブルシューティング：
echo    README.mdを参照してください
echo.
pause 