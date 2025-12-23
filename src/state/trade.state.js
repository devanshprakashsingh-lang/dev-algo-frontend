// STEP 4.6 — TRADE READ-ONLY STATE
// ❌ No React
// ❌ No UI imports
// ❌ No side effects
// Holds normalized trade history snapshot

import { fetchTradeHistory } from "../facades/trade.facade";

let tradeSnapshot = [];

/**
 * Loads trade history into state
 */
export function loadTradeState() {
  tradeSnapshot = fetchTradeHistory();
}

/**
 * Read-only access to trade state
 */
export function getTradeState() {
  return tradeSnapshot;
}

/**
 * Clears trade state (future reconnect / logout use)
 */
export function resetTradeState() {
  tradeSnapshot = [];
}
