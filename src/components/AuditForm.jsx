import { useState } from "react";

function AuditForm({ onAudit }) {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    function validateUrl(value) {
        try {
            new URL(value);
            return true;
        } catch {
            return false;
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setError("");
        if (!validateUrl(url)) {
            setError("Please enter a valid URL");
        }
        onAudit(url);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
            <label htmlFor="audit-url" className="font-semibold">Website URL</label>
            <input 
                type="url" 
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="p-2 rounded border bg-gray-100 dark:bg-gray-700 dark:text-white"
                required
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Audit</button>
        </form>
    );
}

export default AuditForm;