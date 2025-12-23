// PHASE 5.2 — Dashboard Service
// Source of truth: engine (mocked for now)

export function fetchDashboardSnapshot() {
  return {
    meta: {
      timestamp: Date.now(),
      source: "mock",
      healthy: true,
    },

    algo: {
      status: "RUNNING",
      message: "Engine operational",
    },

    pnl: {
      today: 0,
    },

    positions: {
      openCount: 0,
    },

    risk: {
      status: "NORMAL",
    },
  };
}
