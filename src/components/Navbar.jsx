import { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/50 dark:border-white/10 rounded-2xl shadow-lg">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-md">
                <Shield size={20} />
              </div>
              <span className="text-lg sm:text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500">
                WholExchange
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
              <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
              <a href="#how" className="hover:text-neutral-900 transition-colors">How it works</a>
              <a href="#security" className="hover:text-neutral-900 transition-colors">Security</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl text-neutral-700 hover:text-neutral-900 transition-colors">Sign in</button>
              <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-md">
                Get started
              </button>
            </div>

            <button className="md:hidden p-2 rounded-lg border border-neutral-200 bg-white/70 backdrop-blur" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium text-neutral-700">
              <a href="#features" className="block">Features</a>
              <a href="#how" className="block">How it works</a>
              <a href="#security" className="block">Security</a>
              <div className="pt-2 flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-xl border border-neutral-200 bg-white">Sign in</button>
                <button className="flex-1 px-4 py-2 rounded-xl bg-neutral-900 text-white">Get started</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
