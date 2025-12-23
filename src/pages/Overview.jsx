import StatCard from "../components/ui/cards/StatCard";

// STEP 4.8 — READ-ONLY STATE ACCESS
import { getDashboardState } from "../state/dashboard.state";

// UI-SAFE DEFAULT (NO STATE ASSUMPTION)
const DEFAULT_DASHBOARD = {
  algoStatus: "RUNNING",
  algoSubStatus: "ACTIVE",
  algoStatusType: "success",
  todayPnLFormatted: "₹ 0.00",
  openPositions: 0,
  riskStatus: "NORMAL",
  riskSubStatus: "OK",
  riskStatusType: "success",
};

export default function Overview() {
  // SAFE READ (never crashes)
  const dashboard = getDashboardState() || DEFAULT_DASHBOARD;

  const overviewStats = [
    {
      label: "ALGO STATUS",
      value: dashboard.algoStatus,
      subValue: dashboard.algoSubStatus,
      status: dashboard.algoStatusType,
    },
    {
      label: "TODAY PNL",
      value: dashboard.todayPnLFormatted,
    },
    {
      label: "OPEN POSITIONS",
      value: String(dashboard.openPositions),
    },
    {
      label: "RISK STATUS",
      value: dashboard.riskStatus,
      subValue: dashboard.riskSubStatus,
      status: dashboard.riskStatusType,
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
