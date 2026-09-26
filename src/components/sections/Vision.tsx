import { Globe, Mail, Code2, Award } from 'lucide-react';

export function Vision() {
  return (
    <section id="vision" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-950 text-white rounded-[36px] p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Our Commitment
            </div>

            <div>
              <h3 className="text-base font-bold text-red-400 mb-1">Our Mission / আমাদের লক্ষ্য</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To bridge the communication gap between voluntary blood donors and emergency patients in seconds through intelligent geolocation, zero data commercialization, and verified donor tracking.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-red-400 mb-1">Our Vision / আমাদের রূপকল্প</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A nationwide healthcare future where no human life is lost due to the lack or delay of emergency blood supply across 64 districts in Bangladesh.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Channels & Meta</h4>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Globe className="w-4 h-4 text-red-400 shrink-0" />
              <span>Official Portal: <strong>bloodpoint.org</strong></span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-red-400 shrink-0" />
              <span>Contact: <strong>contact@bloodpoint.org</strong></span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Code2 className="w-4 h-4 text-red-400 shrink-0" />
              <span>Lead Engineering: <strong>MHS Tech Labs</strong></span>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
              Version 1.0.0 (Production) • Public Welfare
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}