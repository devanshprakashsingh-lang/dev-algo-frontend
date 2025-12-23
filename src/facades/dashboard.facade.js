// PHASE 5.2 — Dashboard Facade
// Translates service snapshot into UI-consumable shape

import { fetchDashboardSnapshot } from "../services/dashboard.service";

export function fetchDashboardOverview() {
  const snapshot = fetchDashboardSnapshot();

  return {
    algoStatus: snapshot.algo.status,
    algoMessage: snapshot.algo.message,

    todayPnl: snapshot.pnl.today,
    openPositions: snapshot.positions.openCount,

    riskStatus: snapshot.risk.status,

    meta: snapshot.meta,
  };
}
