function AuditDetails({ data }) {
    if (!data) return <p>No audit data yet.</p>
    const audits = data.lighthouseResult.audits;
    return (
        <div >
            <h2 className="text-lg font-bold mb-2">Audit Details</h2>
            <ul>
                <li>LCP: {audits['largest-contentful-paint'].displayValue}</li>
                <li>FCP: {audits['first-contentful-paint'].displayValue}</li>
                <li>TTI: {audits['interactive'].displayValue}</li>
                <li>CLS: {audits['cumulative-layout-shift'].displayValue}</li>
                <li>Score: {data.lighthouseResult.categories.performance.score * 100}</li>
            </ul>
        </div>
    );
}

export default AuditDetails;