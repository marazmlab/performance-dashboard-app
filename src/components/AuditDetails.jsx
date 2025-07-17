import React from "react";

const AuditDetails = ({ data }) => {
  if (!data) return <p>No audit data yet.</p>;
  const audits = data.lighthouseResult.audits;
  const url = data.lighthouseResult.finalUrl;
  const date = new Date(data.lighthouseResult.fetchTime).toLocaleString();

  const opportunities = Object.values(audits)
    .filter(audit => audit.details && audit.details.type === "opportunity");

  return (
    <div className="mb-8 p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Audit Details</h2>
      <div className="mb-4">
        <span className="font-semibold">URL:</span> {url}
        <span className="ml-4 font-semibold">Date:</span> {date}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Opportunities</h3>
        {opportunities.length > 0 ? (
          <ul className="list-disc pl-6">
            {opportunities.map((op, idx) => (
              <li key={idx}>
                <span className="font-bold">{op.title}:</span> {op.description}
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