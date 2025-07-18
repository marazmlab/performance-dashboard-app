import { useState } from "react";
import { fetchPageData } from "../utils/api";
import { extractMetrics } from "../utils/formatters";

export function usePageAudit() {
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(false);
    const [auditData, setAuditData] = useState(null);

    async function handleAudit(url) {
        setLoading(true);
        setMetrics(null);
        setAuditData(null);

        const apiKey = import.meta.env.VITE_PSI_KEY;

        try {
            const data = await fetchPageData(url, apiKey);
            setMetrics(extractMetrics(data));
            setAuditData(data);
        } catch (err) {
            setMetrics(null);
            setAuditData(null);
            alert("Fetch data failde. Check URL adress.")
        }
        setLoading(false);
    }

    return { metrics, loading, auditData, handleAudit };

}