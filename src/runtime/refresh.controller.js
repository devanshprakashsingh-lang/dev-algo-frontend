// PHASE 5.5 — RUNTIME REFRESH CONTROLLER
// Periodic state refresh (read-only)

import { fetchDashboardSnapshot } from "../services/dashboard.service";
import { fetchPnLSnapshot } from "../services/pnl.service";

import { updateDashboardState } from "../state/dashboard.state";
import { updatePnLState } from "../state/pnl.state";

let refreshTimer = null;

export function startRefreshLoop(intervalMs = 5000) {
  if (refreshTimer) return;

  refreshTimer = setInterval(() => {
    const dashboard = fetchDashboardSnapshot();
    const pnl = fetchPnLSnapshot();

    updateDashboardState(dashboard);
    updatePnLState(pnl);
  }, intervalMs);
}

export function stopRefreshLoop() {
  if (!refreshTimer) return;
  clearInterval(refreshTimer);
  refreshTimer = null;
}
