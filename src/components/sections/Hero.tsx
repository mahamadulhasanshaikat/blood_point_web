'use client';

import { useState } from 'react';
import {
  Droplets,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Download
} from 'lucide-react';
import DownloadModal from '@/components/DownloadModal';

export function Hero() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-[#FDFDFE]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-187.5 h-137.5 bg-linear-to-tr from-red-200/40 via-rose-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ================= বাম পাশ: হেডিং, টেক্সট ও অ্যাকশন ================= */}
          <div className="lg:col-span-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/70 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-xs backdrop-blur-md transition-transform duration-300 hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              Bangladesh&apos;s Fastest Voluntary Blood Network
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Connecting Voluntary Blood Donors in{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-rose-600 to-red-500">
                Seconds
              </span>
              .
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Emergency blood requests matched instantly with verified voluntary donors across all 8 major blood groups nationwide.
            </p>

            {/* অ্যাকশন বাটনসমূহ (Play Store + Beta APK + Telemetry) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
              
              {/* ১. গুগল প্লে বাটন */}
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl shadow-slate-950/20 border border-slate-800 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <svg className="w-6 h-6 shrink-0 text-white fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-.954V2.768c.15-.36.368-.696.609-.954zm11.254 11.255l2.09-2.09-12.753-7.36 10.663 9.45zm0 1.862l-10.663 9.45 12.753-7.36-2.09-2.09zm1.48-1.48l3.376-1.948c.84-.485.84-1.277 0-1.762L16.343 13.45z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[9px] font-semibold uppercase tracking-wider text-slate-400">Get it on</span>
                  <span className="block text-xs font-black tracking-tight text-white leading-none mt-0.5">Google Play</span>
                </div>
              </a>

              {/* ২. টেস্টিং APK ডাউনলোড পপ-আপ বাটন */}
              <button
                type="button"
                onClick={() => setIsDownloadOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-600/25 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-white/90" />
                <span>Download APK (Beta)</span>
              </button>

              {/* ৩. লাইভ টেলিমেট্রি বাটন */}
              <a
                href="#stats"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-800 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Live Telemetry</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Free & Non-Profit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> All 8 Blood Groups Supported
              </span>
            </div>
          </div>

          {/* ================= ডান পাশ: ৩টি পারফেক্ট কনসেন্ট্রিক রিং অরবিট ================= */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-125 sm:min-h-140">
            <div className="relative w-85 h-85 sm:w-125 sm:h-125 flex items-center justify-center select-none orbit-container">

              {/* রিং ১ */}
              <div className="absolute inset-0 rounded-full border border-dashed border-red-200/80 pointer-events-none" />
              <div className="absolute inset-0 rounded-full orbit-layer animate-orbit-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="orbit-layer animate-anti-1 flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-tr from-red-600 to-rose-500 text-white font-black text-sm shadow-xl shadow-red-500/40 border-2 border-white transition-all duration-300 hover:scale-125 cursor-pointer">
                    O+
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="orbit-layer animate-anti-1 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 text-rose-400 font-black text-xs shadow-lg border-2 border-white transition-all duration-300 hover:scale-125 cursor-pointer">
                    O-
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/4 -translate-x-1/2">
                  <div className="orbit-layer animate-anti-1 flex items-center justify-center w-11 h-11 rounded-full bg-white text-red-600 font-black text-xs shadow-lg border border-red-100 transition-all duration-300 hover:scale-125 cursor-pointer">
                    A+
                  </div>
                </div>
              </div>

              {/* রিং ২ */}
              <div className="absolute w-60 h-60 sm:w-85 sm:h-85 rounded-full border border-red-100 pointer-events-none" />
              <div className="absolute w-60 h-60 sm:w-85 sm:h-85 rounded-full orbit-layer animate-orbit-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="orbit-layer animate-anti-2 flex items-center justify-center w-11 h-11 rounded-full bg-white text-red-600 font-black text-xs shadow-md border border-rose-200 transition-all duration-300 hover:scale-125 cursor-pointer">
                    B+
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="orbit-layer animate-anti-2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 text-white font-black text-xs shadow-md border border-slate-700 transition-all duration-300 hover:scale-125 cursor-pointer">
                    A-
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/4 -translate-x-1/2">
                  <div className="orbit-layer animate-anti-2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 text-white font-black text-xs shadow-md border border-slate-700 transition-all duration-300 hover:scale-125 cursor-pointer">
                    B-
                  </div>
                </div>
              </div>

              {/* রিং ৩ */}
              <div className="absolute w-35 h-35 sm:w-50 sm:h-50 rounded-full border border-dashed border-rose-300/60 pointer-events-none" />
              <div className="absolute w-35 h-35 sm:w-50 sm:h-50 rounded-full orbit-layer animate-orbit-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="orbit-layer animate-anti-3 flex items-center justify-center w-10 h-10 rounded-full bg-white text-rose-600 font-black text-[11px] shadow-md border border-rose-200 transition-all duration-300 hover:scale-125 cursor-pointer">
                    AB+
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="orbit-layer animate-anti-3 flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-rose-300 font-black text-[10px] shadow-md border border-slate-800 transition-all duration-300 hover:scale-125 cursor-pointer">
                    AB-
                  </div>
                </div>
              </div>

              {/* Central Core Hub */}
              <div className="relative z-20 flex flex-col items-center justify-center">
                <div className="absolute -inset-2 bg-red-600/20 rounded-full blur-xl animate-pulse pointer-events-none" />

                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-tr from-[#B31217] via-[#E52D27] to-rose-500 text-white shadow-xl shadow-red-600/40 flex flex-col items-center justify-center border-2 border-white/50 transform transition-all duration-300 hover:scale-105">
                  <Droplets className="w-5 h-5 sm:w-7 sm:h-7 fill-white drop-shadow-md animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider mt-0.5 text-white">
                    Blood Point
                  </span>
                  <span className="text-[7px] font-bold text-rose-200 uppercase tracking-widest leading-none">
                    Network
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* টেস্টিং পপ-আপ মডাল */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </section>
  );
}

export default Hero;