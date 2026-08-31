"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaBolt, FaRobot, FaCalendarAlt, FaCreditCard, 
  FaStar, FaShareAlt, FaCogs, FaCheckCircle, FaArrowRight, FaBullseye, FaInfoCircle 
} from "react-icons/fa";

export default function ServicesPage() {
  const [isBangla, setIsBangla] = useState(true);

  useEffect(() => {
    const checkLanguage = () => {
      const savedLang = localStorage.getItem("language");
      if (savedLang === "en") {
        setIsBangla(false);
      } else {
        setIsBangla(true);
      }
    };

    checkLanguage();
    const interval = setInterval(checkLanguage, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {isBangla ? "এআই-চালিত বিজনেস অটোমেশন সার্ভিসসমূহ" : "AI-Powered Business Automation Services"}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {isBangla ? (
              <>TAE.Agency — <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">আমাদের অটোমেশন সার্ভিসসমূহ</span></>
            ) : (
              <>TAE.Agency — <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Our Automation Services</span></>
            )}
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {isBangla 
              ? "সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার কাস্টমার জার্নি এবং সেলস গ্রোথকে পরবর্তী স্তরে নিয়ে যান।" 
              : "Take your business customer journey and sales growth to the next level with complete AI & automation systems."}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {isBangla
              ? "আমরা আপনার ব্যবসার পুরো প্রক্রিয়াটি অটোমেট করি—লিড ক্যাপচার থেকে শুরু করে তাৎক্ষণিক রেসপন্স, এআই ফলো-আপ, অ্যাপয়েন্টমেন্ট বুকিং, পেমেন্ট এবং রিপিট কাস্টমার তৈরি করা পর্যন্ত।"
              : "We automate your entire business workflow—from lead capture to instant response, AI follow-ups, appointment booking, payments, and repeat customer creation."}
          </p>
        </div>

        {/* Goal Box (होम পেজের স্টাইলের সাথে সামঞ্জস্যপূর্ণ) */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 text-cyan-400 text-9xl pointer-events-none">
            <FaBullseye />
          </div>
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <FaBullseye /> {isBangla ? "আমাদের মূল লক্ষ্য" : "Our Core Goal"}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isBangla ? "ব্যবসার প্রবৃদ্ধি ও সর্বোচ্চ কার্যকারিতা নিশ্চিতকরণ" : "Ensuring Business Growth & Maximum Efficiency"}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {isBangla ? (
                <>
                  <span className="text-cyan-400 font-semibold">কম ম্যানুয়াল কাজ</span>, মুহূর্তের মধ্যে <span className="text-cyan-400 font-semibold">ফাস্ট রেসপন্স</span>, নিশ্চিত <span className="text-cyan-400 font-semibold">বেশি বুকিং</span> এবং স্থায়ী কাস্টমার ধরে রাখতে <span className="text-cyan-400 font-semibold">রিপিট কাস্টমার গ্রোথ</span>—এটাই আমাদের মূল অঙ্গীকার।
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
              {isBangla ? "আমাদের মূল অটোমেশন সার্ভিসসমূহ" : "Our Core Automation Services"}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {isBangla ? "আপনার ব্যবসার প্রতিটি বিভাগকে স্বয়ংক্রিয় করতে আমরা নিয়ে এসেছি ৬টি শক্তিশালী মডিউল।" : "We bring 6 powerful modules to automate every department of your business."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaRobot /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isBangla ? "১. AI রিসিভশন ও ইনস্ট্যান্ট চ্যাটবট" : "1. AI Reception & Instant Chatbot"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "গ্রাহকদের দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান অটোমেটেড সাপোর্ট প্রদান করুন।" : "Provide fast and smart automated support to customers 24/7."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "Facebook, IG ও WhatsApp-এ ২৪/৭ ইনস্ট্যান্ট রিপ্লাই" : "24/7 Instant Reply on FB, IG & WhatsApp"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "স্মার্ট উত্তর ও লিড কোয়ালিফিকেশন" : "Smart answers & lead qualification"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "সরাসরি অ্যাপয়েন্টমেন্ট বুকিং" : "Direct appointment booking"}</li>
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
                  {isBangla ? "২. মিসড কল অটো-টেক্সট ব্যাক ও লিড রেসকিউ" : "2. Missed Call Auto-Text & Lead Rescue"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "একটি লিডও যেন হাতছাড়া না হয় তা নিশ্চিত করতে তাৎক্ষণিক টেক্সট ব্যাক।" : "Instant text-back to ensure not a single lead is lost."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "মিসড কলে তাৎক্ষণিক SMS/WhatsApp" : "Instant SMS/WhatsApp on missed calls"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "স্বয়ংক্রিয় কনভার্সেশন স্টার্টার" : "Automated conversation starter"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "জিরো লস্ট লিড নিশ্চিতকরণ" : "Ensuring zero lost leads"}</li>
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
                  {isBangla ? "৩. স্মার্ট বুকিং ও ক্যালেন্ডার অটোমেশন" : "3. Smart Booking & Calendar Automation"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "অ্যাপয়েন্টমেন্ট বুকিং এবং দৈনন্দিন অপারেশনাল কার্যক্রম সম্পূর্ণ সহজ করুন।" : "Make appointment bookings and daily operations completely effortless."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "অনলাইন বুকিং ও সিলেকশন" : "Online Booking & Selection"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "Google Calendar ইন্টিগ্রেশন" : "Google Calendar Integration"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "রিমাইন্ডার ও জব অ্যাসাইনমেন্ট" : "Reminders & Job Assignment"}</li>
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
                  {isBangla ? "৪. পেমেন্ট, ইনভয়েসিং ও ডিপোজিট" : "4. Payment, Invoicing & Deposit"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "ইনভয়েস তৈরি, পেমেন্ট কালেকশন এবং নো-শো কমানোর ব্যবস্থা।" : "Invoice creation, payment collection, and reducing no-shows."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "সিকিউর ডিপোজিট লিংক পাঠানো" : "Secure deposit link sending"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "অটোমেটিক ইনভয়েস ও রিমাইন্ডার" : "Automated invoice & reminders"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "অ্যাডভান্সড পেমেন্ট সিস্টেম" : "Advanced payment system"}</li>
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
                  {isBangla ? "৫. অটোমেটিক রিভিউ রিকোয়েস্ট" : "5. Auto Review Requests"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "একবারের ক্রেতাকে অনুগত ক্রেতায় রূপান্তর করুন এবং রিভিউ বাড়ান।" : "Convert one-time buyers into loyal customers and boost reviews."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "স্বয়ংক্রিয় রিভিউ রিকোয়েস্ট পাঠানো" : "Automated review request sending"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "নেগেটিভ ফিডব্যাক প্রাইভেট ফিল্টার" : "Private negative feedback filter"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {isBangla ? "পজিটিভ রিভিউ গ্রোথ" : "Positive review growth"}</li>
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
                  {isBangla ? "৬. লোকাল মার্কেটিং ও সোশ্যাল মিডিয়া" : "6. Local Marketing & Social Media"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "আপনি মূল ব্যবসা পরিচালনা করুন, আর অটোমেশন আপনার মার্কেটিং সচল রাখবে।" : "Manage your core business while automation keeps marketing active."}
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
            {isBangla ? "আমাদের ওয়ার্কফ্লো প্রসেস" : "Our Workflow Process"}
          </h3>
          <p className="text-slate-300 text-lg font-mono">
            Flow: Service $\rightarrow$ Follow-up $\rightarrow$ Review $\rightarrow$ Upsell $\rightarrow$ Repeat
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isBangla ? "আপনার ব্যবসাকে পরবর্তী স্তরে নিতে চান?" : "Want to take your business to the next level?"}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {isBangla 
              ? "লিড হারানো এবং ম্যানুয়াল কাজের ঝামেলা চিরতরে দূর করুন। AI এবং অটোমেশনকে আপনার ব্যবসার পেছনে ২৪/৭ কাজ করতে দিন।" 
              : "Permanently eliminate lost leads and manual work hassles. Let AI and automation work 24/7 behind your business."}
          </p>

          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 text-center"
            >
              {isBangla ? "Free Automation Audit বুক করুন" : "Book Free Automation Audit"}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}