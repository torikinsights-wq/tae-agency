"use client";

import { useLanguage } from "./context/LanguageContext";
import Link from "next/link";
import React from "react";
import { 
  FaBolt, FaRobot, FaCalendarAlt, FaCreditCard, 
  FaStar, FaShareAlt 
} from "react-icons/fa";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#070B19] text-white">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-16 py-12 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <div className="flex-1 text-center lg:text-left z-10 w-full space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t("AI-Powered Auto Detailing Automation Agency", "অটো ডিটেইলিং ব্যবসার জন্য এআই ও অটোমেশন এজেন্সি")}
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {t("Scale Your Auto Detailing Business.", "আপনার অটো ডিটেইলিং ব্যবসার গ্রোথ")} <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("With AI & Automation.", "দ্বিগুণ করুন AI ও অটোমেশনের মাধ্যমে।")}
            </span>
          </h1>

          <p className="text-cyan-200 text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0">
            {t(
              "Double your auto detailing business growth with complete AI & automation systems.",
              "সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার অটো ডিটেইলিং ব্যবসার গ্রোথ দ্বিগুণ করুন।"
            )}
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t(
              "We automate your entire customer journey—from lead capture to rapid response, appointment booking, payment, review, and repeat customers.",
              "আমরা আপনার ব্যবসার পুরো Customer Journey অটোমেট করি—Lead Capture থেকে শুরু করে দ্রুত Customer Response, Appointment Booking, Payment, Review এবং Repeat Customer পর্যন্ত।"
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full pt-2">
            <Link href="/services" className="w-full sm:w-auto text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-cyan-500/20 text-sm sm:text-base">
              {t("View Our Services", "আমাদের সেবাসমূহ দেখুন")}
            </Link>
            <Link href="/contact" className="w-full sm:w-auto text-center bg-slate-900/80 hover:bg-slate-800 text-white font-medium px-7 py-3.5 rounded-xl border border-slate-700 transition-all text-sm sm:text-base">
              {t("Book Free Automation Audit", "Free Automation Audit বুক করুন")}
            </Link>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 max-w-xl text-left mt-4 shadow-xl">
            <h3 className="text-sm font-bold text-cyan-400 mb-1">
              {t("Our Core Objective", "আমাদের মূল লক্ষ্য")}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {t(
                "Less manual work. Faster response. More bookings. More repeat customers.",
                "কম Manual কাজ। দ্রুত Response। বেশি Booking। বেশি Repeat Customer।"
              )}
            </p>
          </div>
        </div>

        {/* Right Side Visual Graphic Card */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="text-center mb-6">
              <span className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {t("DETAILING AI CORE", "ডিটেইলিং এআই কোর")}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-3 text-white">
                {t("Complete Customer Journey", "সম্পূর্ণ কাস্টমার জার্নি")}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                {t("From first lead to loyal repeat customer", "প্রথম লিড থেকে লয়েল কাস্টমার পর্যন্ত")}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-center text-xs font-medium">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">Ads / Website</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">Lead Capture</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">CRM Sync</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">Instant SMS/WA</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">AI Follow-up</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">Auto Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES HIGHLIGHT PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-16 py-16 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-white">
            {t("Our Core Automation Services", "আমাদের মূল অটোমেশন সার্ভিসসমূহ")}
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            {t("Specialized automation solutions built exclusively for detailing shops.", "ডিটেইলিং শপগুলোর জন্য বিশেষভাবে তৈরি অটোমেশন সমাধান।")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FaBolt />, titleEn: "Lead & Sales Automation", titleBn: "১. Lead & Sales Automation", descEn: "Capture every lead instantly and convert more prospects into paying detailing customers.", descBn: "প্রতিটি Lead দ্রুত Capture করুন এবং আরও বেশি Prospect-কে Customer-এ পরিণত করুন।" },
            { icon: <FaRobot />, titleEn: "AI Customer Support", titleBn: "২. AI Customer Support", descEn: "Provide 24/7 intelligent support, answer pricing/services, and handle FAQs automatically.", descBn: "আপনার Customer-কে দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান Support দিন।" },
            { icon: <FaCalendarAlt />, titleEn: "Booking & Operations", titleBn: "৩. Booking & Operations", descEn: "Seamless online booking, calendar integration, and automated technician job assignments.", descBn: "Appointment এবং দৈনন্দিন Business Operations সহজ ও স্বয়ংক্রিয় করুন।" }
          ].map((srv, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition duration-300">
              <div className="text-cyan-400 text-3xl mb-4">{srv.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{t(srv.titleEn, srv.titleBn)}</h3>
              <p className="text-slate-400 text-xs sm:text-sm">{t(srv.descEn, srv.descBn)}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="inline-block bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold px-6 py-3 rounded-xl border border-cyan-500/30 transition">
            {t("Explore All 6 Services →", "সবগুলো সার্ভিস বিস্তারিত দেখুন →")}
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 sm:px-6 lg:px-16 py-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {t("Ready to Automate Your Auto Detailing Business?", "আপনার Auto Detailing Business অটোমেট করতে প্রস্তুত?")}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            {t(
              "Reduce lost leads, manual work, and follow-up hassles. Let AI and automation work 24/7 for your business.",
              "Lead হারানো, Manual কাজ এবং Customer Follow-up-এর ঝামেলা কমান। AI এবং Automation-কে আপনার Business-এর জন্য ২৪/৭ কাজ করতে দিন।"
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition text-sm sm:text-base">
              {t("Book Free Automation Audit", "Free Automation Audit বুক করুন")}
            </Link>
            <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl border border-slate-700 transition text-sm sm:text-base">
              {t("Talk With An Expert", "আমাদের একজন Expert-এর সাথে কথা বলুন")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}