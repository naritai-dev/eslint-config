# @naritai-dev/eslint-config セットアップスクリプト (PowerShell)
# Windows用の自動セットアップスクリプト

Write-Host "🚀 @naritai-dev/eslint-config セットアップを開始します..." -ForegroundColor Green

# 1️⃣ パッケージのインストール
Write-Host "📦 ESLint設定パッケージをインストール中..." -ForegroundColor Yellow
npm install --save-dev @naritai-dev/eslint-config

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ パッケージのインストールに失敗しました" -ForegroundColor Red
    exit 1
}

# 2️⃣ 必要な依存関係のインストール
Write-Host "🔧 必要な依存関係をインストール中..." -ForegroundColor Yellow
npm install --save-dev @eslint/js @next/eslint-plugin-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier prettier-plugin-tailwindcss

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 依存関係のインストールに失敗しました" -ForegroundColor Red
    exit 1
}

# 3️⃣ ESLint設定ファイルの作成
Write-Host "⚙️ ESLint設定ファイルを作成中..." -ForegroundColor Yellow
$eslintConfig = 'export { default } from "@naritai-dev/eslint-config";'
$eslintConfig | Out-File -FilePath "eslint.config.js" -Encoding UTF8

if (Test-Path "eslint.config.js") {
    Write-Host "✅ eslint.config.js を作成しました" -ForegroundColor Green
} else {
    Write-Host "❌ eslint.config.js の作成に失敗しました" -ForegroundColor Red
    exit 1
}

# 4️⃣ package.jsonにスクリプトを追加
Write-Host "📝 package.jsonにスクリプトを追加中..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    
    if (-not $packageJson.scripts) {
        $packageJson | Add-Member -MemberType NoteProperty -Name "scripts" -Value @{}
    }
    
    $packageJson.scripts.lint = 'eslint "**/*.{js,ts,tsx}"'
    $packageJson.scripts."lint:fix" = 'eslint "**/*.{js,ts,tsx}" --fix'
    
    $packageJson | ConvertTo-Json -Depth 10 | Out-File -FilePath "package.json" -Encoding UTF8
    Write-Host "✅ package.jsonにスクリプトを追加しました" -ForegroundColor Green
} else {
    Write-Host "⚠️ package.jsonが見つかりません。手動でスクリプトを追加してください" -ForegroundColor Yellow
}

# 5️⃣ Prettier設定ファイルの作成
Write-Host "🎨 Prettier設定ファイルを作成中..." -ForegroundColor Yellow
$prettierConfig = @"
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 4,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
"@
$prettierConfig | Out-File -FilePath ".prettierrc" -Encoding UTF8

if (Test-Path ".prettierrc") {
    Write-Host "✅ .prettierrc を作成しました" -ForegroundColor Green
} else {
    Write-Host "❌ .prettierrc の作成に失敗しました" -ForegroundColor Red
}

# 6️⃣ セットアップ完了
Write-Host ""
Write-Host "🎉 セットアップが完了しました！" -ForegroundColor Green
Write-Host ""
Write-Host "📋 次のコマンドでESLintを実行できます：" -ForegroundColor Cyan
Write-Host "   npm run lint        # エラーチェック" -ForegroundColor White
Write-Host "   npm run lint:fix    # 自動修正" -ForegroundColor White
Write-Host ""
Write-Host "🔧 トラブルシューティング：" -ForegroundColor Cyan
Write-Host "   README.mdを参照してください" -ForegroundColor White
Write-Host "" 