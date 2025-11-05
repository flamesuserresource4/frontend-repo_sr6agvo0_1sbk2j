import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white">
              <Shield size={16} />
            </div>
            <span className="font-semibold">WholExchange</span>
          </div>
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} WholExchange. Secure transactions for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
