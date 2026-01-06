// Safe localStorage wrapper that works even in restricted environments (private browsing, etc.)
export const storageHelper = {
    getItem: (key) => {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('localStorage unavailable:', e.message);
            return null;
        }
    },
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn('localStorage unavailable:', e.message);
        }
    },
    removeItem: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('localStorage unavailable:', e.message);
        }
    }
};
