'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/auth';
import { useAuthStore } from '@/stores/authStore';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log('Logging in with:', email);
    try {
      const { user, token } = await login(email, password);
      console.log('Login response:', { user, token });
      setAuth(user, token);
      console.log('Auth store updated, redirecting to:', `/dashboard/${user.role}`);
      
      // Try Next.js navigation first
      router.push(`/dashboard/${user.role}`);
      
      // Fallback: if still on same page after 500ms, force full reload
      setTimeout(() => {
        if (window.location.pathname !== `/dashboard/${user.role}`) {
          console.log('Router.push failed, using window.location');
          window.location.href = `/dashboard/${user.role}`;
        }
      }, 500);
      
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Password reset feature coming soon!');
    // TODO: Implement password reset flow later
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md border border-accent">
        <h2 className="text-center text-3xl font-bold text-primary">WorkPulse Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-accent rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-white"
              placeholder="customer@test.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-accent rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-white"
              placeholder="123456"
            />
          </div>
          
          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-secondary hover:text-primary transition"
            >
              Forgot Password?
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 transition"
          >
            {loading ? 'Logging in...' : 'Sign in'}
          </button>
        </form>
        <div className="text-sm text-center text-primary">
          <p className="font-medium">Test accounts (password: 123456):</p>
          <p>customer@test.com (Customer)</p>
          <p>worker@test.com (Worker)</p>
          <p>employer@test.com (Employer)</p>
          <p>admin@test.com (Admin)</p>
        </div>
        <p className="text-center text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-secondary hover:text-accent font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}