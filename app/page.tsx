"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import {
  FaBolt,
  FaRobot,
  FaCalendarAlt,
  FaCreditCard,
  FaStar,
  FaShareAlt,
  FaArrowRight,
  FaCheckCircle,
  FaInfoCircle,
  FaBullseye,
} from "react-icons/fa";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {t("AI-Powered Business Automation Agency", "এআই-চালিত বিজনেস অটোমেশন এজেন্সি")}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            {t("Automate Your Business,", "আপনার ব্যবসা অটোমেট করুন,")} <br />
            <span className="text-cyan-400">
              {t("Save Time & Double Revenue", "সময় বাঁচান ও আয় দ্বিগুণ করুন")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            {t(
              "Take your business customer journey and sales growth to the next level through complete AI and automation systems.",
              "সম্পূর্ণ AI ও অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার কাস্টমার জার্নি এবং সেলস গ্রোথকে পরবর্তী স্তরে নিয়ে যান।"
            )}
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
            {t(
              "We automate your entire business process—from lead capture to instant response, AI follow-ups, appointment booking, payments, and repeat customer generation.",
              "আমরা আপনার ব্যবসার পুরো প্রক্রিয়াটি অটোমেট করি—লিড ক্যাপচার থেকে শুরু করে তাৎক্ষণিক রেসপন্স, এআই ফলো-আপ, অ্যাপয়েন্টমেন্ট বুকিং, পেমেন্ট এবং রিপিট কাস্টমার তৈরি করা পর্যন্ত।"
            )}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/services"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-7 py-3 rounded-xl transition-colors duration-200"
            >
              {t("Explore Our Services", "আমাদের সার্ভিসসমূহ দেখুন")}
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3 rounded-xl border border-slate-800 transition-colors duration-200"
            >
              {t("Book a Free Automation Audit", "ফ্রি অটোমেশন অডিট বুক করুন")}
            </Link>
          </div>

          {/* লক্ষ্য সেকশন (Goal Section) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mt-8 text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
              <FaBullseye /> {t("Our Main Goal", "আমাদের মূল লক্ষ্য")}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {t("Business Growth & Maximum Efficiency", "ব্যবসার প্রবৃদ্ধি ও সর্বোচ্চ কার্যকারিতা নিশ্চিতকরণ")}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <span className="text-cyan-400 font-medium">{t("Less manual work", "কম ম্যানুয়াল কাজ")}</span>, {t("instant", "মুহূর্তের মধ্যে")} <span className="text-cyan-400 font-medium">{t("fast response", "ফাস্ট রেসপন্স")}</span>, {t("assured", "নিশ্চিত")} <span className="text-cyan-400 font-medium">{t("more bookings", "বেশি বুকিং")}</span> {t("and retention through", "এবং স্থায়ী কাস্টমার ধরে রাখতে")} <span className="text-cyan-400 font-medium">{t("repeat customer growth", "রিপিট কাস্টমার গ্রোথ")}</span>—{t("this is our core commitment.", "—এটাই আমাদের মূল অঙ্গীকার।")}
            </p>
          </div>
        </div>

        {/* আমাদের সম্পর্কে সেকশন (About Section) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm">
              <FaInfoCircle /> {t("Know About Us", "আমাদের সম্পর্কে জানুন")}
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              {t("How is TAE Agency Transforming Your Business?", "টিএই এজেন্সি কীভাবে আপনার ব্যবসাকে বদলে দিচ্ছে?")}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t(
                "Missing a promising lead means a big loss for your business. We streamline all operational friction and make your sales process 100% automated using modern Artificial Intelligence (AI) and smart automation systems. Visit our About page to learn in detail how our proven technical solutions and expert team can make your business hassle-free and more profitable.",
                "প্রতিটি প্রমিজিং লিড হাতছাড়া হওয়া মানেই আপনার ব্যবসায় বড় ক্ষতি। আমরা আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI) এবং স্মার্ট অটোমেশন সিস্টেমের মাধ্যমে আপনার ব্যবসার সমস্ত অপারেশনাল জট কমিয়ে সেলস প্রসেসকে করি শতভাগ স্বয়ংক্রিয়। আমাদের প্রমাণিত টেকনিক্যাল সলিউশন এবং এক্সপার্ট টিম কীভাবে আপনার ব্যবসাকে ঝঞ্ঝাটহীন ও অধিক লাভজনক করে তুলতে পারে, তা বিস্তারিত জানতে আমাদের এবাউট পেজটি ভিজিট করুন।"
              )}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-colors duration-200 whitespace-nowrap"
            >
              <span>{t("More About Us", "আমাদের সম্পর্কে বিস্তারিত")}</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {t("Our Core Automation Services", "আমাদের মূল অটোমেশন সার্ভিসসমূহ")}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              {t(
                "We have brought 6 powerful modules to automate every department of your business.",
                "আপনার ব্যবসার প্রতিটি বিভাগকে স্বয়ংক্রিয় করতে আমরা নিয়ে এসেছি ৬টি শক্তিশালী মডিউল।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
                  <FaBolt />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t("1. Lead & Sales Automation", "১. Lead & Sales Automation")}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t("Capture every lead quickly and easily convert prospective buyers.", "প্রতিটি লিড দ্রুত ক্যাপচার করুন এবং সম্ভাবনাময় ক্রেতাদের সহজে কনভার্ট করুন।")}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Ads / Website Lead → CRM</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Instant SMS & Email Response</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Sales Assistant Follow-up</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Flow: Lead → Response → Follow-up → Booking
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
                  <FaRobot />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t("2. AI Customer Support", "২. AI Customer Support")}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t("Provide fast and intelligent automated support to customers 24/7.", "গ্রাহকদের দিন-রাত ২৪ ঘণ্টা দ্রুত এবং বুদ্ধিমান অটোমেটেড সাপোর্ট প্রদান করুন।")}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Chatbot & Phone Support</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> 24/7 FAQ Automation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Instant Information Assistance</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Flow: Message → AI Response → Info Collection
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
                  <FaCalendarAlt />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t("3. Booking & Operations", "৩. Booking & Operations")}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t("Simplify appointment booking and daily operational activities completely.", "অ্যাপয়েন্টমেন্ট বুকিং এবং দৈনন্দিন অপারেশনাল কার্যক্রম সম্পূর্ণ সহজ করুন।")}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Online Booking System</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Google Calendar Integration</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Automated Reminders</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Flow: Booking → Calendar → Reminder → Service
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
                  <FaCreditCard />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t("4. Payments & Membership", "৪. Payments & Membership")}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t("Automate invoice creation, payment collection, and membership renewal processes.", "ইনভয়েস তৈরি, পেমেন্ট কালেকশন এবং মেম্বারশিপ রিনিউয়াল প্রক্রিয়া অটোমেট করুন।")}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Auto Invoice Creation</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Secure Payment Links</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Recurring Payment Management</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Flow: Service → Invoice → Payment Link → Paid
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
                  <FaStar />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t("5. Retention & Reputation", "৫. Retention & Reputation")}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t("Turn one-time buyers into long-term loyal customers and boost reviews.", "একবারের ক্রেতাকে দীর্ঘমেয়াদী অনুগত ক্রেটায় রূপান্তর করুন এবং রিভিউ বাড়ান।")}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Automated Review Requests</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Special Offer Campaigns</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Customer Reactivation</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Flow: Service → Follow-up → Review → Repeat
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 text-2xl mb-4 p-3 bg-cyan-500/10 w-fit rounded-xl border border-cyan-500/20">
                  <FaShareAlt />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t("6. Marketing & Social Media", "৬. Marketing & Social Media")}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t("Run your core business while automation keeps your marketing engine running.", "আপনি মূল ব্যবসা পরিচালনা করুন, আর অটোমেশন আপনার মার্কেটিং ইঞ্জিন সচল রাখবে।")}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Social Media Auto Posting</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> AI Caption & Content Assistance</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 shrink-0" /> Performance Tracking</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Flow: Content → AI Caption → Schedule → Post
              </div>
            </div>

          </div>
        </div>

        {/* Complete Customer Journey Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
            🔄 {t("Complete Customer Journey Automation", "সম্পূর্ণ Customer Journey Automation")}
          </h2>
          <p className="text-center text-slate-400 mb-8 text-sm sm:text-base">{t("See the whole process from first lead to loyal customer.", "প্রথম লিড থেকে শুরু করে লয়েল কাস্টমার পর্যন্ত পুরো প্রক্রিয়াটি দেখুন।")}</p>
          
          <div className="flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto text-center">
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
                <div className="bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2 rounded-lg text-xs font-medium">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <span className="text-slate-500 text-xs">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            🚀 {t("Ready to Automate Your Business?", "আপনার ব্যবসাকে অটোমেট করতে প্রস্তুত তো?")}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {t(
              "Say goodbye to lost leads and manual hassles. Let AI and automation work 24/7 behind your business.",
              "লিড হারানো এবং ম্যানুয়াল কাজের ঝামেলা চিরতরে দূর করুন। AI এবং অটোমেশনকে আপনার ব্যবসার পেছনে ২৪/৭ কাজ করতে দিন।"
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-7 py-3 rounded-xl transition-colors duration-200 text-center"
            >
              {t("Book a Free Automation Audit", "ফ্রি অটোমেশন অডিট বুক করুন")}
            </Link>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-7 py-3 rounded-xl border border-slate-700 transition-colors duration-200 text-center"
            >
              {t("Talk to One of Our Experts", "আমাদের একজন এক্সপার্টের সাথে কথা বলুন")}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}