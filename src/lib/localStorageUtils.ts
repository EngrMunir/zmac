
export const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
    if (typeof localStorage !== 'undefined') {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    }
    return defaultValue;
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};