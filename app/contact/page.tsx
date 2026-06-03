'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission – replace with actual API later
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md border border-accent p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">📍</span>
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="text-secondary">123 Independence Avenue<br />Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">📞</span>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-secondary">+233 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">✉️</span>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-secondary">support@workpulse.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">🕒</span>
                <div>
                  <h3 className="font-semibold text-primary">Business Hours</h3>
                  <p className="text-secondary">Monday – Friday: 9am – 6pm<br />Saturday: 10am – 2pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md border border-accent p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Send a Message</h2>
            {submitted && (
              <div className="mb-4 p-3 bg-accent/20 text-primary rounded-md border border-accent">
                Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-primary text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label className="block text-primary text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label className="block text-primary text-sm font-medium mb-1">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label className="block text-primary text-sm font-medium mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-secondary focus:border-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-primary/5 rounded-lg p-6 text-center border border-accent">
          <h3 className="text-lg font-semibold text-primary mb-2">Find us on the map</h3>
          <div className="bg-gray-200 h-48 rounded flex items-center justify-center text-secondary">
            [Interactive map will be added here]
          </div>
        </div>
      </div>
    </div>
  );
}