"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Link href="/" className="hover:text-blue-200">
            Logout
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/forum">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">📝 Forum</h3>
              <p className="text-gray-700">Discuss and share ideas with the community</p>
            </div>
          </Link>

          <Link href="/announcements">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">📢 Announcements</h3>
              <p className="text-gray-700">Find housing, jobs, and local events</p>
            </div>
          </Link>

          <Link href="/profile">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">👤 Profile</h3>
              <p className="text-gray-700">View and edit your profile information</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
