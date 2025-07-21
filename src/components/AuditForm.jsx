import { useState } from "react";
import { normalizeUrl, validateUrl } from '../utils/url';

function AuditForm({ onAudit, error, setError }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!validateUrl(url)) {
      setError("Provide valid URL");
      return;
    }
    onAudit(normalizeUrl(url));
  };

  return (
    <form onSubmit={handleSubmit} data-testid="audit-form" className="flex flex-col gap-2 mb-6">
      <label htmlFor="audit-url" className="sr-only">Website URL</label>
      <input
        id="audit-url"
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter a web page URL"
        className={`p-2 rounded border bg-gray-100 dark:bg-gray-700 dark:text-white ${error ? 'border-red-500' : ''}`}
      />
      {error && <span className="text-red-500 text-sm">Provide valid URL</span>}
      <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Audit</button>
    </form>
  );
}

export default AuditForm;