"use client";
import React from "react";
import Link from "next/link";
import { 
  FaBolt, FaRobot, FaCalendarAlt, FaCreditCard, 
  FaStar, FaShareAlt, FaInfoCircle 
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 pt-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            TAE.Agency — <span className="text-cyan-400">অটো ডিটেইলিং ব্যবসার জন্য AI ও অটোমেশন</span>
          </h1>
          <p className="text-xl text-cyan-200 font-medium max-w-3xl mx-auto">
            সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার অটো ডিটেইলিং ব্যবসার গ্রোথ দ্বিগুণ করুন।
          </p>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            আমরা আপনার ব্যবসার পুরো Customer Journey অটোমেট করি—Lead Capture থেকে শুরু করে দ্রুত Customer Response, Appointment Booking, Payment, Review এবং Repeat Customer পর্যন্ত।
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all shadow-lg"
            >
              আমাদের সার্ভিসসমূহ দেখুন
            </Link>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-xl border border-slate-700 transition-all shadow-lg"
            >
              Free Automation Audit বুক করুন
            </Link>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 max-w-4xl mx-auto mt-8 shadow-xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">আমাদের মূল লক্ষ্য</h3>
            <p className="text-slate-300 text-lg">
              কম Manual কাজ। দ্রুত Response। বেশি Booking। বেশি Repeat Customer।
            </p>
          </div>
        </div>

        {/* About Us Section with Button Linking to /about */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm">
              <FaInfoCircle /> আমাদের সম্পর্কে জানুন
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              TAE.Agency কীভাবে আপনার অটো ডিটেইলিং ব্যবসাকে বদলে দিচ্ছে?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              আমরা অটো ডিটেইলিং শপগুলোর অপারেশনাল ঝামেলা দূর করতে এবং এআই-এর মাধ্যমে লিড কনভার্শন বাড়াতে কাজ করছি। আমাদের অভিজ্ঞতা এবং টেকনিক্যাল সলিউশন সম্পর্কে বিস্তারিত জানতে আমাদের এবাউট পেজ ভিজিট করুন।
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="inline-block bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold px-8 py-4 rounded-xl border border-cyan-500/40 transition-all shadow-lg whitespace-nowrap"
            >
              আমাদের সম্পর্কে বিস্তারিত →
            </Link>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-white border-b border-slate-800 pb-4">
            আমাদের মূল অটোমেশন সার্ভিসসমূহ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg">
              <div>
                <div className="text-cyan-400 text-3xl mb-4"><FaBolt /></div>
                <h3 className="text-xl font-bold text-white mb-3">১. Lead & Sales Automation</h3>
                <p className="text-slate-400 text-sm mb-4">প্রতিটি Lead দ্রুত Capture করুন এবং আরও বেশি Prospect-কে Customer-এ পরিণত করুন।</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Facebook / Google Ads / Website Lead → CRM</li>
                  <li>• Instant SMS, Email & WhatsApp Response</li>
                  <li>• AI Sales Assistant & Automated Follow-up</li>
                  <li>• Missed Call & Quote Automation</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono">
                Flow: Lead → Instant Response → AI Follow-up → Booking
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg">
              <div>
                <div className="text-cyan-400 text-3xl mb-4"><FaRobot /></div>
                <h3 className="text-xl font-bold text-white mb-3">২. AI Customer Support</h3>
                <p className="text-slate-400 text-sm mb-4">আপনার Customer-কে দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান Support দিন।</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• AI Chatbot & AI Phone Receptionist</li>
                  <li>• ২৪/৭ Customer Support & FAQ Automation</li>
                  <li>• Appointment & Price Information Assistance</li>
                  <li>• Human Call Transfer & WhatsApp Automation</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono">
                Flow: Message/Call → AI Response → Info Collection → Booking
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg">
              <div>
                <div className="text-cyan-400 text-3xl mb-4"><FaCalendarAlt /></div>
                <h3 className="text-xl font-bold text-white mb-3">৩. Booking & Operations</h3>
                <p className="text-slate-400 text-sm mb-4">Appointment এবং দৈনন্দিন Business Operations সহজ ও স্বয়ংক্রিয় করুন।</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Online Booking & Service/Vehicle Selection</li>
                  <li>• Google Calendar Integration</li>
                  <li>• SMS/Email Booking Confirmations & Reminders</li>
                  <li>• CRM Pipeline & Technician Job Assignment</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono">
                Flow: Booking → Calendar → Reminder → Technician → Service
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg">
              <div>
                <div className="text-cyan-400 text-3xl mb-4"><FaCreditCard /></div>
                <h3 className="text-xl font-bold text-white mb-3">৪. Payments & Membership</h3>
                <p className="text-slate-400 text-sm mb-4">Invoice, Payment এবং Membership Management অটোমেট করুন।</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Automatic Invoice Creation & Delivery</li>
                  <li>• Secure Payment Links</li>
                  <li>• Payment Reminder Automation</li>
                  <li>• Membership Renewal & Recurring Payments</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono">
                Flow: Service Completed → Invoice → Payment Link → Paid
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg">
              <div>
                <div className="text-cyan-400 text-3xl mb-4"><FaStar /></div>
                <h3 className="text-xl font-bold text-white mb-3">৫. Retention & Reputation</h3>
                <p className="text-slate-400 text-sm mb-4">একবারের Customer-কে দীর্ঘমেয়াদি Repeat Customer-এ পরিণত করুন।</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Automated Google Review Requests (SMS/Email/WhatsApp)</li>
                  <li>• Upsell & Special Offer Campaigns</li>
                  <li>• Customer Reactivation & Repeat Campaigns</li>
                  <li>• Service Follow-ups</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono">
                Flow: Service → Follow-up → Review → Upsell → Repeat
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg">
              <div>
                <div className="text-cyan-400 text-3xl mb-4"><FaShareAlt /></div>
                <h3 className="text-xl font-bold text-white mb-3">৬. Marketing & Social Media</h3>
                <p className="text-slate-400 text-sm mb-4">আপনি Business পরিচালনা করবেন, আর Automation আপনার Marketing চালিয়ে যাবে।</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Google Ads Lead Automation</li>
                  <li>• Social Media Auto Posting (FB, Insta)</li>
                  <li>• AI Caption Generation & Content Assistance</li>
                  <li>• Content Calendar & Performance Tracking</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-mono">
                Flow: Content → AI Caption → Schedule → Auto Post
              </div>
            </div>

          </div>
        </div>

        {/* Complete Customer Journey Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            🔄 সম্পূর্ণ Customer Journey Automation
          </h2>
          <p className="text-center text-slate-400 mb-8">প্রথম Lead থেকে Loyal Customer পর্যন্ত পুরো Journey অটোমেট করুন।</p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto text-center">
            {[
              "Facebook / Google Ads / Website",
              "Lead Capture",
              "CRM",
              "Instant SMS/Email/WhatsApp",
              "AI Sales Follow-up",
              "Appointment Booking",
              "Google Calendar",
              "Reminder",
              "Service Completed",
              "Invoice + Payment",
              "Review Request",
              "Upsell Campaign",
              "Repeat Customer"
            ].map((step, index, arr) => (
              <React.Fragment key={index}>
                <div className="bg-slate-800 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium shadow">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <span className="text-cyan-400 font-bold">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            🚀 আপনার Auto Detailing Business অটোমেট করতে প্রস্তুত?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Lead হারানো, Manual কাজ এবং Customer Follow-up-এর ঝামেলা কমান। AI এবং Automation-কে আপনার Business-এর জন্য ২৪/৭ কাজ করতে দিন।
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              href="/contact" 
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300 text-center"
            >
              Free Automation Audit বুক করুন
            </Link>
            <Link 
              href="/contact" 
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 shadow-lg transition duration-300 text-center"
            >
              আমাদের একজন Expert-এর সাথে কথা বলুন
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}