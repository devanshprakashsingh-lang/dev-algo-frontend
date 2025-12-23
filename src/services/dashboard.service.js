// STEP 4.3 — SERVICE LAYER (READ-ONLY)
// ❌ No API calls
// ❌ No side effects
// ❌ Safe abstraction for future backend wiring

import { DASHBOARD_STATS_MOCK, DASHBOARD_ACTIVITY_MOCK } from "../data/dashboard.mock";

export function getDashboardStats() {
  return DASHBOARD_STATS_MOCK;
}

export function getDashboardActivity() {
  return DASHBOARD_ACTIVITY_MOCK;
}
