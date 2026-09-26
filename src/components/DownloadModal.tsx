"use client";

import { useEffect } from "react";
import { 
  Download, 
  X, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  HardDrive, 
  Info
} from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  // ESC চাপলে মডাল ক্লোজ করার হ্যান্ডলার
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* ব্যাকড্রপ ও গ্লাস ব্লার */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* মডাল কার্ড */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* টপ ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-linear-to-br from-red-500/15 via-rose-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* ক্লোজ বাটন */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* হেডার সেকশন */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 border border-rose-200/60 dark:border-rose-900/50 text-red-600 dark:text-red-400">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping" />
            <span>অফিসিয়াল প্রি-রিলিজ বেটা টেস্টিং</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-600/10 dark:bg-red-600/20 text-red-600 dark:text-red-400 rounded-2xl">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Blood Point Mobile App
              </h3>
            </div>
          </div>
        </div>

        {/* রিলিজ মেটাডেটা গ্রিড */}
        <div className="grid grid-cols-3 gap-2.5 my-5">
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 p-3 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">ভার্সন</span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">v1.0.0 (Beta)</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 p-3 rounded-2xl text-center flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">সাইজ</span>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-200">
              <HardDrive className="w-3 h-3 text-slate-400" />
              <span>~60 MB</span>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 p-3 rounded-2xl text-center flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">প্ল্যাটফর্ম</span>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-200">
              <Cpu className="w-3 h-3 text-slate-400" />
              <span>Universal</span>
            </div>
          </div>
        </div>

        {/* ইনস্টলেশন নির্দেশিকা */}
        <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
            <Info className="w-4 h-4 text-red-500" />
            <span>ইনস্টল করার নিয়মাবলী:</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed pl-1">
            <li>APK ডাউনলোড সম্পন্ন হলে ফাইলে চাপ দিয়ে ইনস্টল করুন।</li>
            <li>ফোনে <strong>&quot;Install unknown apps&quot;</strong> নোটিশ দেখালে সেটিংসে গিয়ে ব্রাউজারটিকে <strong>Allow</strong> করুন।</li>
            <li>সম্পূর্ণ নিজস্ব সার্ভার থেকে ভেরিফাইড প্যাকেজ হওয়ায় এটি শতভাগ নিরাপদ।</li>
          </ul>
        </div>

        {/* সিকিউরিটি ব্যাজ ও অ্যাকশন বাটনসমূহ */}
        <div className="pt-5 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/blood-point.apk"
              download="blood-point.apk"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 shadow-lg shadow-red-500/25 active:translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>সরাসরি APK ডাউনলোড করুন</span>
            </a>
            
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-2xl font-semibold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              বাতিল
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified MHS Tech Labs Security Signature</span>
          </div>
        </div>

      </div>
    </div>
  );
}