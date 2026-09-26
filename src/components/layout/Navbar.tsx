import { Droplets, Download } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-tr from-[#E52D27] to-[#B31217] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/25">
            <Droplets className="w-6 h-6 fill-white" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-slate-950">
              Blood<span className="text-red-600">Point</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md ml-2 border border-red-100">
              Play Store Edition
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#stats" className="hover:text-red-600 transition">Live Stats</a>
          <a href="#architecture" className="hover:text-red-600 transition">Features</a>
          <a href="#vision" className="hover:text-red-600 transition">About</a>
        </nav>

        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-2xl transition shadow-lg shadow-slate-900/10"
        >
          <Download className="w-4 h-4 text-red-500" />
          Get App
        </a>
      </div>
    </header>
  );
}