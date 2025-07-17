import React from "react";

const AuditDetails = () => {
    return (
        <div className="mb-8">
            <h2 className="font-semibold mb-2">Optimization Checklist</h2>
            <ul className="space-y-2">
                <li><input type="checkbox" /> Lazy loading images</li>
                <li><input type="checkbox" /> Minify CSS/JS</li>
                <li><input type="checkbox" /> Optimaze images</li>
                <li><input type="checkbox" /> Use efficient cache policy</li>
                <li><input type="checkbox" /> Accessibility checks (a11y)</li>
            </ul>
            <ul className="space-y-2">
                <li><input type="checkbox" /> Lazy loading images</li>
                <li><input type="checkbox" /> Minify CSS/JS</li>
                <li><input type="checkbox" /> Optimaze images</li>
                <li><input type="checkbox" /> Use efficient cache policy</li>
                <li><input type="checkbox" /> Accessibility checks (a11y)</li>
            </ul>
            <ul className="space-y-2">
                <li><input type="checkbox" /> Lazy loading images</li>
                <li><input type="checkbox" /> Minify CSS/JS</li>
                <li><input type="checkbox" /> Optimaze images</li>
                <li><input type="checkbox" /> Use efficient cache policy</li>
                <li><input type="checkbox" /> Accessibility checks (a11y)</li>
            </ul>
            <ul className="space-y-2">
                <li><input type="checkbox" /> Lazy loading images</li>
                <li><input type="checkbox" /> Minify CSS/JS</li>
                <li><input type="checkbox" /> Optimaze images</li>
                <li><input type="checkbox" /> Use efficient cache policy</li>
                <li><input type="checkbox" /> Accessibility checks (a11y)</li>
            </ul>
            <div>
                <h2 className="font-semibold mb-2">Notes</h2>
                <textarea className="w-full p-2 rounded border bg-gray-200 dark:bg-gray-600 dark:text-white" rows={4} placeholder="Your technical notes..." ></textarea>
            </div>
        </div>
    );
}

export default AuditDetails;


            
