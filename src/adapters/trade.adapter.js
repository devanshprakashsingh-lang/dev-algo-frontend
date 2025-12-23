// STEP 4.4 — TRADE DATA ADAPTER
// Normalizes trade objects into a stable contract
// ❌ No UI usage
// ❌ No mutations

import { normalizePnL } from "../utils/pnl.utils";

export function adaptTrade(raw = {}) {
  return {
    id: raw.id || "",
    symbol: raw.symbol || "",
    side: raw.side || "UNKNOWN",
    qty: raw.qty ?? 0,
    entryPrice: raw.entryPrice ?? 0,
    exitPrice: raw.exitPrice ?? 0,
    pnl: normalizePnL(raw.pnl),
    status: raw.status || "UNKNOWN",
    entryTime: raw.entryTime || null,
    exitTime: raw.exitTime || null,
  };
}

export function adaptTradeList(rawTrades = []) {
  if (!Array.isArray(rawTrades)) return [];
  return rawTrades.map(adaptTrade);
}
