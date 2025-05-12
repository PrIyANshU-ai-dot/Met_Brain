import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings } from "lucide-react";
import { FaBrain } from "react-icons/fa";
function Navigation() {
  const { logout, authUser } = useAuthStore();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 dark:text-white flex gap-2"
          >
            <FaBrain className="h-8 w-8 text-medical-blue animate-pulse" />
            MedBrain
          </Link>
          <div className="flex items-center space-x-4">
            {authUser && (
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  to={"/settings"}
                  className={`
              btn btn-sm gap-2 transition-colors
              
              `}
                >
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
