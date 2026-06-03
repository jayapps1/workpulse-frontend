'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About WorkPulse</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Connecting skilled workers and employers in real time
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md border border-accent p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-secondary leading-relaxed">
            To bridge the gap between labour demand and supply in Ghana and beyond by providing 
            a trusted, efficient, and transparent workforce marketplace. We empower skilled workers 
            to find consistent opportunities and enable customers and businesses to access reliable 
            talent instantly.
          </p>
        </div>

        {/* Values Grid */}
        <h2 className="text-2xl font-bold text-primary text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-accent shadow-sm">
            <div className="text-primary text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Trust</h3>
            <p className="text-secondary">Verification, ratings, and secure payments build confidence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-accent shadow-sm">
            <div className="text-primary text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Efficiency</h3>
            <p className="text-secondary">Real-time matching and instant job alerts save time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-accent shadow-sm">
            <div className="text-primary text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Inclusivity</h3>
            <p className="text-secondary">Opportunities for both skilled and casual workers.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Built for Ghana, Growing Global</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            WorkPulse is developed by a passionate team dedicated to solving workforce challenges 
            in developing economies. We believe in the power of technology to create economic 
            opportunities for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}