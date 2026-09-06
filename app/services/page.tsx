"use client";
import React from "react";
import Link from "next/link";
import { 
  FaRobot, FaCalendarAlt, FaCreditCard, 
  FaStar, FaShareAlt, FaCogs, FaCheckCircle, FaBullseye 
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t("AI-Powered Business Automation Services", "এআই-চালিত বিজনেস অটোমেশন সার্ভিসসমূহ")}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            TAE.Agency — <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("Our Automation Services", "আমাদের অটোমেশন সার্ভিসসমূহ")}
            </span>
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {t(
              "Take your business customer journey and sales growth to the next level with complete AI & automation systems.",
              "সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার কাস্টমার জার্নি এবং সেলস গ্রোথকে পরবর্তী স্তরে নিয়ে যান।"
            )}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {t(
              "We automate your entire business workflow—from lead capture to instant response, AI follow-ups, appointment booking, payments, and repeat customer creation.",
              "আমরা আপনার ব্যবসার পুরো প্রক্রিয়াটি অটোমেট করি—লিড ক্যাপচার থেকে শুরু করে তাৎক্ষণিক রেসপন্স, এআই ফলো-আপ, অ্যাপয়েন্টমেন্ট বুকিং, পেমেন্ট এবং রিপিট কাস্টমার তৈরি করা পর্যন্ত।"
            )}
          </p>
        </div>

        {/* Goal Box */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 text-cyan-400 text-9xl pointer-events-none">
            <FaBullseye />
          </div>
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <FaBullseye /> {t("Our Core Goal", "আমাদের মূল লক্ষ্য")}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t("Ensuring Business Growth & Maximum Efficiency", "ব্যবসার প্রবৃদ্ধি ও সর্বোচ্চ কার্যকারিতা নিশ্চিতকরণ")}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {isBangla ? (
                <>
                  <span className="text-cyan-400 font-semibold">কম ম্যানুয়াল কাজ</span>, মুহূর্তের মধ্যে <span className="text-cyan-400 font-semibold">ফাস্ট রেসপন্স</span>, নিশ্চিত <span className="text-cyan-400 font-semibold">বেশি বুকিং</span> এবং স্থায়ী কাস্টমার ধরে রাখতে <span className="text-cyan-400 font-semibold">রিপিট কাস্টমার গ্রোথ</span>—এটাই আমাদের মূল অঙ্গীকার।
                </>
              ) : (
                <>
                  <span className="text-cyan-400 font-semibold">Less manual work</span>, instant <span className="text-cyan-400 font-semibold">fast response</span>, guaranteed <span className="text-cyan-400 font-semibold">more bookings</span>, and <span className="text-cyan-400 font-semibold">repeat customer growth</span>—this is our core commitment.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-4 max-w-xl mx-auto">
              {t("Our Core Automation Services", "আমাদের মূল অটোমেশন সার্ভিসসমূহ")}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {t("We bring 6 powerful modules to automate every department of your business.", "আপনার ব্যবসার প্রতিটি বিভাগকে স্বয়ংক্রিয় করতে আমরা নিয়ে এসেছি ৬টি শক্তিশালী মডিউল।")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaRobot /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("1. AI Reception & Instant Chatbot", "১. AI রিসিভশন ও ইনস্ট্যান্ট চ্যাটবট")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Provide fast and smart automated support to customers 24/7.", "গ্রাহকদের দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান অটোমেটেড সাপোর্ট প্রদান করুন।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("24/7 Instant Reply on FB, IG & WhatsApp", "Facebook, IG ও WhatsApp-এ ২৪/৭ ইনস্ট্যান্ট রিপ্লাই")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Smart answers & lead qualification", "স্মার্ট উত্তর ও লিড কোয়ালিফিকেশন")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Direct appointment booking", "সরাসরি অ্যাপয়েন্টমেন্ট বুকিং")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Message → AI Response → Info Collection → Booking
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCogs /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("2. Missed Call Auto-Text & Lead Rescue", "২. মিসড কল অটো-টেক্সট ব্যাক ও লিড রেসকিউ")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Instant text-back to ensure not a single lead is lost.", "একটি লিডও যেন হাতছাড়া না হয় তা নিশ্চিত করতে তাৎক্ষণিক টেক্সট ব্যাক।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Instant SMS/WhatsApp on missed calls", "মিসড কলে তাৎক্ষণিক SMS/WhatsApp")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Automated conversation starter", "স্বয়ংক্রিয় কনভার্সেশন স্টার্টার")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Ensuring zero lost leads", "জিরো লস্ট লিড নিশ্চিতকরণ")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Missed Call → Instant SMS → Chat Start → Booking
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCalendarAlt /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("3. Smart Booking & Calendar Automation", "৩. স্মার্ট বুকিং ও ক্যালেন্ডার অটোমেশন")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Make appointment bookings and daily operations completely effortless.", "অ্যাপয়েন্টমেন্ট বুকিং এবং দৈনন্দিন অপারেশনাল কার্যক্রম সম্পূর্ণ সহজ করুন।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Online Booking & Selection", "অনলাইন বুকিং ও সিলেকশন")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Google Calendar Integration", "Google Calendar ইন্টিগ্রেশন")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Reminders & Job Assignment", "রিমাইন্ডার ও জব অ্যাসাইনমেন্ট")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Booking → Calendar → Reminder → Service
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCreditCard /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("4. Payment, Invoicing & Deposit", "৪. পেমেন্ট, ইনভয়েসিং ও ডিপোজিট")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Invoice creation, payment collection, and reducing no-shows.", "ইনভয়েস তৈরি, পেমেন্ট কালেকশন এবং নো-শো কমানোর ব্যবস্থা।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Secure deposit link sending", "সিকিউর ডিপোজিট লিংক পাঠানো")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Automated invoice & reminders", "অটোমেটিক ইনভয়েস ও রিমাইন্ডার")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Advanced payment system", "অ্যাডভান্সড পেমেন্ট সিস্টেম")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Service → Invoice → Payment Link → Paid
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaStar /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("5. Auto Review Requests", "৫. অটোমেটিক রিভিউ রিকোয়েস্ট")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Convert one-time buyers into loyal customers and boost reviews.", "একবারের ক্রেতাকে অনুগত ক্রেতায় রূপান্তর করুন এবং রিভিউ বাড়ান।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Automated review request sending", "স্বয়ংক্রিয় রিভিউ রিকোয়েস্ট পাঠানো")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Private negative feedback filter", "নেগেটিভ ফিডব্যাক প্রাইভেট ফিল্টার")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Positive review growth", "পজিটিভ রিভিউ গ্রোথ")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Service → Follow-up → Review → Repeat
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaShareAlt /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("6. Local Marketing & Social Media", "৬. লোকাল মার্কেটিং ও সোশ্যাল মিডিয়া")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Manage your core business while automation keeps marketing active.", "আপনি মূল ব্যবসা পরিচালনা করুন, আর অটোমেশন আপনার মার্কেটিং সচল রাখবে।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Google Ads Lead Automation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Social Media Auto Posting (FB, Insta)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Caption & Content Assistance</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Content → AI Caption → Schedule → Post
              </div>
            </div>

          </div>
        </div>

        {/* Workflow Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-cyan-400">
            {t("Our Workflow Process", "আমাদের ওয়ার্কফ্লো প্রসেস")}
          </h3>
          <p className="text-slate-300 text-lg font-mono">
            Flow: Service &rarr; Follow-up &rarr; Review &rarr; Upsell &rarr; Repeat
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("Want to take your business to the next level?", "আপনার ব্যবসাকে পরবর্তী স্তরে নিতে চান?")}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Permanently eliminate lost leads and manual work hassles. Let AI and automation work 24/7 behind your business.",
              "লিড হারানো এবং ম্যানুয়াল কাজের ঝামেলা চিরতরে দূর করুন। AI এবং অটোমেশনকে আপনার ব্যবসার পেছনে ২৪/৭ কাজ করতে দিন।"
            )}
          </p>

          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 text-center"
            >
              {t("Book Free Automation Audit", "Free Automation Audit বুক করুন")}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}