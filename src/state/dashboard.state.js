// STEP 4.6 — DASHBOARD READ-ONLY STATE
// ❌ No React
// ❌ No UI imports
// ❌ No side effects
// Single source of truth for dashboard snapshot

import { fetchDashboardOverview } from "../facades/dashboard.facade";

let dashboardSnapshot = null;

/**
 * Initial load (bootstrap)
 */
export function loadDashboardState() {
  dashboardSnapshot = fetchDashboardOverview();
}

/**
 * Runtime refresh update (Phase 5+)
 */
export function updateDashboardState(nextSnapshot) {
  dashboardSnapshot = nextSnapshot;
}

/**
 * Read-only access
 */
export function getDashboardState() {
  return dashboardSnapshot;
}

/**
 * Reset (logout / engine reset)
 */
export function resetDashboardState() {
  dashboardSnapshot = null;
}
