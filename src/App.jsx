import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import DashboardLayout from "./components/layout/DashboardLayout";

import Overview from "./pages/Overview";
import PnL from "./pages/PnL";
import Logs from "./pages/Logs";
import Accounts from "./pages/Accounts";

// STEP 4.8 — BOOTSTRAP (GLOBAL, ONCE)
import { bootstrapApp } from "./bootstrap/app.bootstrap";

export default function App() {
  // 🔒 Bootstrap frontend state ONLY ONCE
  useEffect(() => {
    bootstrapApp();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/pnl" element={<PnL />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/accounts" element={<Accounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
