// このファイルは意図的にlintエラーを含んでいます
// 様々なESLintルール違反の例を示します

import React from 'react';
import { useState, useEffect } from 'react';

// 1. 命名規則違反（camelCaseでない）
const BadComponent = () => {
    return <div>Bad Component</div>;
};

// 2. 複雑度制限違反（複雑度3を超える）
const complexFunction = (a: number, b: number, c: number, d: number) => {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    return a + b + c + d;
                }
            }
        }
    }
    return 0;
};

// 3. 引用符違反（二重引用符使用）
const badString = "This should be single quotes";

// 4. 比較演算子違反（==使用）
const badComparison = (a: number, b: number) => {
    return a == b;
};

// 5. console.log使用（本番環境では禁止）
const debugFunction = () => {
    console.log("Debug info");
    return "debug";
};

// 6. any型使用（禁止）
const badFunction = (data: any) => {
    return data;
};

// 7. 未使用変数
const unusedVariable = "I am not used";

// 8. 非nullアサーション使用（禁止）
const badAccess = (obj: { prop?: string }) => {
    return obj.prop!;
};

// 9. 配列型違反（Array<T>使用）
const badArray: Array<string> = ["a", "b", "c"];

// 10. 関数の行数制限違反（50行を超える）
const longFunction = () => {
    // 意図的に長い関数を作成
    const result = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            if (i % 3 === 0) {
                if (i % 5 === 0) {
                    result.push(i);
                }
            }
        }
    }
    return result;
};

// 11. インポート順序違反
import './styles.css';

// 12. オプショナルチェーン不使用
const badOptionalChain = (obj: { nested?: { value?: string } }) => {
    return obj.nested && obj.nested.value;
};

// 13. nullish coalescing不使用
const badNullishCoalescing = (value: string | null) => {
    return value || "default";
};

// 14. テンプレートリテラル不使用
const badStringConcat = (name: string) => {
    return "Hello " + name + "!";
};

// 15. オブジェクト短縮記法不使用
const badObject = (name: string, age: number) => {
    return {
        name: name,
        age: age
    };
};

// 16. 分割代入不使用
const badDestructuring = (user: { name: string; email: string }) => {
    const name = user.name;
    const email = user.email;
    return { name, email };
};

// 17. スプレッド演算子不使用
const badSpread = (arr1: number[], arr2: number[]) => {
    return arr1.concat(arr2);
};

// 18. アロー関数不使用
function badArrowFunction(x: number) {
    return x * 2;
}

// 19. const/let不使用（var使用）
var badVar = "I should use const";

// 20. 不要なreturn
const badReturn = (x: number) => {
    if (x > 0) {
        return x;
    } else {
        return;
    }
};

export { BadComponent };
