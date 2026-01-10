import { NavLink } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";


function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      <h2 className="text-xl font-bold mb-6 flex gap-2 border rounded align-center justify-center p-2"><FaLaptopCode size={24}/> Machine Coding</h2>

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
        <NavLink
          to="/todo"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          TodoApp
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>

            <NavLink
          to="/#"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
           App
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
