// STEP 4.6 — DASHBOARD READ-ONLY STATE
// ❌ No React
// ❌ No UI imports
// ❌ No side effects
// Single source of truth for dashboard snapshot

import { fetchDashboardOverview } from "../facades/dashboard.facade";

let dashboardSnapshot = null;

/**
 * Loads dashboard data into state (one-time for now)
 * Later this can support refresh / polling
 */
export function loadDashboardState() {
  dashboardSnapshot = fetchDashboardOverview();
}

/**
 * Read-only access to dashboard state
 */
export function getDashboardState() {
  return dashboardSnapshot;
}

/**
 * Clears dashboard state (future engine reset use)
 */
export function resetDashboardState() {
  dashboardSnapshot = null;
}
