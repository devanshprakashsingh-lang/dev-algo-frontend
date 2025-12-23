import StatCard from "../components/ui/cards/StatCard";
import { selectDashboardOverview } from "../selectors/dashboard.selectors";

export default function Overview() {
  const overview = selectDashboardOverview();

  const overviewStats = [
    {
      label: "ALGO STATUS",
      value: overview.algoStatus,
      subValue: overview.healthy ? "success" : "warning",
      status: overview.healthy ? "success" : "warning",
    },
    {
      label: "TODAY PNL",
      value: overview.todayPnl,
    },
    {
      label: "OPEN POSITIONS",
      value: overview.openPositions,
    },
    {
      label: "RISK STATUS",
      value: overview.riskStatus,
      subValue: overview.healthy ? "success" : "warning",
      status: overview.healthy ? "success" : "warning",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500">
          Live system health and trading summary
        </p>
      </div>

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
