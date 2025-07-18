// cache - 10min
const DEFAULT_TTL = 600_000;

export function setCache(key, data, ttl = DEFAULT_TTL) {
  const record = {
    data,
    timestamp: Date.now(),
    ttl
  };
  localStorage.setItem(key, JSON.stringify(record));
}

export function getCache(key,) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;
  try {
    const record = JSON.parse(cached);
    if (Date.now() - record.timestamp > record.ttl) {
      localStorage.removeItem(key);
      return null;
    }
    return record.data;
  } catch {
    return null;
  }
}

