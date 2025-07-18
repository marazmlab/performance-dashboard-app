import { usePageAudit } from "../hooks/usePageAudit";

import SectionNavbar from "../components/SectionNavbar";
import HeroPlaceholder from "../components/HeroPlaceholder";
import AuditForm from "../components/AuditForm"
import AuditDetails from "../components/AuditDetails";
import Metricard from "../components/MetriCard"


function Dashboard() {
    const apiKey = import.meta.env.VITE_PSI_KEY;
    const { metrics, loading, auditData, handleAudit } = usePageAudit();

    return(
        <div className="py-4">
            <SectionNavbar />
            <section id="audit-form" className="scroll-mt-16">
                <AuditForm onAudit={(url) => handleAudit(url, apiKey)} />
                {loading && <div className="text-blue-600 mb-4">Audit results loading...</div>}
                {!metrics && !loading && <HeroPlaceholder />}
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
                <AuditDetails data={auditData} />
            </section>
        </div>
    )
}

export default Dashboard;