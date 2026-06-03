'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function WorkerDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-900">Worker Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome, {user?.name}!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Available Jobs</h3>
          <p className="text-gray-500 mt-2">No job matches yet</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">My Applications</h3>
          <p className="text-gray-500 mt-2">No applications sent</p>
        </div>
      </div>
    </DashboardLayout>
  );
}