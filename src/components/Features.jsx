import { ShieldCheck, Clock, Sparkles, Wallet } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Smart Escrow',
    desc: 'Funds are locked until both sides complete the deal. Milestones and dispute resolution built-in.'
  },
  {
    icon: Clock,
    title: 'Instant Verification',
    desc: 'Identity and payment verification happen in seconds, keeping fraud out and trust in.'
  },
  {
    icon: Wallet,
    title: 'Multi-rail Payments',
    desc: 'Cards, bank transfer, and digital wallets — settle the way that works best for you.'
  },
  {
    icon: Sparkles,
    title: 'Beautiful UX',
    desc: 'A clean, modern interface designed to make high-stakes transactions feel effortless.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-white" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Security-first features</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Built for individuals and businesses who value speed, trust, and a stunning experience.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
