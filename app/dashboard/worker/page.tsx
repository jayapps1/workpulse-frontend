'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function WorkerDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-primary">Worker Dashboard</h1>
      <p className="mt-2 text-secondary">Welcome, {user?.name}!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Available Jobs</h3>
          <p className="text-secondary mt-2">No job matches yet</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">My Applications</h3>
          <p className="text-secondary mt-2">No applications sent</p>
        </div>
      </div>
    </DashboardLayout>
  );
}