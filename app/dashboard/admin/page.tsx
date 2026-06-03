'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function AdminDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome, {user?.name}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Users</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Jobs Posted</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Disputes</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>
    </DashboardLayout>
  );
}