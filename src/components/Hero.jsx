import Spline from '@splinetool/react-spline';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <ShieldCheck size={14} />
              Digital escrow for everything
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
              Trade anything with absolute confidence
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl">
              WholExchange is a premium, modern platform for secure transactions. Use digital escrow, milestone releases, and real-time protection to safely exchange goods and services.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-lg">
                Create a secure deal
              </button>
              <button className="px-5 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 transition-colors">
                Explore pricing
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Lock size={16} className="text-neutral-900"/>Bank-grade encryption</div>
              <div className="flex items-center gap-2"><CreditCard size={16} className="text-neutral-900"/>Multi-network</div>
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-neutral-900"/>Buyer & seller protected</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-xl">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
