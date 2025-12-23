// STEP 4.5 — TRADE DATA FACADE
// Single read-only entry point for trade & PnL data
// ❌ No UI imports
// ❌ No state
// ❌ No side effects

import { getTradeHistory } from "../services/trade.service";
import { adaptTradeList } from "../adapters/trade.adapter";

/**
 * Final trade history for UI (future use)
 */
export function fetchTradeHistory() {
  const rawTrades = getTradeHistory();
  return adaptTradeList(rawTrades);
}
