import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";

import Overview from "./pages/Overview";
import PnL from "./pages/PnL";
import Logs from "./pages/Logs";
import Accounts from "./pages/Accounts";

export default function App() {
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
