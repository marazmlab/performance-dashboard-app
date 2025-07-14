function MetriCard({ label, value }) {
    return (
        <div className="bg-gray-200 dark:bg-gray-700 rounded shadow p-4 flex flex-col items-start">
            <span className="font-semibold">{label}</span>
            <span className="text-lg">{value}</span>
        </div>
    );
}

export default MetriCard;