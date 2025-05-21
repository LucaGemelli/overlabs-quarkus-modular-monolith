import React from "react";

export function SideBarFake({ title }: { title: string; }) {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center border-b border-gray-700 pb-4">
        {title}
      </h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
