import StatCard from "../components/ui/cards/StatCard";

export default function Overview() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
        <p className="text-xs text-gray-500">
          Live system health and trading summary
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Algo Status" value="RUNNING" status="ACTIVE" />
        <StatCard label="Today PnL" value="₹ 0.00" />
        <StatCard label="Open Positions" value="0" />
        <StatCard label="Risk Status" value="NORMAL" status="OK" />
      </div>

      <div className="bg-white border border-gray-200 rounded-md px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">
          System Summary
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Read-only dashboard. All executions, risk guards, and order handling
          are fully automated by the engine as per the locked roadmap.
        </p>
      </div>
    </div>
  );
}
