export function extractMetrics(data) {
    return {
        lcp: data.lighthouseResult.audits['largest-contentful-paint'].displayValue,
        fcp: data.lighthouseResult.audits['first-contentful-paint'].displayValue,
        tti: data.lighthouseResult.audits['interactive'].displayValue,
        cls: data.lighthouseResult.audits['cumulative-layout-shift'].displayValue,
        score: data.lighthouseResult.categories.performance.score * 100,
    };
}