'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function AdminDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
      <p className="mt-2 text-secondary">Welcome, {user?.name}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Users</h3>
          <p className="text-3xl font-bold mt-2 text-primary">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Jobs Posted</h3>
          <p className="text-3xl font-bold mt-2 text-primary">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Disputes</h3>
          <p className="text-3xl font-bold mt-2 text-primary">0</p>
        </div>
      </div>
    </DashboardLayout>
  );
}