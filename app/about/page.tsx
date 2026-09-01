"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaRocket, FaBullseye, FaHandshake, FaCheckCircle, 
  FaLightbulb, FaChartLine, FaShieldAlt, FaUsers 
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
            {isBangla ? "আমাদের সম্পর্কে জানুন" : "About TAE.Agency"}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {isBangla ? (
              <>ব্যবসার বৃদ্ধিতে আমরা আপনার <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">বিশ্বস্ত অংশীদার</span></>
            ) : (
              <>Your Trusted Partner in <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Business Growth</span></>
            )}
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            {isBangla 
              ? "TAE.Agency হলো একটি আধুনিক ডিজিটাল মার্কেটিং ও এআই অটোমেশন এজেন্সি, যা স্থানীয় ব্যবসা ও সার্ভিস প্রোভাইডারদের লিড জেনারেশন এবং সেলস বৃদ্ধিতে সহায়তা করে।" 
              : "TAE.Agency is a modern digital marketing and AI automation agency helping local businesses and service providers scale lead generation and sales."}
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4 shadow-xl">
            <div className="text-cyan-400 text-3xl p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {isBangla ? "আমাদের মিশন" : "Our Mission"}
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {isBangla 
                ? "অটোমেশন ও ডেটা-ড্রাইভেন মার্কেটিং স্ট্র্যাটেজির মাধ্যমে ব্যবসাগুলোর ম্যানুয়াল কাজের ঝামেলা দূর করা এবং প্রতিটি লিডকে সঠিকভাবে কনভার্ট করে সর্বোচ্চ রিটার্ন (ROI) নিশ্চিত করা।" 
                : "To eliminate manual hurdles for businesses through automation and data-driven marketing strategies, ensuring maximum ROI by effectively converting every lead."}
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
                ? "ভবিষ্যতের ব্যবসাগুলো যেন প্রযুক্তির ছোঁয়ায় আরও স্মার্ট ও দক্ষ হয়ে উঠতে পারে—সেই লক্ষ্য নিয়ে এআই চ্যাটবট, ইনস্ট্যান্ট ফলো-আপ এবং গুগল অ্যাডসের সেরা সলিউশন পৌঁছে দেওয়া।" 
                : "To empower future businesses to be smarter and more efficient through cutting-edge AI chatbots, instant follow-ups, and top-tier Google Ads solutions."}
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/30 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 space-y-8 shadow-xl">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {isBangla ? "আমরা যেভাবে সাহায্য করি" : "How We Help Your Business"}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {isBangla ? "আপনার ব্যবসার গ্রোথ নিশ্চিত করতে আমাদের রয়েছে বিশেষায়িত সার্ভিসসমূহ।" : "Specialized services to ensure your business growth."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="text-cyan-400 text-2xl"><FaChartLine /></div>
              <h4 className="text-lg font-bold text-white">{isBangla ? "গুগল অ্যাডস ম্যানেজমেন্ট" : "Google Ads Management"}</h4>
              <p className="text-slate-300 text-sm">
                {isBangla ? "টারগেটেড কাস্টমারদের কাছে পৌঁছাতে নিখুঁত পিপিসি ক্যাম্পেইন পরিচালনা।" : "Running precise PPC campaigns to reach target customers effectively."}
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="text-cyan-400 text-2xl"><FaLightbulb /></div>
              <h4 className="text-lg font-bold text-white">{isBangla ? "লিড জেনারেশন ও অটোমেশন" : "Lead Gen & Automation"}</h4>
              <p className="text-slate-300 text-sm">
                {isBangla ? "ইনস্ট্যান্ট ফলো-আপ এবং মিসড কল রিকভারির মাধ্যমে একটি লিডও হাতছাড়া হতে না দেওয়া।" : "Ensuring zero missed leads through instant follow-ups and missed call recovery."}
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="text-cyan-400 text-2xl"><FaUsers /></div>
              <h4 className="text-lg font-bold text-white">{isBangla ? "इंडस्ट्री কাস্টমাইজড সলিউশন" : "Industry Solutions"}</h4>
              <p className="text-slate-300 text-sm">
                {isBangla ? "রিয়েল এস্টেট, অটো ডিটেইলিং ও হোম সার্ভিসের জন্য বিশেষায়িত ডিজিটাল স্ট্র্যাটেজি।" : "Tailored digital strategies for real estate, auto detailing, and home services."}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {isBangla ? "কেন TAE.Agency বেছে নেবেন?" : "Why Choose TAE.Agency?"}
            </h2>
            <p className="text-slate-400 text-sm">
              {isBangla ? "আমাদের কাজের মান এবং প্রফেশনালিজমই আমাদের আলাদা করে তোলে।" : "What sets us apart in the digital landscape."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <FaCheckCircle className="text-cyan-400 text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{isBangla ? "রেজাল্ট-অরিয়েন্টেড অ্যাপ্রোচ" : "Result-Oriented Approach"}</h4>
                <p className="text-slate-300 text-sm">{isBangla ? "আমরা শুধু ট্রাফিক আনি না, বরং প্রকৃত সেলস ও ক্লায়েন্ট কনভারশনে ফোকাস করি।" : "We focus on actual sales and client conversion, not just traffic."}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <FaCheckCircle className="text-cyan-400 text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{isBangla ? "আধুনিক এআই প্রযুক্তি" : "Modern AI Technology"}</h4>
                <p className="text-slate-300 text-sm">{isBangla ? "সর্বাধুনিক অটোমেশন টুলস ও এআই ব্যবহার করে আপনার ব্যবসাকে সর্বদা এক ধাপ এগিয়ে রাখি।" : "Keeping your business ahead using cutting-edge automation tools and AI."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isBangla ? "আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত?" : "Ready to take your business to the next level?"}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {isBangla 
              ? "আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রজেক্ট নিয়ে আলোচনা করুন।" 
              : "Contact us today and let's discuss your project."}
          </p>

          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 text-center"
            >
              {isBangla ? "যোগাযোগ করুন" : "Get in Touch"}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}