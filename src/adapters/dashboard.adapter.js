// STEP 4.4 — DASHBOARD DATA ADAPTER
// Converts raw service data → normalized dashboard shape
// ❌ No UI imports
// ❌ No API calls

import { normalizePnL } from "../utils/pnl.utils";

export function adaptDashboardStats(raw = {}) {
  return {
    capital: raw.capital ?? 0,
    availableMargin: raw.availableMargin ?? 0,
    openPositions: raw.openPositions ?? 0,
    todaysPnL: normalizePnL(raw.todaysPnL),
    totalPnL: normalizePnL(raw.totalPnL),
    status: raw.status || "UNKNOWN",
    riskStatus: raw.riskStatus || "UNKNOWN",
  };
}
