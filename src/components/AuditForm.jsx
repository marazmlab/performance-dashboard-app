import { useState } from "react";
import { normalizeUrl, validateUrl } from '../utils/url';

function AuditForm({ onAudit }) {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!validateUrl(url)) {
            setError("Please enter a valid URL (example.com, www.example.com, https://...)");
            return;
        }
        onAudit(normalizeUrl(url));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
            <label htmlFor="audit-url" className="font-semibold">Website URL</label>
            <input 
                id="audit-url"
                type="text" 
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="p-2 rounded border bg-gray-100 dark:bg-gray-700 dark:text-white"
                required
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Audit</button>
        </form>
    );
}

export default AuditForm;