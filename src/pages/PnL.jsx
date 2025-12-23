import { selectPnLSummary } from "../selectors/pnl.selectors";

export default function PnL() {
  const pnl = selectPnLSummary();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">PnL</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Today</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            {pnl.today}
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">This Month</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            {pnl.month}
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Total</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            {pnl.total}
          </div>
        </div>
      </div>

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
