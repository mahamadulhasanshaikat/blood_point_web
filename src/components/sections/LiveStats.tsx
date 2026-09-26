'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, UserCheck, Heart, MapPin, Activity } from 'lucide-react';

function useCounter(target: number, duration: number = 1100) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!target) return;
    let current = 0;
    const stepMs = 16;
    const stepCount = duration / stepMs;
    const delta = target / stepCount;

    const interval = setInterval(() => {
      current += delta;
      if (current >= target) {
        setVal(target);
        clearInterval(interval);
      } else {
        setVal(Math.floor(current));
      }
    }, stepMs);

    return () => clearInterval(interval);
  }, [target, duration]);

  return val;
}

export function LiveStats() {
  const [data, setData] = useState({
    totalDonors: 0,
    activeDonors: 0,
    livesSaved: 0,
    districtsCount: 64,
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      try {
        const { count: total } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        const { count: active } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })
          .eq('is_available', true);

        const { count: fulfilledCount } = await supabase
          .from('blood_requests')
          .select('*', { count: 'exact', head: true })
          .eq('is_fulfilled', true);

        let lives = fulfilledCount || 0;

        if (lives === 0) {
          const { count: donationCount } = await supabase
            .from('donations')
            .select('*', { count: 'exact', head: true });
          lives = donationCount || 0;
        }

        if (lives === 0) {
          const { data: profiles } = await supabase
            .from('profiles')
            .select('total_donations');

          if (profiles && Array.isArray(profiles)) {
            lives = (profiles as Array<{ total_donations: number | null }>).reduce(
              (acc, curr) => acc + (curr.total_donations ? Number(curr.total_donations) : 0),
              0
            );
          }
        }

        if (isMounted) {
          setData({
            totalDonors: total || 0,
            activeDonors: active || 0,
            livesSaved: lives,
            districtsCount: 64,
            isLoading: false,
          });
        }
      } catch (err) {
        console.error('Failed to load metrics:', err);
        if (isMounted) {
          setData((prev) => ({ ...prev, isLoading: false }));
        }
      }
    }

    loadStats();
    return () => {
      isMounted = false;
    };
  }, []);

  const totalAnimated = useCounter(data.totalDonors);
  const activeAnimated = useCounter(data.activeDonors);
  const livesAnimated = useCounter(data.livesSaved);

  const formatDisplay = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K+`;
    return `${num}`;
  };

  const statItems = [
    {
      label: 'Total Donors',
      value: data.isLoading ? '...' : formatDisplay(totalAnimated),
      subtext: 'Verified profiles',
      icon: Users,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      label: 'Active Donors',
      value: data.isLoading ? '...' : formatDisplay(activeAnimated),
      subtext: 'Ready to donate now',
      icon: UserCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      label: 'Lives Saved',
      value: data.isLoading ? '...' : `${formatDisplay(livesAnimated)}+`,
      subtext: 'Completed transfusions',
      icon: Heart,
      color: 'text-red-600 bg-red-50 border-red-100',
    },
    {
      label: 'Districts Covered',
      value: '64/64',
      subtext: 'Nationwide coverage',
      icon: MapPin,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
  ];

  return (
    <section id="stats" className="py-20 bg-slate-50/60 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            Live Verified Telemetry
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Real-Time Platform Activity 🩸
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Synchronized directly with our voluntary donor database
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3.5 rounded-2xl border ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {item.value}
                </h3>
                <p className="text-sm font-bold text-slate-800 mt-1.5">{item.label}</p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">{item.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}