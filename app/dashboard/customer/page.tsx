'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function CustomerDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-900">Customer Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome back, {user?.name}!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post a Service Request
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Bookings</h3>
          <p className="text-gray-500 mt-2">No active bookings</p>
        </div>
      </div>
    </DashboardLayout>
  );
}