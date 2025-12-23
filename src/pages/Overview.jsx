import StatCard from "../components/ui/cards/StatCard";

export default function Overview() {
  // ============================
  // STEP 4.2 — UI DATA CONTRACT
  // (Static but structured)
  // ============================

  const overviewStats = [
    {
      label: "ALGO STATUS",
      value: "RUNNING",
      subValue: "ACTIVE",
      status: "success",
    },
    {
      label: "TODAY PNL",
      value: "₹ 0.00",
    },
    {
      label: "OPEN POSITIONS",
      value: "0",
    },
    {
      label: "RISK STATUS",
      value: "NORMAL",
      subValue: "OK",
      status: "success",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500">
          Live system health and trading summary
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            subValue={stat.subValue}
            status={stat.status}
          />
        ))}
      </div>

      {/* System Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">
          System Summary
        </h2>
        <p className="text-sm text-gray-600">
          This is a read-only dashboard. All executions, risk guards, and order
          handling are fully automated by the engine as per the locked roadmap.
        </p>
      </div>
    </div>
  );
}
