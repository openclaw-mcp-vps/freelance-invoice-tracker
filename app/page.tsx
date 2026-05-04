export default function Home() {
  const faqs = [
    {
      q: "How do automated reminders work?",
      a: "Once you add an invoice, our system checks daily and sends email reminders on your chosen schedule — 7, 14, and 30 days overdue by default."
    },
    {
      q: "Can I customize the reminder schedule?",
      a: "Yes. You can set custom intervals, edit the email templates, and choose when late fees start accruing."
    },
    {
      q: "What payment methods are supported?",
      a: "Subscriptions are handled via Lemon Squeezy, supporting all major credit cards and PayPal."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Invoice Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Payments.<br />
          <span className="text-[#58a6ff]">Automate Your Follow-Ups.</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Track unpaid invoices, send automated reminders, and calculate late fees — so you get paid faster without the awkward emails.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to start. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        {[
          ["Automated Reminders", "Email follow-ups on your schedule"],
          ["Late Fee Calc", "Auto-calculate overdue charges"],
          ["Payment Patterns", "See who pays late, every time"],
          ["Status Dashboard", "All invoices in one view"]
        ].map(([title, desc]) => (
          <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <p className="text-white font-semibold text-sm mb-1">{title}</p>
            <p className="text-[#8b949e] text-xs">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices",
              "Automated email reminders",
              "Custom reminder schedules",
              "Late fee calculations",
              "Payment pattern reports",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} FreelanceInvoice. All rights reserved.
      </footer>
    </main>
  );
}
