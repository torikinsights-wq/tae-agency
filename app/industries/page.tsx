"use client";
import React from "react";
import Link from "next/link";
import { 
  FaHome, FaCar, FaWrench, 
  FaCheckCircle, FaBullseye 
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function IndustriesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t("Targeted Industry Solutions", "টারগেটেড ইন্ডাস্ট্রি সলিউশন")}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            TAE.Agency — <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("Industries We Serve", "আমরা যে ইন্ডাস্ট্রিগুলোতে কাজ করি")}
            </span>
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {t(
              "Customized AI & Automation solutions for Service-Oriented Businesses and Real Estate sectors.",
              "সার্ভিস-অরিয়েন্টেড বিজনেস এবং রিয়েল এস্টেট খাতের জন্য কাস্টমাইজড AI ও অটোমেশন সলিউশন।"
            )}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            {t(
              "Every industry has unique challenges. That's why we automate lead generation, instant follow-ups, and booking processes tailored specifically to your business model.",
              "প্রতিটি ইন্ডাস্ট্রির চ্যালেঞ্জ আলাদা। তাই আমরা আপনার নির্দিষ্ট ব্যবসার ধরণ অনুযায়ী লিড জেনারেশন, ইনস্ট্যান্ট ফলো-আপ এবং বুকিং প্রসেস অটোমেট করি।"
            )}
          </p>
        </div>

        {/* Focus Box */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 text-cyan-400 text-9xl pointer-events-none">
            <FaBullseye />
          </div>
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <FaBullseye /> {t("Our Main Focus", "আমাদের ফোকাস")}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t("Specialized Automation for Service & Real Estate", "সার্ভিস ও রিয়েল এস্টেট বিজনেসের জন্য বিশেষায়িত অটোমেশন")}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t(
                "For businesses requiring regular customer communication, appointment management, and high-value lead closing—our automation systems are ",
                "যেসব ব্যবসায় কাস্টমারদের সাথে নিয়মিত যোগাযোগ রাখতে হয়, অ্যাপয়েন্টমেন্ট ম্যানেজ করতে হয় এবং হাই-ভ্যালু লিড ক্লোজ করতে হয়—সেসব খাতের জন্য আমাদের অটোমেশন সিস্টেম "
              )}
              <span className="text-cyan-400 font-semibold">
                {t("100% effective.", "১০০% কার্যকরী।")}
              </span>
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-4 max-w-xl mx-auto">
              {t("Key Industry Sectors", "প্রধান ইন্ডাস্ট্রি খাতসমূহ")}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {t("We have successfully implemented automation across the following sectors.", "নিচের ইন্ডাস্ট্রিগুলোতে আমরা সফলভাবে অটোমেশন ইমপ্লিমেন্ট করে আসছি।")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Industry 1: Real Estate */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaHome /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("1. Real Estate & Property Firms", "১. রিয়েল এস্টেট ও প্রপার্টি ফার্ম")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Automated property inquiries, prospect filtering, and site visit bookings.", "প্রপার্টি ইনকোয়ারি, প্রোপেক্ট ফিল্টারিং এবং সাইট ভিজিট বুকিং অটোমেশন।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Instant property details & pricing share", "ইনস্ট্যান্ট প্রপার্টি ডিটেইলস ও প্রাইসিং শেয়ার")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Automated site visit scheduling", "অটোমেটেড সাইট ভিজিট শিডিউলিং")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Long-term buyer follow-up sequence", "লং-টার্ম বায়ার ফলো-আপ সিকোয়েন্স")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Inquiry → Details Sent → Site Visit → Closing
              </div>
            </div>

            {/* Industry 2: Auto Detailing & Car Care */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCar /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("2. Auto Detailing & Car Care", "২. অটো ডিটেইলিং ও কার কেয়ার")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Car service booking, missed call recovery, and customer review collection.", "গাড়ির সার্ভিস বুকিং, মিসড কল রিকভারি এবং কাস্টমার রিভিউ কালেকশন।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("24/7 AI Chatbot booking", "২৪/৭ এআই চ্যাটবট দিয়ে বুকিং")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Missed call auto-text back", "মিসড কল অটো-টেক্সট ব্যাক")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Automated reviews & reminders", "অটোমেটিক রিভিউ ও রিমাইন্ডার")}</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Missed Call → Auto Text → Booking → Review
              </div>
            </div>

            {/* Industry 3: Home Services & Contracting */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaWrench /></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("3. Home Services & Renovation", "৩. হোম সার্ভিস ও রেনোভেশন বিজনেস")}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t("Lead management for contractors, renovation, and maintenance services.", "কন্ট্রাক্টর, রেনোভেশন ও মেইনটেন্যান্স সার্ভিসের জন্য লিড ম্যানেজমেন্ট।")}
                </p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Instant quotation request process", "ইনস্ট্যান্ট কোটেশন রিকোয়েস্ট প্রসেস")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Technician job assignment", "টেকনিশিয়ান জব অ্যাসাইনমেন্ট")}</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> {t("Invoice & deposit automation", "ইনভয়েস ও ডিপোজিট অটোমেশন")}</li>
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
              {t("Why Automation is Crucial for These Industries?", "কেন এই ইন্ডাস্ট্রিগুলোর জন্য অটোমেশন জরুরি?")}
            </h3>
            <p className="text-slate-400 text-sm">
              {t("In service & real estate businesses, slow response means lost leads.", "সার্ভিস ও রিয়েল এস্টেট ব্যবসায় দ্রুত রেসপন্স না করলে লিড হাতছাড়া হয়ে যায়।")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-cyan-400 text-xl font-bold">01. {t("Fast Response Time", "দ্রুত রেসপন্স টাইম")}</div>
              <p className="text-slate-300 text-sm">
                {t("AI replies instantly upon customer messaging, securing the lead before competitors do.", "কাস্টমার মেসেজ করার সাথে সাথে এআই ইনস্ট্যান্ট উত্তর দেয়, ফলে কম্পিটিটরদের আগেই লিড কনফার্ম হয়।")}
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-cyan-400 text-xl font-bold">02. {t("Zero Missed Opportunities", "জিরো মিসড অপরচুনিটি")}</div>
              <p className="text-slate-300 text-sm">
                {t("No calls or messages are missed during busy hours or holidays; everything is handled automatically.", "ব্যস্ততার মাঝে বা ছুটির দিনেও কোনো কল বা মেসেজ মিস হয় না; স্বয়ংক্রিয়ভাবে হ্যান্ডেল হয়।")}
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-cyan-400 text-xl font-bold">03. {t("Scalable Growth", "স্কেলেবল গ্রোথ")}</div>
              <p className="text-slate-300 text-sm">
                {t("Easily multiply business scale and client volume without manual follow-up hassles.", "ম্যানুয়াল ফলো-আপের ঝামেলা ছাড়া সহজেই ব্যবসার পরিধি এবং ক্লায়েন্ট সংখ্যা বহুগুণ বাড়ানো যায়।")}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("Want to set up automation for your industry or business?", "আপনার ইন্ডাস্ট্রি বা ব্যবসার জন্য অটোমেশন সেটআপ করতে চান?")}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Talk to us today and book a free strategy session tailored to your business model.",
              "আজই আমাদের সাথে কথা বলুন এবং আপনার ব্যবসার ধরন অনুযায়ী একটি ফ্রি স্ট্র্যাটেজি সেশন বুক করুন।"
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