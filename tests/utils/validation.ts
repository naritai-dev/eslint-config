interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

const validateEmail = (email: string): ValidationResult => {
    const errors: string[] = [];

    if (!email.trim()) {
        errors.push('Email is required');
        return { isValid: false, errors };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Invalid email format');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

const validatePassword = (password: string): ValidationResult => {
    const errors: string[] = [];

    if (!password.trim()) {
        errors.push('Password is required');
        return { isValid: false, errors };
    }

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }

    if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

const validateRequired = (value: string, fieldName: string): ValidationResult => {
    const errors: string[] = [];

    if (!value.trim()) {
        errors.push(`${fieldName} is required`);
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

export { validateEmail, validatePassword, validateRequired };
export type { ValidationResult };
