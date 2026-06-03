'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function EmployerDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-primary">Employer Dashboard</h1>
      <p className="mt-2 text-secondary">Welcome, {user?.name}!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Post a Job</h3>
          <button className="mt-4 bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition">
            Create Job Posting
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Active Job Posts</h3>
          <p className="text-secondary mt-2">No active posts</p>
        </div>
      </div>
    </DashboardLayout>
  );
}