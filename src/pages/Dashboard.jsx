import { useState } from "react";

import SectionNavbar from "../components/SectionNavbar";
import AuditForm from "../components/AuditForm"
import AuditDetails from "../components/AuditDetails";
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
        <div className="py-4">
            <SectionNavbar />
            <section id="audit-form" className="scroll-mt-16">
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
            </section>
            <section id="audit-details" className="scroll-mt-16">
                <AuditDetails />
            </section>
        </div>
    )
}

export default Dashboard;