import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      <h2 className="text-xl font-bold mb-6">📘 Machine Coding</h2>

      <nav className="space-y-2">
        <NavLink
          to="/counter"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Counter App
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
