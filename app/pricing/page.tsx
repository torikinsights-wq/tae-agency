"use client";

import { useLanguage } from "../context/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#070B19] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("Simple, Transparent Pricing", "সহজ এবং স্বচ্ছ মূল্যতালিকা")}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              "Choose the right automation package for your business scale.",
              "আপনার ব্যবসার আকৃতি অনুযায়ী সঠিক অটোমেশন প্যাকেজটি বেছে নিন।"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Package */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                {t("Starter Automation", "স্টারটার অটোমেশন")}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                {t(
                  "Perfect for small teams getting started with workflows.",
                  "ছোট টিম যারা সবেমাত্র ওয়ার্কফ্লো নিয়ে কাজ শুরু করছে তাদের জন্য উপযুক্ত।"
                )}
              </p>
              <div className="text-3xl font-extrabold text-cyan-400 mb-6">
                $499 <span className="text-sm font-normal text-slate-400">{t("/project", "/প্রজেক্ট")}</span>
              </div>
            </div>
            <a href="/contact" className="w-full text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-all">
              {t("Get Started", "শুরু করুন")}
            </a>
          </div>

          {/* Enterprise Package */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/40 flex flex-col justify-between shadow-xl shadow-cyan-500/10">
            <div>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-semibold">
                {t("Most Popular", "সবচেয়ে জনপ্রিয়")}
              </span>
              <h3 className="text-xl font-bold mt-4 mb-2">
                {t("Enterprise AI Agent", "এন্টারপ্রাইজ এআই এজেন্ট")}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                {t(
                  "Advanced custom AI and full CRM infrastructure.",
                  "অ্যাডভান্সড কাস্টম এআই এবং ফুল সিআরএম ইনফ্রাস্ট্রাকচার।"
                )}
              </p>
              <div className="text-3xl font-extrabold text-cyan-400 mb-6">
                $1,299 <span className="text-sm font-normal text-slate-400">{t("/project", "/প্রজেক্ট")}</span>
              </div>
            </div>
            <a href="/contact" className="w-full text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold py-3 rounded-xl transition-all">
              {t("Book Enterprise", "বুক এন্টারপ্রাইজ")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}