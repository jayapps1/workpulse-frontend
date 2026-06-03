'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Create an Account',
      description: 'Sign up as a customer, worker, or employer. Fill in your basic details and choose your role.',
      icon: '📝',
      bg: 'bg-accent/10'
    },
    {
      number: '02',
      title: 'Set Up Your Profile',
      description: 'Workers: add skills, experience, and availability. Employers: verify your business.',
      icon: '👤',
      bg: 'bg-accent/10'
    },
    {
      number: '03',
      title: 'Post or Browse Jobs',
      description: 'Customers/Employers post job requests. Workers browse and apply to matches.',
      icon: '🔍',
      bg: 'bg-accent/10'
    },
    {
      number: '04',
      title: 'Connect & Chat',
      description: 'Use in-app messaging to discuss details, negotiate, and confirm the job.',
      icon: '💬',
      bg: 'bg-accent/10'
    },
    {
      number: '05',
      title: 'Complete Work & Pay',
      description: 'Workers complete the job. Customers release payment via secure Paystack integration.',
      icon: '💰',
      bg: 'bg-accent/10'
    },
    {
      number: '06',
      title: 'Rate & Review',
      description: 'Build trust by rating each other. Your reputation helps you get more work or better workers.',
      icon: '⭐',
      bg: 'bg-accent/10'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">How It Works</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Simple, transparent, and fast – get started in minutes
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg shadow-md border border-accent p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-3">{step.icon}</div>
              <div className="text-accent font-bold text-xl mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-secondary text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Video / Graphic Placeholder */}
        <div className="bg-primary/5 rounded-lg p-8 text-center border border-accent mb-12">
          <div className="text-5xl mb-3">🎬</div>
          <h3 className="text-xl font-semibold text-primary mb-2">Watch a quick demo</h3>
          <p className="text-secondary">(Demo video coming soon – we're recording!)</p>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg p-8 border border-accent">
          <h2 className="text-2xl font-bold text-primary mb-3">Ready to get started?</h2>
          <p className="text-secondary mb-6">Join WorkPulse today – it's free!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition inline-block"
            >
              Sign Up as Customer
            </Link>
            <Link
              href="/register?role=worker"
              className="bg-accent text-primary px-6 py-2 rounded-md hover:bg-secondary hover:text-white transition inline-block"
            >
              Sign Up as Worker
            </Link>
            <Link
              href="/register?role=employer"
              className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-primary transition inline-block"
            >
              Sign Up as Employer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}