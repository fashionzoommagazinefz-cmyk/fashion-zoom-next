"use client";

import { useState } from "react";

export default function AdmissionsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Request failed");
      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Could not submit right now. Please try later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Admissions</h1>
        <div className="h-1 w-16 bg-[#F81F2E] rounded mb-6" />
        <p className="text-gray-700 mb-6">Request a callback. Our team will contact you with batch dates, fees and a short orientation call.</p>
        {submitted && (
          <div className="mb-4 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-3 py-2">Thanks! We’ll contact you within 24 hours.</div>
        )}
        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</div>
        )}
        <form className="grid gap-4" onSubmit={onSubmit} noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm">
              Full name
              <input name="fullName" required minLength={2} className="mt-1 h-10 px-3 rounded-md border w-full" placeholder="Jane Doe" />
            </label>
            <label className="text-sm">
              Phone
              <input name="phone" required className="mt-1 h-10 px-3 rounded-md border w-full" placeholder="+91 85908 66865" />
            </label>
          </div>
          <label className="text-sm">
            Email (optional)
            <input name="email" type="email" className="mt-1 h-10 px-3 rounded-md border w-full" placeholder="you@example.com" />
          </label>
          <label className="text-sm">
            City
            <input name="city" required minLength={2} className="mt-1 h-10 px-3 rounded-md border w-full" placeholder="Calicut" />
          </label>
          <label className="text-sm">
            Your goals
            <textarea name="goals" required minLength={10} className="mt-1 min-h-28 p-3 rounded-md border w-full" placeholder="What do you want to achieve with us?" />
          </label>
          <div className="flex items-center gap-3">
            <button disabled={loading} className="h-11 px-6 rounded-md bg-[#F81F2E] text-white hover:bg-[#d11322] disabled:opacity-60">
              {loading ? "Submitting…" : "Request Callback"}
            </button>
            <span className="text-xs text-neutral-500">By submitting, you agree to our terms.</span>
          </div>
        </form>
      </div>
    </section>
  );
}
