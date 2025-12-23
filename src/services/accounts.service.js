// PHASE 5.2 — Accounts Service

export function fetchAccountsSnapshot() {
  return {
    meta: {
      timestamp: Date.now(),
      source: "mock",
    },

    summary: {
      total: 1,
      activeId: "primary",
    },

    accounts: [
      {
        id: "primary",
        label: "Primary",
        broker: "MockBroker",
        status: "CONNECTED",
        margin: null,
      },
    ],
  };
}
