// STEP 4.4 — PURE PnL UTILITIES
// ❌ No side effects
// ❌ No UI usage
// ❌ No imports from React or services

/**
 * Ensures PnL is always a valid number
 */
export function normalizePnL(value) {
  if (typeof value !== "number" || isNaN(value)) {
    return 0;
  }
  return Number(value.toFixed(2));
}

/**
 * Aggregates total PnL from trade list
 */
export function calculateTotalPnL(trades = []) {
  if (!Array.isArray(trades)) return 0;

  return normalizePnL(
    trades.reduce((sum, trade) => sum + (trade.pnl || 0), 0)
  );
}

/**
 * Groups trades by date (YYYY-MM-DD)
 * Used later for PnL Calendar
 */
export function groupTradesByDate(trades = []) {
  if (!Array.isArray(trades)) return {};

  return trades.reduce((acc, trade) => {
    if (!trade.exitTime) return acc;

    const dateKey = new Date(trade.exitTime)
      .toISOString()
      .slice(0, 10);

    acc[dateKey] = acc[dateKey] || [];
    acc[dateKey].push(trade);

    return acc;
  }, {});
}
