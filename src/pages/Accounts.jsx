// src/pages/Accounts.jsx

// STEP 4.10 — READ-ONLY STATE ACCESS
import { getDashboardState } from "../state/dashboard.state";

// UI-SAFE DEFAULTS (NULL-SAFE)
const DEFAULT_ACCOUNTS_DASHBOARD = {
  brokerStatus: "CONNECTED",
  brokerStatusType: "success",
};

export default function Accounts() {
  // SAFE READ (never crashes)
  const dashboard = getDashboardState() || DEFAULT_ACCOUNTS_DASHBOARD;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Accounts</h2>

      {/* Accounts Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Total Accounts</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            1
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Active Account</div>
          <div className="mt-2 text-lg font-semibold text-gray-800">
            Primary
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">Broker Status</div>
          <div
            className={`mt-2 text-lg font-semibold ${
              dashboard.brokerStatusType === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {dashboard.brokerStatus}
          </div>
        </div>
      </div>

      {/* Accounts Details Placeholder */}
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Account Details</h3>
        <p className="text-sm text-gray-600">
          This section will display broker account details such as client ID,
          margin, and connection status. Multiple account support will be
          introduced in a later phase as per the locked roadmap.
        </p>
      </div>
    </div>
  );
}
