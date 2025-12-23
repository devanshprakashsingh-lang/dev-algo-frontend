// PHASE 5.2 — Logs Service

export function fetchLogsSnapshot() {
  return {
    meta: {
      timestamp: Date.now(),
      source: "mock",
    },

    stats: {
      totalToday: 0,
      lastEventAt: null,
    },

    engine: {
      status: "HEALTHY",
    },

    events: [],
  };
}
