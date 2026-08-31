"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaBolt, FaRobot, FaCalendarAlt, FaCreditCard, 
  FaStar, FaShareAlt, FaSync, FaChartLine, FaCheckCircle, 
  FaPhoneAlt, FaComments, FaCalendarCheck, FaCogs, FaRocket 
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
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {isBangla ? (
              <>TAE.Agency — <span className="text-cyan-400">আমাদের অটোমেশন সার্ভিসসমূহ</span></>
            ) : (
              <>TAE.Agency — <span className="text-cyan-400">Our Automation Services</span></>
            )}
          </h1>
          <p className="text-xl text-cyan-200 font-medium">
            {isBangla 
              ? "সম্পূর্ণ AI ও অটোমেশন সিস্টেম Auto Detailing Business-এর জন্য" 
              : "Complete AI & Automation Systems for Auto Detailing Businesses"}
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            {isBangla
              ? "আমরা আপনার ব্যবসার পুরো Customer Journey অটোমেট করি—Lead Capture থেকে শুরু করে দ্রুত Customer Response, Appointment Booking, Payment, Review এবং Repeat Customer পর্যন্ত।"
              : "আমরা আপনার ব্যবসার পুরো Customer Journey অটোমেট করি—Lead Capture থেকে শুরু করে দ্রুত Customer Response, Appointment Booking, Payment, Review এবং Repeat Customer পর্যন্ত। (Complete end-to-end customer journey automation for your detailing business)"}
          </p>
        </div>

        {/* Goal Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-xl">
          <h3 className="text-xl font-bold text-cyan-400">
            {isBangla ? "আমাদের লক্ষ্য" : "Our Goal"}
          </h3>
          <p className="text-slate-300 text-lg">
            {isBangla 
              ? "কম Manual কাজ। দ্রুত Response। বেশি Booking। বেশি Repeat Customer।" 
              : "Less Manual Work. Fast Response. More Bookings. More Repeat Customers."}
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-white border-b border-slate-800 pb-4">
            {isBangla ? "আমাদের মূল অটোমেশন সার্ভিসসমূহ" : "Our Core Automation Services"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 space-y-4 shadow-lg">
              <div className="text-cyan-400 text-3xl mb-3"><FaRobot /></div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isBangla ? "১. AI রিসিভশন ও ইনস্ট্যান্ট চ্যাটবট" : "1. AI Reception & Instant Chatbot"}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• {isBangla ? "Facebook, Instagram ও WhatsApp-এ ২৪/৭ ইনস্ট্যান্ট রিপ্লাই" : "24/7 Instant Reply on FB, IG & WhatsApp"}</li>
                <li>• {isBangla ? "গাড়ির মডেল, সার্ভিস ও প্রাইসিং নিয়ে কাস্টমারের প্রশ্নের স্মার্ট উত্তর" : "Smart answers about car models, services & pricing"}</li>
                <li>• {isBangla ? "লিড কোয়ালিফিকেশন ও সরাসরি অ্যাপয়েন্টমেন্ট বুকিং" : "Lead qualification & direct appointment booking"}</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 space-y-4 shadow-lg">
              <div className="text-cyan-400 text-3xl mb-3"><FaCogs /></div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isBangla ? "২. মিসড কল অটো-টেক্সট ব্যাক ও লিড রেসকিউ" : "2. Missed Call Auto-Text & Lead Rescue"}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• {isBangla ? "কাস্টমার ফোন করলে রিসিভ না হলে তাৎক্ষণিক SMS/WhatsApp পাঠানো" : "Instant SMS/WhatsApp if a customer call is missed"}</li>
                <li>• {isBangla ? "'কোন সার্ভিস চাচ্ছেন?' জিজ্ঞেস করে স্বয়ংক্রিয় কনভার্সেশন শুরু" : "Automated conversation starter asking service needs"}</li>
                <li>• {isBangla ? "একটি লিডও যেন হাতছাড়া না হয় তা নিশ্চিত করা" : "Ensuring zero lost leads"}</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 space-y-4 shadow-lg">
              <div className="text-cyan-400 text-3xl mb-3"><FaCalendarAlt /></div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isBangla ? "৩. স্মার্ট বুকিং ও ক্যালেন্ডার অটোমেশন" : "3. Smart Booking & Calendar Automation"}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• {isBangla ? "অনলাইন বুকিং ও ভেহিক্যাল সিলেকশন" : "Online Booking & Vehicle Selection"}</li>
                <li>• {isBangla ? "Google Calendar ইন্টিগ্রেশন" : "Google Calendar Integration"}</li>
                <li>• {isBangla ? "রিমাইন্ডার ও টেকনিশিয়ান জব অ্যাসাইনমেন্ট" : "Reminders & Technician Job Assignment"}</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 space-y-4 shadow-lg">
              <div className="text-cyan-400 text-3xl mb-3"><FaCreditCard /></div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isBangla ? "৪. পেমেন্ট, ইনভয়েসিং ও ডিপোজিট অটোমেশন" : "4. Payment, Invoicing & Deposit Automation"}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• {isBangla ? "বুকিং কনফার্ম করার জন্য সিকিউর ডিপোজিট লিংক পাঠানো" : "Secure deposit link for booking confirmation"}</li>
                <li>• {isBangla ? "অটোমেটিক ইনভয়েস জেনারেট ও পেমেন্ট রিমাইন্ডার" : "Automated invoice generation & payment reminders"}</li>
                <li>• {isBangla ? "নো-শো (No-show) কমানোর জন্য অ্যাডভান্সড পেমেন্ট সিস্টেম" : "Advanced payment system to reduce no-shows"}</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 space-y-4 shadow-lg">
              <div className="text-cyan-400 text-3xl mb-3"><FaStar /></div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isBangla ? "৫. অটোমেটিক রিভিউ রিকোয়েস্ট ও রেপুটেশন গ্রোথ" : "5. Auto Review Requests & Reputation Growth"}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• {isBangla ? "গাড়ি ডেলিভারির পর স্বয়ংক্রিয়ভাবে Google/Facebook রিভিউ চাওয়া" : "Automated Google/Facebook review requests after delivery"}</li>
                <li>• {isBangla ? "নেগেটিভ ফিডব্যাক প্রাইভেটে ফিল্টার করে পজিটিভ রিভিউ অনলাইনে বাড়ানো" : "Filtering negative feedback privately to boost positive reviews"}</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 space-y-4 shadow-lg">
              <div className="text-cyan-400 text-3xl mb-3"><FaShareAlt /></div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isBangla ? "৬. লোকাল মার্কেটিং ও সোশ্যাল মিডিয়া অটোমেশন" : "6. Local Marketing & Social Media Automation"}
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• {isBangla ? "Google Ads Lead Automation" : "Google Ads Lead Automation"}</li>
                <li>• {isBangla ? "Social Media Auto Posting (FB, Insta)" : "Social Media Auto Posting (FB, Insta)"}</li>
                <li>• {isBangla ? "AI Caption Generation & Content Assistance" : "AI Caption Generation & Content Assistance"}</li>
                <li>• {isBangla ? "Content Calendar & Performance Tracking" : "Content Calendar & Performance Tracking"}</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Workflow Section */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-cyan-400">
            {isBangla ? "আমাদের ওয়ার্কফ্লো প্রসেস" : "Our Workflow Process"}
          </h3>
          <p className="text-slate-300 text-lg">
            Flow: Service $\rightarrow$ Follow-up $\rightarrow$ Review $\rightarrow$ Upsell $\rightarrow$ Repeat
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8 border-t border-slate-800 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            {isBangla ? "আপনার অটো ডিটেইলিং ব্যবসাকে পরবর্তী স্তরে নিতে চান?" : "Want to take your Auto Detailing business to the next level?"}
          </h3>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all shadow-lg"
            >
              {isBangla ? "Free Automation Audit বুক করুন" : "Book Free Automation Audit"}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}