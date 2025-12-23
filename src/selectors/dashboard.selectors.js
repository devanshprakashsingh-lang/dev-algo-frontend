// PHASE 5.4 — Dashboard Selectors
// ❌ No React
// ❌ No services
// ❌ No state mutation
// Pure read-only translators from state → UI shape

import { getDashboardState } from "../state/dashboard.state";

export function selectDashboardOverview() {
  const snapshot = getDashboardState();

  if (!snapshot) {
    return {
      algoStatus: "UNKNOWN",
      todayPnl: "₹ 0.00",
      openPositions: 0,
      riskStatus: "UNKNOWN",
      healthy: false,
    };
  }

  return {
    algoStatus: snapshot.algo?.status ?? "UNKNOWN",
    todayPnl: `₹ ${snapshot.pnl?.today ?? 0}.00`,
    openPositions: snapshot.positions?.openCount ?? 0,
    riskStatus: snapshot.risk?.status ?? "UNKNOWN",
    healthy: snapshot.meta?.healthy ?? false,
  };
}
