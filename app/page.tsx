"use client";
import React from "react";
import Link from "next/link";
import { 
  FaBolt, FaRobot, FaCalendarAlt, FaCreditCard, 
  FaStar, FaShareAlt, FaArrowRight, FaCheckCircle 
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            এআই-চালিত বিজনেস অটোমেশন এজেন্সি
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            আপনার ব্যবসা অটোমেট করুন, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              সময় বাঁচান ও আয় দ্বিগুণ করুন
            </span>
          </h1>

          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার কাস্টমার জার্নি এবং সেলস গ্রোথকে পরবর্তী স্তরে নিয়ে যান।
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            আমরা আপনার ব্যবসার পুরো প্রক্রিয়াটি অটোমেট করি—লিড ক্যাপচার থেকে শুরু করে তাৎক্ষণিক রেসপন্স, এআই ফলো-আপ, অ্যাপয়েন্টমেন্ট বুকিং, পেমেন্ট এবং রিপিট কাস্টমার তৈরি করা পর্যন্ত।
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              আমাদের সার্ভিসসমূহ দেখুন
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl border border-slate-700 transition-all shadow-lg"
            >
              ফ্রি অটোমেশন অডিট বুক করুন
            </Link>
          </div>
        </div>

        {/* About Agency Section with Link to /about */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl text-center md:text-left">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              আমাদের এজেন্সি সম্পর্কে
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ব্যবসার প্রবৃদ্ধিকে ত্বরান্বিত করতে আমরা দিচ্ছি স্মার্ট এআই সলিউশন
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              আমরা আধুনিক প্রযুক্তির সাহায্যে আপনার ব্যবসার ম্যানুয়াল কাজগুলো কমিয়ে শতভাগ নির্ভুল অটোমেটেড সিস্টেম তৈরি করি। আমাদের লক্ষ্য হলো আপনাকে কম পরিশ্রমে বেশি কাস্টমার এবং সর্বোচ্চ প্রফিট এনে দেওয়া। আমাদের ভিশন এবং এক্সপার্ট টিম সম্পর্কে বিস্তারিত জানতে আমাদের এবাউট পেজটি ভিজিট করুন।
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold px-6 py-4 rounded-xl border border-cyan-500/40 transition-all shadow-lg"
            >
              <span>আমাদের সম্পর্কে জানুন</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>

        {/* Core Services Grid - Ensuring all 6 services are clearly visible with clean cards */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">
              আমাদের মূল অটোমেশন সার্ভিসসমূহ
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              আপনার ব্যবসার প্রতিটি বিভাগকে স্বয়ংক্রিয় করতে আমরা নিয়ে এসেছি ৬টি শক্তিশালী মডিউল।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaBolt /></div>
                <h3 className="text-xl font-bold text-white mb-2">১. Lead & Sales Automation</h3>
                <p className="text-slate-400 text-sm mb-4">প্রতিটি লিড দ্রুত ক্যাপচার করুন এবং সম্ভাবনাময় ক্রেতাদের সহজে কনভার্ট করুন।</p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Ads / Website Lead → CRM</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Instant SMS & Email Response</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Sales Assistant Follow-up</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Lead → Response → Follow-up → Booking
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaRobot /></div>
                <h3 className="text-xl font-bold text-white mb-2">২. AI Customer Support</h3>
                <p className="text-slate-400 text-sm mb-4">গ্রাহকদের দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান অটোমেটেড সাপোর্ট প্রদান করুন।</p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Chatbot & Phone Support</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> 24/7 FAQ Automation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Instant Information Assistance</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Message → AI Response → Info Collection
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-xl">
              <div>
                <div className="text-cyan-400 text-3xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20"><FaCalendarAlt /></div>
                <h3 className="text-xl font-bold text-white mb-2">৩. Booking & Operations</h3>
                <p className="text-slate-400 text-sm mb-4">অ্যাপয়েন্টমেন্ট বুকিং এবং দৈনন্দিন অপারেশনাল কার্যক্রম সম্পূর্ণ সহজ করুন।</p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Online Booking System</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Google Calendar Integration</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Automated Reminders</li>
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
                <h3 className="text-xl font-bold text-white mb-2">৪. Payments & Membership</h3>
                <p className="text-slate-400 text-sm mb-4">ইনভয়েস তৈরি, পেমেন্ট কালেকশন এবং মেম্বারশিপ রিনিউয়াল প্রক্রিয়া অটোমেট করুন।</p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Auto Invoice Creation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Secure Payment Links</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Recurring Payment Management</li>
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
                <h3 className="text-xl font-bold text-white mb-2">৫. Retention & Reputation</h3>
                <p className="text-slate-400 text-sm mb-4">একবারের ক্রেতাকে দীর্ঘমেয়াদী অনুগত ক্রেতায় রূপান্তর করুন এবং রিভিউ বাড়ান।</p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Automated Review Requests</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Special Offer Campaigns</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Customer Reactivation</li>
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
                <h3 className="text-xl font-bold text-white mb-2">৬. Marketing & Social Media</h3>
                <p className="text-slate-400 text-sm mb-4">আপনি মূল ব্যবসা পরিচালনা করুন, আর অটোমেশন আপনার মার্কেটিং ইঞ্জিন সচল রাখবে।</p>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Social Media Auto Posting</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Caption & Content Assistance</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Performance Tracking</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                Flow: Content → AI Caption → Schedule → Post
              </div>
            </div>

          </div>
        </div>

        {/* Complete Customer Journey Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-3">
            🔄 সম্পূর্ণ Customer Journey Automation
          </h2>
          <p className="text-center text-slate-400 mb-8 text-sm sm:text-base">প্রথম লিড থেকে শুরু করে লয়েল কাস্টমার পর্যন্ত পুরো প্রক্রিয়াটি দেখুন।</p>
          
          <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-4xl mx-auto text-center">
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
                <div className="bg-slate-800 border border-cyan-500/30 text-cyan-300 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium shadow">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <span className="text-cyan-400 font-bold text-xs">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            🚀 আপনার ব্যবসাকে অটোমেট করতে প্রস্তুত তো?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            লিড হারানো এবং ম্যানুয়াল কাজের ঝামেলা চিরতরে দূর করুন। AI এবং অটোমেশনকে আপনার ব্যবসার পেছনে ২৪/৭ কাজ করতে দিন।
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              href="/contact" 
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300 text-center"
            >
              ফ্রি অটোমেশন অডিট বুক করুন
            </Link>
            <Link 
              href="/contact" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 shadow-lg transition duration-300 text-center"
            >
              আমাদের একজন এক্সপার্টের সাথে কথা বলুন
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}