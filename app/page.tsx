"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import {
  FaBolt,
  FaRobot,
  FaCalendarAlt,
  FaCreditCard,
  FaStar,
  FaShareAlt,
  FaArrowRight,
  FaCheckCircle,
  FaInfoCircle,
  FaBullseye,
} from "react-icons/fa";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Cinematic Glow Elements for Video/Graphic Vibe (Enhanced Intensity) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none animate-ping duration-1000"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Hero Section with Cinematic Entrance */}
        <div className="text-center space-y-8 pt-8 animate-[fadeInUp_1s_ease-out]">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold mb-2 shadow-xl shadow-cyan-500/20 transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/40 cursor-pointer">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            {t("AI-Powered Business Automation Agency", "এআই-চালিত বিজনেস অটোমেশন এজেন্সি")}
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight">
            {t("Automate Your Business,", "আপনার ব্যবসা অটোমেট করুন,")} <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(6,182,212,0.3)] animate-gradient">
              {t("Save Time & Double Revenue", "সময় বাঁচান ও আয় দ্বিগুণ করুন")}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-cyan-200/90 font-medium max-w-3xl mx-auto leading-relaxed">
            {t(
              "Take your business customer journey and sales growth to the next level through complete AI and automation systems.",
              "সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার কাস্টমার জার্নি এবং সেলস গ্রোথকে পরবর্তী স্তরে নিয়ে যান।"
            )}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {t(
              "We automate your entire business process—from lead capture to instant response, AI follow-ups, appointment booking, payments, and repeat customer generation.",
              "আমরা আপনার ব্যবসার পুরো প্রক্রিয়াটি অটোমেট করি—লিড ক্যাপচার থেকে শুরু করে তাৎক্ষণিক রেসপন্স, এআই ফলো-আপ, অ্যাপয়েন্টমেন্ট বুকিং, পেমেন্ট এবং রিপিট কাস্টমার তৈরি করা পর্যন্ত।"
            )}
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 pt-4">
            <Link
              href="/services"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-9 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-110 active:scale-95"
            >
              {t("Explore Our Services", "আমাদের সার্ভিসসমূহ দেখুন")}
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900/80 hover:bg-slate-800 text-white font-extrabold px-9 py-4 rounded-2xl border border-cyan-500/30 transition-all duration-300 shadow-xl hover:border-cyan-400 hover:scale-110 active:scale-95 backdrop-blur-md"
            >
              {t("Book a Free Automation Audit", "ফ্রি অটোমেশন অডিট বুক করুন")}
            </Link>
          </div>

          {/* লক্ষ্য সেকশন (Goal Section) */}
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950/90 backdrop-blur-xl border border-cyan-500/40 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto mt-12 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden group transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_70px_rgba(6,182,212,0.3)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 opacity-15 text-cyan-400 text-9xl pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12">
              <FaBullseye />
            </div>
            <div className="inline-flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-3">
              <FaBullseye className="animate-spin duration-1000" /> {t("Our Main Goal", "আমাদের মূল লক্ষ্য")}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {t("Business Growth & Maximum Efficiency", "ব্যবসার প্রবৃদ্ধি ও সর্বোচ্চ কার্যকারিতা নিশ্চিতকরণ")}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <span className="text-cyan-400 font-bold">{t("Less manual work", "কম ম্যানুয়াল কাজ")}</span>, {t("instant", "মুহূর্তের মধ্যে")} <span className="text-cyan-400 font-bold">{t("fast response", "ফাস্ট রেসপন্স")}</span>, {t("assured", "নিশ্চিত")} <span className="text-cyan-400 font-bold">{t("more bookings", "বেশি বুকিং")}</span> {t("and retention through", "এবং স্থায়ী কাস্টমার ধরে রাখতে")} <span className="text-cyan-400 font-bold">{t("repeat customer growth", "রিপিট কাস্টমার গ্রোথ")}</span>—{t("this is our core commitment.", "—এটাই আমাদের মূল অঙ্গীকার।")}
            </p>
          </div>
        </div>

        {/* আমাদের সম্পর্কে সেকশন (About Section) */}
        <div className="bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] group">
          <div className="space-y-4 max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 text-cyan-400 font-bold text-sm">
              <FaInfoCircle className="animate-bounce" /> {t("Know About Us", "আমাদের সম্পর্কে জানুন")}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {t("How is TAE Agency Transforming Your Business?", "টিএই এজেন্সি কীভাবে আপনার ব্যবসাকে বদলে দিচ্ছে?")}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t(
                "Missing a promising lead means a big loss for your business. We streamline all operational friction and make your sales process 100% automated using modern Artificial Intelligence (AI) and smart automation systems. Visit our About page to learn in detail how our proven technical solutions and expert team can make your business hassle-free and more profitable.",
                "প্রতিটি প্রমিজিং লিড হাতছাড়া হওয়া মানেই আপনার ব্যবসায় বড় ক্ষতি। আমরা আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI) এবং স্মার্ট অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার সমস্ত অপারেশনাল জট কমিয়ে সেলস প্রসেসকে করি শতভাগ স্বয়ংক্রিয়। আমাদের প্রমাণিত টেকনিক্যাল সলিউশন এবং এক্সপার্ট টিম কীভাবে আপনার ব্যবসাকে ঝঞ্ঝাটহীন ও অধিক লাভজনক করে তুলতে পারে, তা বিস্তারিত জানতে আমাদের এবাউট পেজটি ভিজিট করুন।"
              )}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-extrabold px-8 py-5 rounded-2xl border border-cyan-500/40 transition-all duration-300 shadow-xl whitespace-nowrap hover:scale-110 active:scale-95 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              <span>{t("More About Us", "আমাদের সম্পর্কে বিস্তারিত")}</span>
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="space-y-10 pt-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t("Our Core Automation Services", "আমাদের মূল অটোমেশন সার্ভিসসমূহ")}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              {t(
                "We have brought 6 powerful modules to automate every department of your business.",
                "আপনার ব্যবসার প্রতিটি বিভাগকে স্বয়ংক্রিয় করতে আমরা নিয়ে এসেছি ৬টি শক্তিশালী মডিউল।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            
            {/* Service 1 */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-2 group">
              <div>
                <div className="text-cyan-400 text-4xl mb-6 p-4 bg-cyan-500/10 w-fit rounded-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  <FaBolt />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("1. Lead & Sales Automation", "১. Lead & Sales Automation")}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t("Capture every lead quickly and easily convert prospective buyers.", "প্রতিটি লিড দ্রুত ক্যাপচার করুন এবং সম্ভাবনাময় ক্রেতাদের সহজে কনভার্ট করুন।")}</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Ads / Website Lead → CRM</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Instant SMS & Email Response</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> AI Sales Assistant Follow-up</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
                Flow: Lead → Response → Follow-up → Booking
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-2 group">
              <div>
                <div className="text-cyan-400 text-4xl mb-6 p-4 bg-cyan-500/10 w-fit rounded-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  <FaRobot />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("2. AI Customer Support", "২. AI Customer Support")}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t("Provide fast and intelligent automated support to customers 24/7.", "গ্রাহকদের দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান অটোমেটেড সাপোর্ট প্রদান করুন।")}</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> AI Chatbot & Phone Support</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> 24/7 FAQ Automation</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Instant Information Assistance</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
                Flow: Message → AI Response → Info Collection
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-2 group">
              <div>
                <div className="text-cyan-400 text-4xl mb-6 p-4 bg-cyan-500/10 w-fit rounded-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  <FaCalendarAlt />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("3. Booking & Operations", "৩. Booking & Operations")}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t("Simplify appointment booking and daily operational activities completely.", "অ্যাপয়েন্টমেন্ট বুকিং এবং দৈনন্দিন অপারেশনাল কার্যক্রম সম্পূর্ণ সহজ করুন।")}</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Online Booking System</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Google Calendar Integration</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Automated Reminders</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
                Flow: Booking → Calendar → Reminder → Service
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-2 group">
              <div>
                <div className="text-cyan-400 text-4xl mb-6 p-4 bg-cyan-500/10 w-fit rounded-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  <FaCreditCard />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("4. Payments & Membership", "৪. Payments & Membership")}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t("Automate invoice creation, payment collection, and membership renewal processes.", "ইনভয়েস তৈরি, পেমেন্ট কালেকশন এবং মেম্বারশিপ রিনিউয়াল প্রক্রিয়া অটোমেট করুন।")}</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Auto Invoice Creation</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Secure Payment Links</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Recurring Payment Management</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
                Flow: Service → Invoice → Payment Link → Paid
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-2 group">
              <div>
                <div className="text-cyan-400 text-4xl mb-6 p-4 bg-cyan-500/10 w-fit rounded-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  <FaStar />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("5. Retention & Reputation", "৫. Retention & Reputation")}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t("Turn one-time buyers into long-term loyal customers and boost reviews.", "একবারের ক্রেতাকে দীর্ঘমেয়াদী অনুগত ক্রেটায় রূপান্তর করুন এবং রিভিউ বাড়ান।")}</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Automated Review Requests</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Special Offer Campaigns</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Customer Reactivation</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
                Flow: Service → Follow-up → Review → Repeat
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-2 group">
              <div>
                <div className="text-cyan-400 text-4xl mb-6 p-4 bg-cyan-500/10 w-fit rounded-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  <FaShareAlt />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("6. Marketing & Social Media", "৬. Marketing & Social Media")}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t("Run your core business while automation keeps your marketing engine running.", "আপনি মূল ব্যবসা পরিচালনা করুন, আর অটোমেশন আপনার মার্কেটিং ইঞ্জিন সচল রাখবে।")}</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Social Media Auto Posting</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> AI Caption & Content Assistance</li>
                  <li className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1"><FaCheckCircle className="text-cyan-400 shrink-0 text-lg" /> Performance Tracking</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
                Flow: Content → AI Caption → Schedule → Post
              </div>
            </div>

          </div>
        </div>

        {/* Complete Customer Journey Section */}
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl transition-all duration-500 hover:border-cyan-500/50">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-4">
            🔄 {t("Complete Customer Journey Automation", "সম্পূর্ণ Customer Journey Automation")}
          </h2>
          <p className="text-center text-slate-400 mb-10 text-base sm:text-lg">{t("See the whole process from first lead to loyal customer.", "প্রথম লিড থেকে শুরু করে লয়েল কাস্টমার পর্যন্ত পুরো প্রক্রিয়াটি দেখুন।")}</p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto text-center">
            {[
              "Ads / Website",
              "Lead Capture",
              "CRM System",
              "Instant Message",
              "AI Follow-up",
              "Booking",
              "Calendar",
              "Reminder",
              "Service Done",
              "Invoice + Payment",
              "Review Request",
              "Repeat Customer"
            ].map((step, index, arr) => (
              <React.Fragment key={index}>
                <div className="bg-slate-800/90 border border-cyan-500/40 text-cyan-300 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <span className="text-cyan-400 font-extrabold text-sm animate-pulse">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-slate-950 border border-cyan-500/50 rounded-3xl p-10 sm:p-16 text-center space-y-8 shadow-[0_0_60px_rgba(6,182,212,0.2)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl filter blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white relative z-10 tracking-tight">
            🚀 {t("Ready to Automate Your Business?", "আপনার ব্যবসাকে অটোমেট করতে প্রস্তুত তো?")}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl relative z-10 leading-relaxed">
            {t(
              "Say goodbye to lost leads and manual hassles. Let AI and automation work 24/7 behind your business.",
              "লিড হারানো এবং ম্যানুয়াল কাজের ঝামেলা চিরতরে দূর করুন। AI এবং অটোমেশনকে আপনার ব্যবসার পেছনে ২৪/৭ কাজ করতে দিন।"
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4 relative z-10">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-9 py-5 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 text-center hover:scale-110 hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] active:scale-95"
            >
              {t("Book a Free Automation Audit", "ফ্রি অটোমেশন অডিট বুক করুন")}
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold px-9 py-5 rounded-2xl border border-slate-700 shadow-xl transition-all duration-300 text-center hover:scale-110 hover:border-cyan-400 active:scale-95 backdrop-blur-md"
            >
              {t("Talk to One of Our Experts", "আমাদের একজন এক্সপার্টের সাথে কথা বলুন")}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}