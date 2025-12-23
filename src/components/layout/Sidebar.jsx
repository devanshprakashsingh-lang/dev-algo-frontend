import { NavLink } from "react-router-dom";

const MENU = [
  { label: "Overview", path: "/" },
  { label: "PnL", path: "/pnl" },
  { label: "Logs", path: "/logs" },
  { label: "Accounts", path: "/accounts" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 text-gray-300 min-h-screen px-4 py-6">
      {/* Brand */}
      <div className="text-xl font-bold text-white mb-8">
        Dev Algo
      </div>

      {/* Navigation */}
      <nav className="space-y-1 text-sm">
        {MENU.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
              block px-3 py-2 rounded-md transition
              ${
                isActive
                  ? "bg-gray-800 text-white font-semibold"
                  : "hover:bg-gray-800 hover:text-white"
              }
              `
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
