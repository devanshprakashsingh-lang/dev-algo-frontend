// STEP 4.5 — DASHBOARD DATA FACADE
// Single read-only entry point for dashboard data
// ❌ No UI imports
// ❌ No React
// ❌ No side effects

import { getDashboardStats } from "../services/dashboard.service";
import { adaptDashboardStats } from "../adapters/dashboard.adapter";

/**
 * Final dashboard data for UI (future use)
 * UI must ONLY consume this facade later
 */
export function fetchDashboardOverview() {
  const rawStats = getDashboardStats();
  return adaptDashboardStats(rawStats);
}
