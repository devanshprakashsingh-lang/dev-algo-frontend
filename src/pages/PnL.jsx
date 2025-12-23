// frontend/src/pages/PnL.jsx

// STEP 4.8 — READ-ONLY STATE ACCESS
import { getDashboardState } from "../state/dashboard.state";

// UI-SAFE DEFAULTS (NULL-SAFE)
const DEFAULT_PNL = {
  todayPnLFormatted: "₹ 0.00",
  monthPnLFormatted: "₹ 0.00",
  totalPnLFormatted: "₹ 0.00",
};

export default function PnL() {
  // SAFE READ (never crashes)
  const dashboard = getDashboardState() || DEFAULT_PNL;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">PnL</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Today</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            {dashboard.todayPnLFormatted}
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">This Month</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            {dashboard.monthPnLFormatted}
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Total</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            {dashboard.totalPnLFormatted}
          </div>
        </div>
      </div>

      {/* Placeholder for Calendar / History */}
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">PnL Calendar</h3>
        <p className="text-sm text-gray-600">
          Daily PnL calendar will appear here. Green and red blocks will
          represent profitable and losing days. This section is read-only
          and execution-based as per the locked roadmap.
        </p>
      </div>
    </div>
  );
}
