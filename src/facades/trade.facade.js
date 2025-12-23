// PHASE 5.2 — Trade Facade
// Adapts trade service data for state layer

import { fetchPnLSnapshot } from "../services/trade.service";

export function fetchTradeSnapshot() {
  const snapshot = fetchPnLSnapshot();

  return {
    meta: snapshot.meta,
    summary: snapshot.summary,
    calendar: snapshot.calendar,
  };
}
