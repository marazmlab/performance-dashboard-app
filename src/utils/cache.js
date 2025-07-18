export function getCache(key) {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    try {
        return JSON.parse(cached);
    } catch {
        return null;
    }
}

export function setCache(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

