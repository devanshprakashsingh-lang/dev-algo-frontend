import { NavLink } from "react-router-dom";

const MENU = [
  { label: "Overview", path: "/" },
  { label: "PnL", path: "/pnl" },
  { label: "Logs", path: "/logs" },
  { label: "Accounts", path: "/accounts" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-200 min-h-screen px-4 py-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-tight">
          Dev Algo
        </h1>
        <p className="text-xs text-slate-400 mt-1">Trading Dashboard</p>
      </div>

      <nav className="space-y-1">
        {MENU.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
