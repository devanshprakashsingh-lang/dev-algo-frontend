// PHASE 5.2 — Trade Read-Only State
// ❌ No React
// ❌ No UI imports
// Single source of truth for trade snapshot

import { fetchTradeSnapshot } from "../facades/trade.facade";

let tradeSnapshot = null;

export function loadTradeState() {
  tradeSnapshot = fetchTradeSnapshot();
}

export function getTradeState() {
  return tradeSnapshot;
}

export function resetTradeState() {
  tradeSnapshot = null;
}
