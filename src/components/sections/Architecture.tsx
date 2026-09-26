import { MapPin, ShieldCheck, BellRing, Sparkles } from 'lucide-react';

export function Architecture() {
  const cards = [
    {
      icon: MapPin,
      badge: 'Location Engine',
      title: 'Smart Geo-Fencing Match',
      desc: 'High-precision spatial filtering matches emergency patients directly with voluntary donors located within the hospital perimeter.',
      style: 'bg-red-50 text-red-600 border-red-100',
    },
    {
      icon: ShieldCheck,
      badge: 'Safety Cooldown',
      title: 'Medical Safety Algorithm',
      desc: 'Automated 90-day cooldown timers lock donor eligibility after completed donations to protect donor health and safety.',
      style: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: BellRing,
      badge: 'Push Network',
      title: 'Real-Time Dispatch',
      desc: 'Urgent blood alerts are broadcast instantaneously to compatible blood groups via FCM high-priority notifications.',
      style: 'bg-rose-50 text-rose-600 border-rose-100',
    },
  ];

  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          Zero Latency Infrastructure
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Enterprise Architecture
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
          Engineered specifically to prevent critical transfusion delays with high availability.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className={`w-12 h-12 ${item.style} border rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">{item.badge}</span>
              <h3 className="text-xl font-black text-slate-900 mt-1 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}