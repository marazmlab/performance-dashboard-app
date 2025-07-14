import Metricard from "../components/MetriCard"

function Dashboard() {
    return(
        <div className="py-8">
            <h1 className="text-2xl font-bold mb-6">Performance Audit Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Metricard label="LCP" value="1.2s" />
                <Metricard label="FCP" value="0.9s" />
                <Metricard label="TTI" value="1.2s" />
                <Metricard label="CLS" value="1.2s" />
                <Metricard label="FID" value="15ms" />
                <Metricard label="Lighouse Score" value="92" />
            </div>
            <div className="mb-8">
                <h2 className="font-semibold mb-2">Optimization Checklist</h2>
                <ul className="space-y-2">
                    <li><input type="checkbox" /> Lazy loading images</li>
                    <li><input type="checkbox" /> Minify CSS/JS</li>
                    <li><input type="checkbox" /> Optimaze images</li>
                    <li><input type="checkbox" /> Use efficient cache policy</li>
                    <li><input type="checkbox" /> Accessibility checks (a11y)</li>
                </ul>
            </div>
            <div>
                <h2 className="font-semibold mb-2">Notes</h2>
                <textarea className="w-full p-2 rounded border bg-gray-200 dark:bg-gray-600 dark:text-white" rows={4} placeholder="Your technical notes..." ></textarea>
            </div>
        </div>
    )
}

export default Dashboard;