'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'customer' | 'worker' | 'employer';
  createdAt: string;
  workerProfile?: any;
  employerProfile?: any;
}

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow digits, spaces, plus, and dash
    if (name === 'phone') {
      const cleaned = value.replace(/[^0-9+ -]/g, '');
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    // Basic phone validation: at least 6 digits
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 6) {
      setError('Please enter a valid phone number (at least 6 digits)');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    // Mock registration - store in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('workpulse_users') || '[]');
    if (existingUsers.some((u: User) => u.email === formData.email)) {
      setError('Email already registered');
      setLoading(false);
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: 'customer',      // Always start as customer
      createdAt: new Date().toISOString(),
      workerProfile: null,
      employerProfile: null,
    };

    existingUsers.push(newUser);
    localStorage.setItem('workpulse_users', JSON.stringify(existingUsers));

    setLoading(false);
    router.push('/login?registered=true');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md border border-accent p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Create Account</h1>
          <p className="text-secondary mt-2">Join WorkPulse as a customer</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-primary text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-primary text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-primary text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
              placeholder="+233 XX XXX XXXX"
            />
            <p className="text-xs text-secondary mt-1">Only numbers, spaces, + and - allowed</p>
          </div>
          <div>
            <label className="block text-primary text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
              placeholder="Min. 6 characters"
            />
          </div>
          <div>
            <label className="block text-primary text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
              placeholder="Re-enter password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition font-semibold disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-secondary">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:text-secondary font-medium">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}