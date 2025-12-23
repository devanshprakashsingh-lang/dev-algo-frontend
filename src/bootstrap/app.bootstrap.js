// STEP 4.7 — FRONTEND BOOTSTRAP CONTROLLER
// ❌ No React
// ❌ No UI imports
// ❌ No side effects beyond state initialization
// Single authority for frontend startup lifecycle

import { loadDashboardState, resetDashboardState } from "../state/dashboard.state";
import { loadTradeState, resetTradeState } from "../state/trade.state";

let bootstrapped = false;

/**
 * Initializes frontend read-only state in a fixed order
 * This must be called exactly once (later by UI or shell)
 */
export function bootstrapApp() {
  if (bootstrapped) return;

  loadDashboardState();
  loadTradeState();

  bootstrapped = true;
}

/**
 * Resets all frontend state
 * Used later for logout / engine reset / reconnect
 */
export function resetApp() {
  resetDashboardState();
  resetTradeState();
  bootstrapped = false;
}

/**
 * Read-only bootstrap status
 */
export function isAppBootstrapped() {
  return bootstrapped;
}
