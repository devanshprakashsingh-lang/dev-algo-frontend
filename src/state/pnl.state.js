// PHASE 5 — PnL READ-ONLY STATE
// ❌ No React
// ❌ No UI imports

import { fetchPnLSnapshot } from "../services/pnl.service";

let pnlSnapshot = null;

/**
 * Initial load
 */
export function loadPnLState() {
  pnlSnapshot = fetchPnLSnapshot();
}

/**
 * Runtime refresh update
 */
export function updatePnLState(nextSnapshot) {
  pnlSnapshot = nextSnapshot;
}

/**
 * Read-only access
 */
export function getPnLState() {
  return pnlSnapshot;
}

/**
 * Reset
 */
export function resetPnLState() {
  pnlSnapshot = null;
}
