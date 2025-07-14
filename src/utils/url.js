export function normalizeUrl(value) {
    let url = value.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    return url;
}

export function validateUrl(value) {
    if (!value.trim()) return false;
    const normalized = normalizeUrl(value);
    const domainPattern = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/;
    if (!domainPattern.test(normalized)) return false;
    try {
        new URL(normalized);
        return true;
    } catch {
        return false;
    }
}