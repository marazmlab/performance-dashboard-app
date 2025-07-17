import React from "react";

const AuditDetails = ({ data }) => {
  if (!data) return <p>No audit data yet.</p>;
  const audits = data.lighthouseResult.audits;
  const url = data.lighthouseResult.finalUrl;
  const date = new Date(data.lighthouseResult.fetchTime).toLocaleString();

  const opportunities = Object.values(audits)
    .filter(audit => audit.details && audit.details.type === "opportunity");

  return (
    <div className="mb-8 p-4 bg-white dark:bg-gray-900 rounded shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Audit Details</h2>
      <div className="mb-4 text-sm text-gray-500">
        <span className="font-semibold">URL:</span> {url}
        <span className="ml-4 font-semibold">Date:</span> {date}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Opportunities</h3>
        {opportunities.length > 0 ? (
          <ul className="space-y-3">
            {opportunities.map((op, idx) => (
              <li key={idx} className="p-3 rounded border bg-yellow-50  flex flex-col">
                <span className="font-bold text-yellow-700 flex items-center gap-2">
                  ⚠️ {op.title}
                </span>
                <span className="text-sm text-gray-700 break-words whitespace-normal">
                  {op.description}
                </span>
                {op.details && op.details.overallSavingsMs && (
                  <span className="text-xs text-green-700 mt-1">
                    Potential savings: {Math.round(op.details.overallSavingsMs)} ms
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No major opportunities found.</p>
        )}
      </div>
    </div>
  );
};

export default AuditDetails;