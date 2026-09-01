"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaRocket, FaBullseye, FaCheckCircle, 
  FaRobot, FaPhoneSlash, FaCalendarAlt, FaCreditCard, FaStar, FaShareAlt 
} from "react-icons/fa";

export default function AboutPage() {
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
            {isBangla ? "TAE.Agency সম্পর্কে" : "About TAE.Agency"}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {isBangla ? (
              <>বিজনেস অটোমেশন ও এআই সলিউশনে আপনার <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">বিশ্বস্ত পার트নার</span></>
            ) : (
              <>Your Trusted Partner in <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Business Automation & AI</span></>
            )}
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {isBangla 
              ? "আমরা সার্ভিস-অরিয়েন্টেড বিজনেস এবং রিয়েল এস্টেটের জন্য ম্যানুয়াল প্রসেস বাদ দিয়ে এআই-চালিত অটোমেশন সিস্টেম তৈরি করি।" 
              : "We build AI-powered automation systems replacing manual processes for service-oriented businesses and real estate."}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {isBangla
              ? "বর্তমানে একটি মিসড কল বা ধীরগতির রেসপন্স মানেই শত শত ডলারের লিড হাতছাড়া হওয়া। TAE.Agency কাজ করছে যেন আপনার কোনো লিড কখনো মিস না হয় এবং ২৪/৭ কাস্টমার এনগেজমেন্ট নিশ্চিত থাকে।"
              : "In today's market, a missed call or slow response means losing hundreds in revenue. TAE.Agency ensures zero missed leads and 24/7 customer engagement."}
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4 shadow-xl">
            <div className="text-cyan-400 text-3xl p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {isBangla ? "আমাদের লক্ষ্য বা মিশন" : "Our Mission"}
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {isBangla 
                ? "ব্যবসাগুলোকে ম্যানুয়াল ফলো-আপের ঝামেলা থেকে মুক্তি দেওয়া। ইনস্ট্যান্ট অটো-টেক্সট ব্যাক, এআই চ্যাটবট এবং স্মার্ট পাইপলাইনের মাধ্যমে প্রতিটি লিডকে দ্রুত কনভার্ট করা।" 
                : "To free businesses from manual follow-up hassles. Converting every lead instantly through automated text-backs, AI chatbots, and smart pipelines."}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4 shadow-xl">
            <div className="text-cyan-400 text-3xl p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {isBangla ? "আমাদের ভিশন" : "Our Vision"}
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {isBangla 
                ? "একটি স্বয়ংক্রিয় ডিজিটাল ইকোসিস্টেম তৈরি করা, যেখানে এআই প্রযুক্তির সাহায্যে ছোট-বড় প্রতিটি লোকাল বিজনেস তাদের সেলস ও গ্রোথ বহুগুণ বাড়িয়ে নিতে পারে।" 
                : "Creating an automated digital ecosystem where every local business can exponentially scale sales and growth using cutting-edge AI technology."}
            </p>
          </div>
        </div>

        {/* What We Automate (6 Core Services matching Service Page) */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/30 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 space-y-8 shadow-xl">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {isBangla ? "আমরা ঠিক কী ধরনের অটোমেশন নিয়ে কাজ করি?" : "What Systems Do We Automate?"}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {isBangla ? "আপনার ব্যবসার সম্পূর্ণ অপারেশন ও সেলস ফানেল অটোমেটেড করতে আমাদের ৬টি কোর সার্ভিস।" : "Our 6 core services to fully automate your business operations and sales funnel."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-3 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaRobot /></div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {isBangla ? "১. এআই রিসিপশন ও ইনস্ট্যান্ট চ্যাটবট" : "1. AI Reception & Instant Chatbot"}
                </h4>
                <p className="text-slate-300 text-sm">
                  {isBangla ? "গ্রাহকদের দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান অটোমেটেড সাপোর্ট প্রদান।" : "Provide fast and smart automated support to customers 24/7."}
                </p>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono pt-3 border-t border-slate-900">
                Flow: Message → AI Response → Booking
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-3 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaPhoneSlash /></div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {isBangla ? "২. মিসড কল অটো-টেক্সট ব্যাক ও লিড রেসকিউ" : "2. Missed Call Text-Back & Lead Rescue"}
                </h4>
                <p className="text-slate-300 text-sm">
                  {isBangla ? "একটি লিডও যেন হাতছাড়া না হয় তা নিশ্চিত করতে তাত্ক্ষণিক টেক্সট ব্যাক।" : "Instant text back to ensure not a single lead is ever lost."}
                </p>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono pt-3 border-t border-slate-900">
                Flow: Missed Call → Instant SMS → Booking
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-3 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCalendarAlt /></div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {isBangla ? "৩. স্মার্ট বুকিং ও ক্যালেন্ডার অটোমেশন" : "3. Smart Booking & Calendar Automation"}
                </h4>
                <p className="text-slate-300 text-sm">
                  {isBangla ? "অ্যাপয়েন্টমেন্ট বুকিং এবং দৈনন্দিন অপারেশনাল কার্যক্রিম সম্পূর্ণ সহজ করুন।" : "Make appointment booking and daily operations effortless."}
                </p>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono pt-3 border-t border-slate-900">
                Flow: Booking → Calendar → Reminder
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-3 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCreditCard /></div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {isBangla ? "৪. পেমেন্ট, ইনভয়েসিং ও ডিপোজিট" : "4. Payment, Invoicing & Deposit"}
                </h4>
                <p className="text-slate-300 text-sm">
                  {isBangla ? "ইনভয়েস তৈরি, পেমেন্ট কালেকশন এবং নো-শো কমানোর সুব্যবস্থা।" : "Easily create invoices, collect payments, and reduce no-shows."}
                </p>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono pt-3 border-t border-slate-900">
                Flow: Service → Invoice → Payment Link
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-3 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaStar /></div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {isBangla ? "৫. অটোমেটিক রিভিউ রিকোয়েস্ট" : "5. Automated Review Request"}
                </h4>
                <p className="text-slate-300 text-sm">
                  {isBangla ? "একবারের ক্রেতাকে অনুগত ক্রেতায় রূপান্তর করুন এবং রিভিউ বাড়ান।" : "Turn one-time buyers into loyal customers and boost reviews."}
                </p>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono pt-3 border-t border-slate-900">
                Flow: Service → Follow-up → Review
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-3 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaShareAlt /></div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {isBangla ? "৬. লোকাল মার্কেটিং ও সোশ্যাল মিডিয়া" : "6. Local Marketing & Social Media"}
                </h4>
                <p className="text-slate-300 text-sm">
                  {isBangla ? "আপনি মূল ব্যবসা পরিচালনা করুন, আর অটোমেশন আপনার মার্কেটিং সচল রাখবে।" : "Run your core business while automation keeps marketing active."}
                </p>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono pt-3 border-t border-slate-900">
                Flow: Content → AI Caption → Schedule
              </div>
            </div>

          </div>
        </div>

        {/* Why TAE.Agency */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {isBangla ? "কেন অন্য এজেন্সি বাদ দিয়ে আমাদের বেছে নেবেন?" : "Why Choose TAE.Agency Over Others?"}
            </h2>
            <p className="text-slate-400 text-sm">
              {isBangla ? "আমাদের এআই-ड्रাইভেন টেকনিক্যাল এক্সপারিটজই আমাদের অনন্য করে তোলে।" : "Our AI-driven technical expertise sets us apart."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <FaCheckCircle className="text-cyan-400 text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{isBangla ? "১০০% কাস্টমাইজড অটোমেশন ফ্লো" : "100% Customized Automation Flow"}</h4>
                <p className="text-slate-300 text-sm">{isBangla ? "আপনার ব্যবসার ধরন (রিয়েল এস্টেট বা সার্ভিস) অনুযায়ী নিখুঁতভাবে অটোমেশন সেটআপ করা হয়।" : "Tailored specifically to your real estate or service-oriented business model."}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <FaCheckCircle className="text-cyan-400 text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{isBangla ? "সময় সাশ্রয় ও সর্বোচ্চ কনভার্শন" : "Time Savings & Maximum Conversion"}</h4>
                <p className="text-slate-300 text-sm">{isBangla ? "ম্যানুয়াল কাজের পেছনের সময় বাঁচিয়ে সরাসরি ক্লোজড ডিলে ফোকাস করতে সাহায্য করি।" : "Eliminate manual tasks so you can focus entirely on closing deals."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isBangla ? "আপনার ব্যবসাকে পুরোপুরি অটোমেটেড করতে চান?" : "Want to Fully Automate Your Business?"}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {isBangla 
              ? "আজই আমাদের সাথে কথা বলুন এবং আপনার বিজনেসের জন্য ফ্রি অটোমেশন অডিট বুক করুন।" 
              : "Talk to us today and book a free automation audit for your business."}
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