#!/bin/bash

# naritai-dev組織の全プロジェクトで設定を更新するスクリプト

echo "Updating @naritai-dev/eslint-config in all projects..."

# プロジェクトリスト（手動で管理）
PROJECTS=(
    "/path/to/project1"
    "/path/to/project2"
    "/path/to/project3"
)

# パッケージを更新
echo "Updating package version..."
npm run publish:patch

# 各プロジェクトで更新
for project in "${PROJECTS[@]}"; do
    if [ -d "$project" ]; then
        echo "Updating: $project"
        cd "$project"
        
        # パッケージを更新
        npm update @naritai-dev/eslint-config
        
        # lint修正を実行
        if npm run lint:fix > /dev/null 2>&1; then
            echo "  ✓ Updated and linted"
        else
            echo "  ⚠️  Updated but lint errors remain"
        fi
        
        cd - > /dev/null
    else
        echo "  ✗ Project not found: $project"
    fi
done

echo "Update complete!" 