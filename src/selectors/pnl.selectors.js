// PHASE 5.4 — PnL Selectors
// ❌ No React
// ❌ No services
// ❌ No side effects

import { getTradeState } from "../state/trade.state";

export function selectPnLSummary() {
  const snapshot = getTradeState();

  if (!snapshot) {
    return {
      today: "₹ 0.00",
      month: "₹ 0.00",
      total: "₹ 0.00",
    };
  }

  return {
    today: `₹ ${snapshot.summary?.today ?? 0}.00`,
    month: `₹ ${snapshot.summary?.month ?? 0}.00`,
    total: `₹ ${snapshot.summary?.total ?? 0}.00`,
  };
}
