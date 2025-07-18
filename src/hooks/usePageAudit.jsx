import { useState, useEffect } from "react";
import { fetchPageData } from "../utils/api";
import { extractMetrics } from "../utils/formatters";
import { getCache, setCache } from "../utils/cache";

export function usePageAudit() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [auditData, setAuditData] = useState(null);

  useEffect(() => {
    const lastUrl = localStorage.getItem("pagespeed:lastUrl");
    if (lastUrl) {
      const cached = getCache(`pagespeed:${lastUrl}`);
      if (cached) {
        setMetrics(extractMetrics(cached));
        setAuditData(cached);
      }
    }
  }, []);

  async function handleAudit(url, apiKey) {
    setLoading(true);
    setMetrics(null);
    setAuditData(null);

    const cacheKey = `pagespeed:${url}`;
    const cached = getCache(cacheKey);

    localStorage.setItem("pagespeed:lastUrl", url);

    if (cached) {
      setMetrics(extractMetrics(cached));
      setAuditData(cached);
      setLoading(false);
      return;
    }

    try {
      const data = await fetchPageData(url, apiKey);
      setCache(cacheKey, data);
      setMetrics(extractMetrics(data));
      setAuditData(data);
    } catch (err) {
      setMetrics(null);
      setAuditData(null);
      alert("Fetch data failed. Check URL address.");
    }
    setLoading(false);
  }

  return { metrics, loading, auditData, handleAudit };
}