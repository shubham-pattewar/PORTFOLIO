import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { NeoButton } from '../ui/NeoButton';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Configurable endpoint (or simulated fast completion if not configured in .env)
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formState),
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        // Fallback simulation for client testing
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong while sending your message. Please try again or reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 08 / CONTACT Separator */}
      <SectionHeader
        number="08"
        title="CONTACT"
        subtitle="DIRECT INQUIRIES & COLLABORATION"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Context & Direct Reachout (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-[var(--text-color)] tracking-tight leading-[1.1]">
              LET'S BUILD SOMETHING.
            </h3>
            <p className="font-sans text-base sm:text-lg text-[var(--text-color)] opacity-85 mt-4 leading-relaxed">
              Have an idea, a problem worth solving, or simply want to talk tech? Drop me a message.
            </p>
          </div>

          {/* Direct Contact Channels Box */}
          <div className="neo-box p-6 bg-[var(--surface-card)] space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B9D] dark:text-[#FFD83D] block">
              // DIRECT CHANNELS
            </span>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border-2 border-[var(--border-color)] bg-[#FFD83D] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#111111]" />
              </div>
              <div className="overflow-hidden">
                <span className="font-mono text-[10px] opacity-60 block uppercase">
                  PRIMARY INBOX
                </span>
                <a
                  href="mailto:sspattewar2004@gmail.com"
                  className="font-mono text-xs sm:text-sm font-bold text-[var(--text-color)] hover:underline truncate block"
                >
                  sspattewar2004@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border-2 border-[var(--border-color)] bg-[#B7F34A] flex items-center justify-center shrink-0">
                <LinkedinIcon className="w-4 h-4 text-[#111111]" />
              </div>
              <div>
                <span className="font-mono text-[10px] opacity-60 block uppercase">
                  PROFESSIONAL NETWORK
                </span>
                <a
                  href="https://www.linkedin.com/in/shubham-pattewar-39a1942b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm font-bold text-[var(--text-color)] hover:underline"
                >
                  linkedin.com/in/shubham-pattewar-39a1942b8
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border-2 border-[var(--border-color)] bg-[#A855F7] flex items-center justify-center shrink-0">
                <GithubIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-mono text-[10px] opacity-60 block uppercase">
                  SOURCE CODE REPOSITORIES
                </span>
                <a
                  href="https://github.com/shubham-pattewar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm font-bold text-[var(--text-color)] hover:underline"
                >
                  github.com/shubham-pattewar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="neo-box p-6 sm:p-8 lg:p-10 bg-[var(--surface-card)] space-y-6"
            noValidate
          >
            {/* Status Feedback Messages */}
            {status === 'success' && (
              <div className="p-4 border-2 border-[#B7F34A] bg-[#B7F34A]/15 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B7F34A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-bold uppercase text-sm block">
                    MESSAGE SENT.
                  </span>
                  <span className="font-mono text-xs opacity-90">
                    I'LL GET BACK TO YOU SOON.
                  </span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 border-2 border-[#FF6B9D] bg-[#FF6B9D]/15 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#FF6B9D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-bold uppercase text-sm block">
                    SUBMISSION FAILED.
                  </span>
                  <span className="font-mono text-xs opacity-90">
                    {errorMessage}
                  </span>
                </div>
              </div>
            )}

            {/* Field: Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-color)] block"
              >
                NAME <span className="text-[#FF6B9D]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                required
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 bg-[var(--bg-color)] border-[3px] border-[var(--border-color)] font-sans text-sm text-[var(--text-color)] placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#FFD83D]"
              />
            </div>

            {/* Field: Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-color)] block"
              >
                EMAIL <span className="text-[#FF6B9D]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                required
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 bg-[var(--bg-color)] border-[3px] border-[var(--border-color)] font-sans text-sm text-[var(--text-color)] placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#FFD83D]"
              />
            </div>

            {/* Field: Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-color)] block"
              >
                MESSAGE <span className="text-[#FF6B9D]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Describe your project, question, or problem..."
                required
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 bg-[var(--bg-color)] border-[3px] border-[var(--border-color)] font-sans text-sm text-[var(--text-color)] placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#FFD83D] resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <NeoButton
                type="submit"
                variant="yellow"
                size="lg"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto"
                icon={<Send className="w-4 h-4" />}
              >
                {status === 'submitting' ? 'DISPATCHING...' : 'SEND MESSAGE'}
              </NeoButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
