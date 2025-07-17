function MetriCard({ label, value }) {
  // Jeśli label to "Lighthouse Score", styluj wg wartości
  const isScore = label.toLowerCase().includes("score");
  const bgColor = isScore
    ? value > 89
      ? "bg-green-400"
      : value > 49
      ? "bg-yellow-400"
      : "bg-red-400"
    : "bg-gray-400 dark:bg-gray-700";

  return (
    <div className={`text-3xl font-bold px-4 py-2 rounded ${bgColor} text-white`}>
      <span className="block font-semibold text-base mb-1">{label}</span>
      <span className="text-lg">{value}</span>
    </div>
  );
}

export default MetriCard;