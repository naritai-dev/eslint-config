interface DateFormatOptions {
    locale?: string;
    timeZone?: string;
}

const formatDate = (
    date: Date | string | number,
    options: DateFormatOptions = {}
): string => {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date provided');
    }

    const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return dateObj.toLocaleDateString(
        options.locale ?? 'en-US',
        defaultOptions
    );
};

const formatDateTime = (
    date: Date | string | number,
    options: DateFormatOptions = {}
): string => {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date provided');
    }

    const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    return dateObj.toLocaleDateString(
        options.locale ?? 'en-US',
        defaultOptions
    );
};

const isToday = (date: Date | string | number): boolean => {
    const dateObj = new Date(date);
    const today = new Date();

    return (
        dateObj.getDate() === today.getDate() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getFullYear() === today.getFullYear()
    );
};

export { formatDate, formatDateTime, isToday };
