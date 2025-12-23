// PHASE 5.2 — PnL Service

export function fetchPnLSnapshot() {
  return {
    meta: {
      timestamp: Date.now(),
      source: "mock",
    },

    summary: {
      today: 0,
      month: 0,
      total: 0,
    },

    calendar: {},
  };
}
