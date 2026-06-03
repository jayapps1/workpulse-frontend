'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function EmployerDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome, {user?.name}!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Post a Job</h3>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create Job Posting
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Job Posts</h3>
          <p className="text-gray-500 mt-2">No active posts</p>
        </div>
      </div>
    </DashboardLayout>
  );
}