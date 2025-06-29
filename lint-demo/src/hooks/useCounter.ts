"use client";

import { useCallback, useState } from "react";

interface UseCounterReturn {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCounter = (initialValue = 0): UseCounterReturn => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]);

    return {
        count,
        increment,
        decrement,
        reset,
    };
};

export { useCounter };
