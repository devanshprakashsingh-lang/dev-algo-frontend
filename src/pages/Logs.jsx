export default function Logs() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Logs</h2>

      {/* Logs Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Total Events Today</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            0
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Last Event</div>
          <div className="mt-2 text-sm font-medium text-gray-800">
            —
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Engine Status</div>
          <div className="mt-2 text-lg font-semibold text-green-600">
            HEALTHY
          </div>
        </div>
      </div>

      {/* Logs List Placeholder */}
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Event Logs</h3>
        <p className="text-sm text-gray-600 mb-4">
          Execution, guard decisions, errors, and system events will be listed
          here in chronological order. This view is read-only and reflects
          execution truth as per the locked design.
        </p>

        <div className="text-sm text-gray-400 italic">
          No logs available.
        </div>
      </div>
    </div>
  );
}
