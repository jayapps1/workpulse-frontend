'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">WorkPulse</h2>
          <p className="text-sm text-gray-400 mt-1 capitalize">{user?.role}</p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href={`/dashboard/${user?.role}`}
                className="block px-3 py-2 rounded hover:bg-gray-700 transition"
              >
                Dashboard Home
              </a>
            </li>
            <li>
              <a href="/profile" className="block px-3 py-2 rounded hover:bg-gray-700 transition">
                Profile
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  router.push('/login');
                }}
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition text-red-400"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-100">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}