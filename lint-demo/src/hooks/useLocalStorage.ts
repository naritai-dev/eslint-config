"use client";

import { useCallback, useEffect, useState } from "react";

interface UseLocalStorageReturn<T> {
    value: T | null;
    setValue: (value: T) => void;
    removeValue: () => void;
}

const useLocalStorage = <T>(
    key: string,
    initialValue?: T
): UseLocalStorageReturn<T> => {
    const [value, setValueState] = useState<T | null>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : (initialValue ?? null);
        } catch {
            return initialValue ?? null;
        }
    });

    const setValue = useCallback(
        (newValue: T) => {
            try {
                setValueState(newValue);
                window.localStorage.setItem(key, JSON.stringify(newValue));
            } catch {
                console.error("Failed to save to localStorage");
            }
        },
        [key]
    );

    const removeValue = useCallback(() => {
        try {
            setValueState(null);
            window.localStorage.removeItem(key);
        } catch {
            console.error("Failed to remove from localStorage");
        }
    }, [key]);

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key && event.newValue !== null) {
                try {
                    setValueState(JSON.parse(event.newValue));
                } catch {
                    setValueState(null);
                }
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [key]);

    return {
        value,
        setValue,
        removeValue,
    };
};

export { useLocalStorage };
