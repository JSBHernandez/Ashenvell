"use client";

import { useState } from 'react';
import type { SocialLink } from '@/types';

// SVG Icons for social media
const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
const LinkedinIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/JSBHernandez' },
  { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/juan-sebastian-becerra-hernandez-116752250/' },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error sending message.');
      }

      setSubmitMessage(result.message || 'Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error(error);
      setSubmitMessage('There was an error sending the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Let´s Talk About Your Project</h2>
        <p className="section-subtitle">
          Have an idea or need help with a project? Fill out the form or contact us through our social media.
        </p>

        <div className="max-w-3xl mx-auto bg-brand-dark-secondary p-8 md:p-12 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-blue-light mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-brand-light-text focus:ring-brand-blue focus:border-brand-blue transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-blue-light mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-brand-light-text focus:ring-brand-blue focus:border-brand-blue transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-blue-light mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-brand-light-text focus:ring-brand-blue focus:border-brand-blue transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitMessage && (
              <p className={`mt-4 text-center text-sm ${submitMessage.includes('error') ? 'text-red-400' : 'text-green-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <h3 className="text-xl font-semibold text-brand-blue-light mb-4">Or find us at:</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ashenvell on ${link.name}`}
                  className="text-brand-muted-text hover:text-brand-accent transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-brand-muted-text">
              Direct email: <a href="mailto:sebastianbhforjobs@gmail.com" className="text-brand-blue hover:underline">sebastianbhforjobs@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
