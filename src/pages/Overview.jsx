<div className="bg-red-600 text-white p-6 rounded-xl">
  RED BOX CONFIRMATION
</div>

export default function Overview() {
  return (
    <div className="space-y-4">

      {/* 🔴 TAILWIND PIPELINE TEST — TEMP */}
      <div className="p-6 bg-red-600 text-white text-xl font-bold rounded">
        TAILWIND ACTIVE
      </div>

      <h2 className="text-lg font-semibold text-gray-900">Overview</h2>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white border border-gray-200 rounded p-3">
          <div className="text-xs text-gray-500">Algo Status</div>
          <div className="mt-1 text-sm font-semibold text-green-700">RUNNING</div>
        </div>

        <div className="bg-white border border-gray-200 rounded p-3">
          <div className="text-xs text-gray-500">Today PnL</div>
          <div className="mt-1 text-sm font-semibold text-gray-900">₹ 0.00</div>
        </div>

        <div className="bg-white border border-gray-200 rounded p-3">
          <div className="text-xs text-gray-500">Open Positions</div>
          <div className="mt-1 text-sm font-semibold text-gray-900">0</div>
        </div>

        <div className="bg-white border border-gray-200 rounded p-3">
          <div className="text-xs text-gray-500">Risk Status</div>
          <div className="mt-1 text-sm font-semibold text-green-700">NORMAL</div>
        </div>
      </div>

      {/* System Summary */}
      <div className="bg-white border border-gray-200 rounded p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">System Summary</h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Read-only dashboard. Execution, guards, and order handling are fully
          automated by the engine as per the locked roadmap.
        </p>
      </div>
    </div>
  );
}
