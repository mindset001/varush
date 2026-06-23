"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-[#0b2545]">Thank you!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Your message has been received. Our team will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2545] focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2545] focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2545] focus:outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2545] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-[#c8932c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b27e1f] sm:w-fit"
      >
        Send Message
      </button>
    </form>
  );
}
