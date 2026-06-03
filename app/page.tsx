'use client';

/**
 * WorkPulse Home Page
 * 
 * Dynamic landing page that shows different content based on auth status:
 * - Public view: Hero (glassmorphism), features, how it works, CTA
 * - Authenticated view: Role-based quick actions (customer/worker/employer/admin)
 */

import Link from 'next/link';
import { useAuthStore } from '@/stores/authStore';

export default function HomePage() {
  const { isAuthenticated, user } = useAuthStore();

  /**
   * Returns the correct dashboard link based on user role
   */
  const getRoleDashboardLink = () => {
    if (!user) return '/login';
    return `/dashboard/${user.role}`;
  };

  /**
   * Returns role-specific content (title, description, action buttons)
   * for authenticated users
   */
  const getRoleSpecificContent = () => {
    if (!user) return null;
    switch (user.role) {
      case 'customer':
        return {
          title: 'Need a service?',
          description: 'Post a job and get matched with trusted professionals.',
          primaryAction: { label: 'Post a Service Request', href: '/dashboard/customer/post-request' },
          secondaryAction: { label: 'Browse Workers', href: '/workers' },
        };
      case 'worker':
        return {
          title: 'Find work near you',
          description: 'Browse available jobs and grow your income.',
          primaryAction: { label: 'Browse Jobs', href: '/jobs' },
          secondaryAction: { label: 'Update Availability', href: '/dashboard/worker/availability' },
        };
      case 'employer':
        return {
          title: 'Hire skilled labour',
          description: 'Post jobs and manage applicants in one place.',
          primaryAction: { label: 'Post a Job', href: '/dashboard/employer/post-job' },
          secondaryAction: { label: 'View Applicants', href: '/dashboard/employer/applicants' },
        };
      case 'admin':
        return {
          title: 'Platform Overview',
          description: 'Manage users, verify workers, and monitor activity.',
          primaryAction: { label: 'Go to Admin Panel', href: '/dashboard/admin' },
          secondaryAction: null,
        };
      default:
        return null;
    }
  };

  const roleContent = getRoleSpecificContent();

  return (
    <div className="min-h-screen">
      {/* ========== HERO SECTION WITH GLASSMORPHISM ========== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image / gradient layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-primary/20" />
        
        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/30 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              WorkPulse <span className="text-accent">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 drop-shadow">
              Real‑time workforce marketplace connecting skilled workers and employers
            </p>
            {!isAuthenticated ? (
              // Public CTA buttons
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition transform hover:scale-105 shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/how-it-works"
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition transform hover:scale-105 shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            ) : (
              // Welcome back for logged-in users
              <div className="space-y-4">
                <p className="text-lg text-white">
                  Welcome back, <span className="font-bold text-accent">{user?.name}</span>!
                </p>
                <Link
                  href={getRoleDashboardLink()}
                  className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition transform hover:scale-105 shadow-lg"
                >
                  Go to Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== ROLE-SPECIFIC QUICK ACTIONS (AUTHENTICATED ONLY) ========== */}
      {isAuthenticated && roleContent && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md border border-accent p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary mb-2">{roleContent.title}</h2>
              <p className="text-secondary mb-6">{roleContent.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={roleContent.primaryAction.href}
                  className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition"
                >
                  {roleContent.primaryAction.label}
                </Link>
                {roleContent.secondaryAction && (
                  <Link
                    href={roleContent.secondaryAction.href}
                    className="bg-accent text-primary px-5 py-2 rounded-md hover:bg-secondary hover:text-white transition"
                  >
                    {roleContent.secondaryAction.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== FEATURES SECTION ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why WorkPulse?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Secure Payments */}
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Secure Payments</h3>
              <p className="text-secondary mt-2">Paystack integration for safe transactions</p>
            </div>
            {/* Feature 2: Verified Workers */}
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Verified Workers</h3>
              <p className="text-secondary mt-2">Ratings and background checks</p>
            </div>
            {/* Feature 3: Real-time Matching */}
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Real‑time Matching</h3>
              <p className="text-secondary mt-2">Location‑based discovery and instant alerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1</div>
              <h3 className="text-xl font-semibold text-primary">Sign Up</h3>
              <p className="text-secondary mt-2">Create an account as customer, worker, or employer</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <h3 className="text-xl font-semibold text-primary">Post or Browse</h3>
              <p className="text-secondary mt-2">Post a job request or find work that fits your skills</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3</div>
              <h3 className="text-xl font-semibold text-primary">Get Paid / Hire</h3>
              <p className="text-secondary mt-2">Complete work, release payment, and leave a review</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION (Solid, no glass) ========== */}
      {!isAuthenticated && (
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8">Join thousands of workers and employers on WorkPulse.</p>
            <Link
              href="/register"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition inline-block shadow-lg"
            >
              Create Free Account
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}