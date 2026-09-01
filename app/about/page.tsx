"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaRocket, FaBullseye, FaCheckCircle, 
  FaRobot, FaPhoneSlash, FaCalendarAlt, FaCreditCard, FaStar, FaShareAlt, FaUserTie, FaUsers
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
              <>বিজনেস অটোমেশন ও এআই সলিউশনে আপনার <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">বিশ্বস্ত পার্টনার</span></>
            ) : (
              <>Your Trusted Partner in <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Business Automation & AI</span></>
            )}
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {isBangla 
              ? "আমরা সার্ভিস-অরিয়েন্টেড বিজনেস এবং রিয়েল এস্টেটের জন্য ম্যানুয়াল প্রসেস বাদ দিয়ে এআই-চালিত অটোমেশন সিস্টেম তৈরি করি।" 
              : "We build AI-powered automation systems replacing manual processes for service-oriented businesses and real estate."}
          </p>
        </div>

        {/* --- ABOUT ME SECTION --- */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* My Photo / Avatar Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl bg-slate-950 flex items-center justify-center">
                {/* যদি public ফোল্ডারে my-photo.jpg নামে ছবি রাখেন তবে নিচের কমেন্টটি সরাতে পারেন */}
                {/* <Image src="/my-photo.jpg" alt="Torikul Islam" fill className="object-cover" /> */}
                <div className="text-center p-4">
                  <FaUserTie className="text-cyan-400 text-6xl mx-auto mb-2" />
                  <span className="text-xs text-slate-400">{isBangla ? "আপনার ছবি এখানে থাকবে" : "Your Photo Here"}</span>
                </div>
              </div>
            </div>

            {/* My Bio / Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                <FaUserTie /> {isBangla ? "আমার সম্পর্কে (About Me)" : "About Me"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {isBangla ? "তরিকুল ইসলাম — ফাউন্ডার ও অটোমেশন এক্সপার্ট" : "Torikul Islam — Founder & Automation Expert"}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {isBangla 
                  ? "আসসালামু আলাইকুম! আমি Torik Automation Engineering (TAE.Agency)-এর প্রতিষ্ঠাতা। দীর্ঘ সময় ধরে আমি লোকাল ব্যবসা এবং সার্ভিস প্রোভাইডারদের জন্য এআই ও আধুনিক টেকনোলজি ব্যবহার করে সেলস ফানেল এবং লিড জেনারেশন অটোমেট করে আসছি।" 
                  : "Assalamu Alaikum! I am the founder of Torik Automation Engineering (TAE.Agency). I have been helping local businesses and service providers automate sales funnels and lead generation using AI and modern technology."}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isBangla
                  ? "আমার লক্ষ্য হলো টেকনিক্যাল জটিলতা দূর করে প্রতিটি ব্যবসায়ীর হাতে এমন একটি সিস্টেম তুলে দেওয়া, যা তাদের অনুপস্থিতিতেও ২৪ ঘণ্টা কাস্টমার হ্যান্ডেল করতে পারে।"
                  : "My goal is to eliminate technical complexities and provide every business owner with a system that can handle customers 24/7 even in their absence."}
              </p>
            </div>

          </div>
        </div>

        {/* --- ABOUT OUR TEAM SECTION --- */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <FaUsers /> {isBangla ? "আমাদের টিম" : "Our Team"}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {isBangla ? "যে এক্সপার্ট টিম আপনার প্রজেক্ট নিয়ে কাজ করে" : "The Expert Team Behind Your Project"}
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              {isBangla ? "আমাদের ডেডিকেটেড টিম মেম্বারগণ আপনার অটোমেশন ও মার্কেটিং সফল করতে সবসময় প্রস্তুত।" : "Our dedicated team members are always ready to make your automation and marketing successful."}
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Team Member 1 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl flex items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 shrink-0 flex items-center justify-center">
                <FaUserTie className="text-cyan-400 text-3xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Md. Team Member</h4>
                <p className="text-cyan-400 text-xs font-semibold">AI Workflow Developer</p>
                <p className="text-slate-400 text-xs leading-relaxed pt-1">
                  {isBangla ? "চ্যাটবট এবং এআই ইন্টিগ্রেশন ফ্লো ডিজাইন ও সেটআপে পারদর্শী।" : "Expert in chatbot and AI integration flow design & setup."}
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl flex items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 shrink-0 flex items-center justify-center">
                <FaUserTie className="text-cyan-400 text-3xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Marketing Specialist</h4>
                <p className="text-cyan-400 text-xs font-semibold">Google Ads & Lead Gen Expert</p>
                <p className="text-slate-400 text-xs leading-relaxed pt-1">
                  {isBangla ? "টারগেটেড পিপিসি ক্যাম্পেইন ও ক্লায়েন্ট গ্রোথ স্ট্র্যাটেজি নিয়ে কাজ করেন।" : "Handles targeted PPC campaigns and client growth strategies."}
                </p>
              </div>
            </div>

          </div>
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

        {/* What We Automate (6 Core Services) */}
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