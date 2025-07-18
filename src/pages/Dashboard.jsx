import { usePageAudit } from "../hooks/usePageAudit";
import { getApiKey } from '../utils/getApiKey';

import SectionNavbar from "../components/SectionNavbar";
import HeroPlaceholder from "../components/HeroPlaceholder";
import AuditForm from "../components/AuditForm"
import AuditDetails from "../components/AuditDetails";
import Metricard from "../components/MetriCard"


function Dashboard() {
    const apiKey = getApiKey();
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
                        <Metricard label="Largest Contentful Paint" value={metrics.lcp}  />
                        <Metricard label="First Contentful Paint" value={metrics.fcp} />
                        <Metricard label="Time to Interactive" value={metrics.tti} />
                        <Metricard label="Cumulative Layout Shift" value={metrics.cls} />
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