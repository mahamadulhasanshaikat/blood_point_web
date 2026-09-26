'use client';

import { useState } from 'react';
import { Droplets, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function Hero() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-red-200/40 via-rose-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/70 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-xs backdrop-blur-md transition-transform duration-300 hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              Bangladesh&apos;s Fastest Voluntary Blood Network
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Connecting Voluntary Blood Donors in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
                Seconds
              </span>
              .
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Bridge the critical communication gap between voluntary donors and emergency patients through intelligent geo-fencing, 90-day medical safety cooldown, and instant push broadcasting.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-slate-950 hover:bg-slate-900 text-white px-7 py-3.5 rounded-2xl shadow-xl shadow-slate-950/20 border border-slate-800 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group"
              >
                <svg className="w-7 h-7 shrink-0 text-white fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-.954V2.768c.15-.36.368-.696.609-.954zm11.254 11.255l2.09-2.09-12.753-7.36 10.663 9.45zm0 1.862l-10.663 9.45 12.753-7.36-2.09-2.09zm1.48-1.48l3.376-1.948c.84-.485.84-1.277 0-1.762L16.343 13.45z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Get it on</span>
                  <span className="block text-sm font-black tracking-tight text-white leading-none mt-0.5">Google Play</span>
                </div>
              </a>

              <a
                href="#stats"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-800 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                View Live Telemetry
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Free & Non-Profit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Data Selling
              </span>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative mx-auto max-w-sm w-full select-none animate-float">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-rose-600 rounded-[32px] blur-2xl animate-glow" />

              <div className="relative bg-gradient-to-br from-[#E52D27] to-[#B31217] rounded-[26px] p-6 text-white shadow-2xl overflow-hidden border border-white/20 transition-transform duration-300 hover:scale-[1.01]">
                <Droplets className="absolute -right-6 -bottom-6 w-44 h-44 text-white/5 pointer-events-none rotate-12" />

                <div className="flex justify-between items-start">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white/90">
                      <Droplets className="w-3.5 h-3.5 fill-white" />
                      Blood Group
                    </div>
                    <div className="text-5xl font-black mt-2 tracking-tight">O+</div>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    Verified Donor
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 my-5 text-center">
                  <div>
                    <div className="text-base font-extrabold">12</div>
                    <div className="text-[10px] text-white/70 font-medium mt-0.5">Donations</div>
                  </div>
                  <div className="border-x border-white/15">
                    <div className="text-base font-extrabold text-amber-300">36+</div>
                    <div className="text-[10px] text-white/70 font-medium mt-0.5">Lives Saved</div>
                  </div>
                  <div>
                    <div className={`text-base font-extrabold ${isAvailable ? 'text-emerald-300' : 'text-orange-300'}`}>
                      {isAvailable ? 'Ready' : 'Resting'}
                    </div>
                    <div className="text-[10px] text-white/70 font-medium mt-0.5">Eligibility</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                        isAvailable ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-white/40'
                      }`}
                    />
                    <span className="text-xs font-bold text-white/95">
                      {isAvailable ? 'Ready to Donate Blood' : 'Safety Cooldown Active'}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label="Toggle donor availability"
                    onClick={() => setIsAvailable(!isAvailable)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                      isAvailable ? 'bg-emerald-400' : 'bg-white/30'
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                        isAvailable ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
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