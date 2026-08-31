"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaBuilding, FaHome, FaCar, FaTools, FaWrench, 
  FaCheckCircle, FaBullseye, FaArrowRight, FaShieldAlt, FaKey, FaHandshake 
} from "fa-types"; // Note: Using standard react-icons below

import { 
  FaBuilding as FaBuildingIcon, 
  FaHome as FaHomeIcon, 
  FaCar as FaCarIcon, 
  FaTools as FaToolsIcon, 
  FaWrench as FaWrenchIcon, 
  FaCheckCircle as FaCheckCircleIcon, 
  FaBullseye as FaBullseyeIcon, 
  FaShieldAlt as FaShieldAltIcon, 
  FaKey as FaKeyIcon, 
  FaHandshake as FaHandshakeIcon 
} from "react-icons/fa";

export default function IndustriesPage() {
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
            {isBangla ? "টারগেটেড ইন্ডাস্ট্রি সলিউশন" : "Targeted Industry Solutions"}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {isBangla ? (
              <>TAE.Agency — <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">আমরা যে ইন্ডাস্ট্রিগুলোতে কাজ করি</span></>
            ) : (
              <>TAE.Agency — <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Industries We Serve</span></>
            )}
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {isBangla 
              ? "সার্ভিস-অরিয়েন্টেড বিজনেস এবং রিয়েল এস্টেট খাতের জন্য কাস্টমাইজড AI ও অটোমেশন সলিউশন।" 
              : "Customized AI & Automation solutions for Service-Oriented Businesses and Real Estate sectors."}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {isBangla
              ? "প্রতিটি ইন্ডাস্ট্রির চ্যালেঞ্জ আলাদা। তাই আমরা আপনার নির্দিষ্ট ব্যবসার ধরণ অনুযায়ী লিড জেনারেশন, ইনস্ট্যান্ট ফলো-আপ এবং বুকিং প্রসেস অটোমেট করি।"
              : "Every industry has unique challenges. That's why we automate lead generation, instant follow-ups, and booking processes tailored specifically to your business model."}
          </p>
        </div>

        {/* Focus Box */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 text-cyan-400 text-9xl pointer-events-none">
            <FaBullseyeIcon />
          </div>
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <FaBullseyeIcon /> {isBangla ? "আমাদের ফোকাস" : "Our Main Focus"}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isBangla ? "সার্ভিস ও রিয়েল এস্টেট বিজনেসের জন্য বিশেষায়িত অটোমেশন" : "Specialized Automation for Service & Real Estate"}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {isBangla ? (
                <>
                  যেসব ব্যবসায় কাস্টমারদের সাথে নিয়মিত যোগাযোগ রাখতে হয়, অ্যাপয়েন্টমেন্ট ম্যানেজ করতে হয় এবং হাই-ভ্যালু লিড ক্লোজ করতে হয়—সেসব খাতের জন্য আমাদের অটোমেশন সিস্টেম <span className="text-cyan-400 font-semibold">১০০% কার্যকরী</span>।
                </>
              ) : (
                <>
                  For businesses requiring regular customer communication, appointment management, and high-value lead closing—our automation systems are <span className="text-cyan-400 font-semibold">100% effective</span>.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-4 max-w-xl mx-auto">
              {isBangla ? "প্রধান ইন্ডাস্ট্রি খাতসমূহ" : "Key Industry Sectors"}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {isBangla ? "নিচের ইন্ডাস্ট্রিগুলোতে আমরা সফলভাবে অটোমেশন ইমপ্লিমেন্ট করে আসছি।" : "We have successfully implemented automation across the following sectors."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Industry 1: Real Estate */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaHomeIcon /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isBangla ? "১. রিয়েল এস্টেট ও প্রপার্টি ফার্ম" : "1. Real Estate & Property Firms"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "প্রপার্টি ইনকোয়ারি, প্রোপেক্ট ফিল্টারিং এবং সাইট ভিজিট বুকিং অটোমেশন।" : "Automated property inquiries, prospect filtering, and site visit bookings."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "ইনস্ট্যান্ট প্রপার্টি ডিটেইলস ও প্রাইসিং শেয়ার" : "Instant property details & pricing share"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "অটোমেটেড সাইট ভিজিট শিডিউলিং" : "Automated site visit scheduling"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "লং-টার্ম বায়ার ফলো-আপ সিকোয়েন্স" : "Long-term buyer follow-up sequence"}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Inquiry → Details Sent → Site Visit → Closing
              </div>
            </div>

            {/* Industry 2: Auto Detailing & Car Care */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCarIcon /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isBangla ? "২. অটো ডিটেইলিং ও কার কেয়ার" : "2. Auto Detailing & Car Care"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "গাড়ির সার্ভিস বুকিং, মিসড কল রিকভারি এবং কাস্টমার রিভিউ কালেকশন।" : "Car service booking, missed call recovery, and customer review collection."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "২৪/৭ এআই চ্যাটবট দিয়ে বুকিং" : "24/7 AI Chatbot booking"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "মিসড কল অটো-টেক্সট ব্যাক" : "Missed call auto-text back"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "অটোমেটিক রিভিউ ও রিমাইন্ডার" : "Automated reviews & reminders"}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Missed Call → Auto Text → Booking → Review
              </div>
            </div>

            {/* Industry 3: Home Services & Contracting */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaWrenchIcon /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isBangla ? "৩. হোম সার্ভিস ও রেনোভেশন বিজনেস" : "3. Home Services & Renovation"}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {isBangla ? "কন্ট্রাক্টর, রেনোভেশন ও মেইনটেন্যান্স সার্ভিসের জন্য লিড ম্যানেজমেন্ট।" : "Lead management for contractors, renovation, and maintenance services."}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "ইনস্ট্যান্ট কোটেশন রিকোয়েস্ট প্রসেস" : "Instant quotation request process"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "টেকনিশিয়ান জব অ্যাসাইনমেন্ট" : "Technician job assignment"}</li>
                  <li className="flex items-center gap-2"><FaCheckCircleIcon className="text-cyan-400 shrink-0" /> {isBangla ? "ইনভয়েস ও ডিপোজিট অটোমেশন" : "Invoice & deposit automation"}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Quote → Assignment → Service → Invoice
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Us for These Industries Section */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-cyan-400">
              {isBangla ? "কেন এই ইন্ডাস্ট্রিগুলোর জন্য অটোমেশন জরুরি?" : "Why Automation is Crucial for These Industries?"}
            </h3>
            <p className="text-slate-400 text-sm">
              {isBangla ? "সার্ভিস ও রিয়েল এস্টেট ব্যবসায় দ্রুত রেসপন্স না করলে লিড হাতছাড়া হয়ে যায়।" : "In service & real estate businesses, slow response means lost leads."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-cyan-400 text-xl font-bold">01. {isBangla ? "দ্রুত রেসপন্স টাইম" : "Fast Response Time"}</div>
              <p className="text-slate-300 text-sm">
                {isBangla ? "কাস্টমার মেসেজ করার সাথে সাথে এআই ইনস্ট্যান্ট উত্তর দেয়, ফলে কম্পিটিটরদের আগেই লিড কনফার্ম হয়।" : "AI replies instantly upon customer messaging, securing the lead before competitors do."}
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-cyan-400 text-xl font-bold">02. {isBangla ? "জিরো মিসড অপরচুনিটি" : "Zero Missed Opportunities"}</div>
              <p className="text-slate-300 text-sm">
                {isBangla ? "ব্যস্ততার মাঝে বা ছুটির দিনেও কোনো কল বা মেসেজ মিস হয় না; স্বয়ংক্রিয়ভাবে হ্যান্ডেল হয়।" : "No calls or messages are missed during busy hours or holidays; everything is handled automatically."}
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-cyan-400 text-xl font-bold">03. {isBangla ? "স্কেলেবল গ্রোথ" : "Scalable Growth"}</div>
              <p className="text-slate-300 text-sm">
                {isBangla ? "ম্যানুয়াল ফলো-আপের ঝামেলা ছাড়া সহজেই ব্যবসার পরিধি এবং ক্লায়েন্ট সংখ্যা বহুগুণ বাড়ানো যায়।" : "Easily multiply business scale and client volume without manual follow-up hassles."}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isBangla ? "আপনার ইন্ডাস্ট্রি বা ব্যবসার জন্য অটোমেশন সেটআপ করতে চান?" : "Want to set up automation for your industry or business?"}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {isBangla 
              ? "আজই আমাদের সাথে কথা বলুন এবং আপনার ব্যবসার ধরন অনুযায়ী একটি ফ্রি স্ট্র্যাটেজি সেশন বুক করুন।" 
              : "Talk to us today and book a free strategy session tailored to your business model."}
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