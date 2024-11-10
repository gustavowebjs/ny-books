import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkSwitch } from "../common/DarkSwitch";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 fixed top-0 left-0 right-0 z-10">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              NY Books
            </h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className={`rounded-md px-2 py-1 hover:bg-blue-200 dark:hover:bg-blue-900
                ${
                  location.pathname === "/"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              Home
            </Link>
            <Link
              to="/best-books"
              className={`rounded-md px-2 py-1 hover:bg-blue-200 dark:hover:bg-blue-900
                ${
                  location.pathname === "/best-books"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              Best Books
            </Link>
            <Link
              to="/about"
              className={`rounded-md px-2 py-1 hover:bg-blue-200 dark:hover:bg-blue-900
                ${
                  location.pathname === "/about"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              About
            </Link>
            <DarkSwitch />
          </nav>
        </div>
      </header>

      <main className="flex-grow mt-16 p-4 bg-white dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
};
