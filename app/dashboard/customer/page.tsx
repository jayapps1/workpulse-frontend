'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import { useAuthStore } from '@/stores/authStore';

export default function CustomerDashboard() {
  const { user } = useAuthStore();
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-primary">Customer Dashboard</h1>
      <p className="mt-2 text-secondary">Welcome back, {user?.name}!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Quick Actions</h3>
          <button className="mt-4 bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition">
            Post a Service Request
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
          <h3 className="text-lg font-semibold text-primary">Active Bookings</h3>
          <p className="text-secondary mt-2">No active bookings</p>
        </div>
      </div>
    </DashboardLayout>
  );
}