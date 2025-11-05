import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden">
          <div className="relative isolate">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500" />
            <div className="relative p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Start your first protected transaction in minutes</h3>
                  <p className="mt-2 text-indigo-100 max-w-xl">Create a deal, invite the counterparty, and lock funds safely. Release only when everything checks out.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button className="px-5 py-3 rounded-xl bg-white text-neutral-900 hover:bg-neutral-100 transition-colors flex items-center gap-2 shadow">
                    Launch app <ArrowRight size={16} />
                  </button>
                  <button className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/30 transition-colors">
                    Talk to sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
