export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="rounded-lg bg-red-600 text-white px-6 py-4 font-semibold">
        TAILWIND ACTIVE
      </div>

      {/* Page Title */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500">
          Live system health and trading summary
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Algo Status"
          value="RUNNING"
          valueColor="text-green-600"
        />
        <StatCard
          label="Today PnL"
          value="₹ 0.00"
          valueColor="text-gray-900"
        />
        <StatCard
          label="Open Positions"
          value="0"
          valueColor="text-gray-900"
        />
        <StatCard
          label="Risk Status"
          value="NORMAL"
          valueColor="text-green-600"
        />
      </div>

      {/* System Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          System Summary
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          This is a read-only dashboard. All executions, risk guards,
          and order handling are fully automated by the engine
          as per the locked roadmap.
        </p>
      </div>
    </div>
  );
}

/* Reusable Card */
function StatCard({ label, value, valueColor }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className={`mt-2 text-2xl font-semibold ${valueColor}`}>
        {value}
      </div>
    </div>
  );
}
