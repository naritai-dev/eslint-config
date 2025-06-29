// このファイルはESLintルールに完全準拠しています
// すべてのベストプラクティスを実践しています

import React, { useCallback, useEffect, useState } from 'react';

// 1. 正しい命名規則（PascalCase for React components, camelCase for functions）
const GoodComponent: React.FC = () => {
    return <div>Good Component</div>;
};

// 2. 複雑度制限内（複雑度3以下）
const simpleFunction = (a: number, b: number): number => {
    if (a > 0 && b > 0) {
        return a + b;
    }
    return 0;
};

// 3. 正しい引用符（単一引用符）
const goodString = 'This uses single quotes';

// 4. 正しい比較演算子（===使用）
const goodComparison = (a: number, b: number): boolean => {
    return a === b;
};

// 5. 適切な型定義（unknown型使用）
const goodFunction = (data: unknown): string => {
    return String(data);
};

// 6. 適切なnullチェック
const goodAccess = (obj: { prop?: string }): string => {
    return obj.prop ?? 'default';
};

// 7. 正しい配列型（T[]使用）
const goodArray: string[] = ['a', 'b', 'c'];

// 8. 関数の行数制限内（50行以下）
const shortFunction = (): number[] => {
    const result: number[] = [];
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result;
};

// 9. オプショナルチェーン使用
const goodOptionalChain = (obj: { nested?: { value?: string } }): string => {
    return obj.nested?.value ?? 'default';
};

// 10. nullish coalescing使用
const goodNullishCoalescing = (value: string | null): string => {
    return value ?? 'default';
};

// 11. テンプレートリテラル使用
const goodStringTemplate = (name: string): string => {
    return `Hello ${name}!`;
};

// 12. オブジェクト短縮記法使用
const goodObject = (name: string, age: number) => {
    return {
        name,
        age,
    };
};

// 13. 分割代入使用
const goodDestructuring = (user: { name: string; email: string }) => {
    const { name, email } = user;
    return { name, email };
};

// 14. スプレッド演算子使用
const goodSpread = (arr1: number[], arr2: number[]): number[] => {
    return [...arr1, ...arr2];
};

// 15. アロー関数使用
const goodArrowFunction = (x: number): number => x * 2;

// 16. const/let使用（var不使用）
const goodVar = 'I use const';

// 17. 適切なreturn
const goodReturn = (x: number): number => {
    if (x > 0) {
        return x;
    }
    return 0;
};

// 18. カスタムフック（正しい命名規則）
const useCustomHook = () => {
    const [state, setState] = useState<string>('initial');

    const updateState = useCallback((newState: string) => {
        setState(newState);
    }, []);

    return { state, updateState };
};

// 19. 適切なエラーハンドリング（複雑度制限内に分割）
const handleHttpError = (response: Response): never => {
    throw new Error(`HTTP error! status: ${response.status}`);
};

const handleFetchError = (error: unknown): never => {
    if (error instanceof Error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
    throw new Error('Unknown error occurred');
};

const goodErrorHandling = async (): Promise<string> => {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            handleHttpError(response);
        }
        return await response.text();
    } catch (error) {
        handleFetchError(error);
    }
};

// 20. 型ガード使用
const isString = (value: unknown): value is string => {
    return typeof value === 'string';
};

const goodTypeGuard = (value: unknown): string => {
    if (isString(value)) {
        return value.toUpperCase();
    }
    return 'not a string';
};

// 21. 適切なReactコンポーネント
interface UserProps {
    name: string;
    email: string;
    isActive?: boolean;
}

const UserComponent: React.FC<UserProps> = ({
    name,
    email,
    isActive = false,
}) => {
    const { state, updateState } = useCustomHook();

    useEffect(() => {
        updateState(name);
    }, [name, updateState]);

    return (
        <div className="user-component">
            <h2>{name}</h2>
            <p>{email}</p>
            <span>{isActive ? 'Active' : 'Inactive'}</span>
            <p>State: {state}</p>
        </div>
    );
};

// defaultPropsの追加
UserComponent.defaultProps = {
    isActive: false,
};

export {
    goodAccess,
    goodArray,
    goodArrowFunction,
    goodComparison,
    GoodComponent,
    goodDestructuring,
    goodErrorHandling,
    goodFunction,
    goodNullishCoalescing,
    goodObject,
    goodOptionalChain,
    goodReturn,
    goodSpread,
    goodString,
    goodStringTemplate,
    goodTypeGuard,
    goodVar,
    shortFunction,
    simpleFunction,
    useCustomHook,
    UserComponent,
};
