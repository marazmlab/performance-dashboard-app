import { useState } from "react";

import AuditForm from "../components/AuditForm"
import Metricard from "../components/MetriCard"

function Dashboard() {
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleAudit(url) {
        setLoading(true);
        setMetrics(null);

        const apiKey = import.meta.env.VITE_PSI_KEY;

        try {
            const response = await fetch(
                `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`
            );
            const data = await response.json();
            setMetrics({
                lcp: data.lighthouseResult.audits['largest-contentful-paint'].displayValue,
                fcp: data.lighthouseResult.audits['first-contentful-paint'].displayValue,
                tti: data.lighthouseResult.audits['interactive'].displayValue,
                cls: data.lighthouseResult.audits['cumulative-layout-shift'].displayValue,
                score: data.lighthouseResult.categories.performance.score * 100,
            });
        } catch (err) {
            setMetrics(null);
            alert("Fetch data failde. Check URL adress.")
        }
        setLoading(false);
    }

    return(
        <div className="py-8">
            <AuditForm onAudit={handleAudit} />
            {loading && <div className="text-blue-600 mb-4">Audit results loading...</div>}
            {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <Metricard label="LCP" value={metrics.lcp}  />
                    <Metricard label="FCP" value={metrics.fcp} />
                    <Metricard label="TTI" value={metrics.tti} />
                    <Metricard label="CLS" value={metrics.cls} />
                    <Metricard label="Lighouse Score" value={metrics.score} />
                </div>
            )}
            <div className="mb-8">
                <h2 className="font-semibold mb-2">Optimization Checklist</h2>
                <ul className="space-y-2">
                    <li><input type="checkbox" /> Lazy loading images</li>
                    <li><input type="checkbox" /> Minify CSS/JS</li>
                    <li><input type="checkbox" /> Optimaze images</li>
                    <li><input type="checkbox" /> Use efficient cache policy</li>
                    <li><input type="checkbox" /> Accessibility checks (a11y)</li>
                </ul>
            </div>
            <div>
                <h2 className="font-semibold mb-2">Notes</h2>
                <textarea className="w-full p-2 rounded border bg-gray-200 dark:bg-gray-600 dark:text-white" rows={4} placeholder="Your technical notes..." ></textarea>
            </div>
        </div>
    )
}

export default Dashboard;