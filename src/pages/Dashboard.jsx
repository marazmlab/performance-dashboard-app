function Dashboard() {
    return(
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Performance Audit Dashboard</h1>
            <div className="grid-cols-2 gap-4">
                <div className="bg-gray-500 rounded shadow p-4 mb-4">
                    <h2 className="font-semibold">LCP</h2>
                    <p>1.2s</p>
                </div>
                <div className="bg-gray-500 rounded shadow p-4 mb-4">
                    <h2 className="font-semibold">FCP</h2>
                    <p>1.2s</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;