"use client";

import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#070B19] text-white">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-16 py-12 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <div className="flex-1 text-center lg:text-left z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t("AI-Powered Business Automation Agency", "এআই-চালিত বিজনেস অটোমেশন এজেন্সি")}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {t("Automate Your Business.", "আপনার ব্যবসা অটোমেট করুন।")} <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("Save Time. Scale Faster.", "সময় বাঁচান। দ্রুত বড় হন।")}
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t(
              "Transform manual operations into intelligent automated workflows. We integrate CRM, custom AI agents, n8n, and multi-channel messaging to scale your revenue exponentially.",
              "ম্যানুয়াল কাজগুলোকে ইন্টেলিজেন্ট অটোমেটেড ওয়ার্কফ্লোতে রূপান্তর করুন। আমরা সিআরএম, কাস্টম এআই এজেন্ট, n8n এবং মাল্টি-চ্যানেল মেসেজিং ইন্টিগ্রেট করে আপনার ব্যবসার আয় বহুগুণ বাড়িয়ে তুলি।"
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <a href="/contact" className="w-full sm:w-auto text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-cyan-500/20 text-sm sm:text-base">
              {t("Book a Free Consultation", "ফ্রি কনসালটেশন বুক করুন")}
            </a>
            <a href="/services" className="w-full sm:w-auto text-center bg-slate-900/80 hover:bg-slate-800 text-white font-medium px-7 py-3.5 rounded-xl border border-slate-700 transition-all text-sm sm:text-base">
              {t("View Our Services", "আমাদের সেবাসমূহ দেখুন")}
            </a>
          </div>
        </div>

        {/* Right Side Visual Graphic Card */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="text-center mb-6">
              <span className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {t("AI CORE", "এআই কোর")}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-3 text-white">
                {t("Central Automation Core", "সেন্ট্রাল অটোমেশন কোর")}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                {t("Syncing workflows seamlessly across tools", "টুলগুলোর মধ্যে নিখুঁতভাবে ওয়ার্কফ্লো সিঙ্ক করা হচ্ছে")}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-center text-xs font-medium">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">{t("Website", "ওয়েবসাইট")}</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">OpenAI</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">n8n Workflows</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">{t("Google Sheets", "গুগল শিট")}</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">{t("Email API", "ইমেইল এপিআই")}</div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">{t("WhatsApp API", "হোয়াটসঅ্যাপ এপিআই")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* POWERED BY PLATFORMS */}
      <section className="py-10 border-y border-slate-900 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase mb-6">
            {t("Powered by World-Class Technologies & Platforms", "বিশ্বমানের প্রযুক্তি ও প্ল্যাটফর্ম দ্বারা পরিচালিত")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-400 font-bold text-xs sm:text-base">
            <span>n8n</span>
            <span>OpenAI</span>
            <span>Google Workspace</span>
            <span>Meta Business</span>
            <span>WhatsApp Cloud</span>
            <span>Stripe</span>
            <span>HubSpot</span>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="px-4 sm:px-6 lg:px-16 py-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-white">
            {t("How We Work", "আমরা যেভাবে কাজ করি")}
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            {t("A seamless 3-step process from audit to full deployment.", "অডিট থেকে শুরু করে ফুল ডিপ্লয়মেন্ট পর্যন্ত ৩ ধাপের একটি গোছানো প্রক্রিয়া।")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", titleEn: "Audit & Strategy", titleBn: "অডিট ও স্ট্র্যাটেজি", descEn: "We analyze your current operations, identify bottlenecks, and map out custom automatable blueprints.", descBn: "আমরা আপনার বর্তমান কার্যক্রম বিশ্লেষণ করি, সমস্যা চিহ্নিত করি এবং কাস্টম অটোমেশন ব্লুপ্রিন্ট তৈরি করি।" },
            { step: "02", titleEn: "Build & Test", titleBn: "বিল্ড ও টেস্ট", descEn: "We develop secure n8n workflows, integrate your AI models, and rigorously test data flows.", descBn: "আমরা নিরাপদ n8n ওয়ার্কফ্লো তৈরি করি, এআই মডেল ইন্টিগ্রেট করি এবং ডেটা ফ্লো কঠোরভাবে টেস্ট করি।" },
            { step: "03", titleEn: "Deploy & Scale", titleBn: "ডিপ্লয় ও স্কেল", descEn: "Launch your automated systems with team training, continuous monitoring, and ongoing optimization.", descBn: "টিম ট্রেনিং, কন্টিনিউয়াস মনিটরিং এবং অপ্টিমাইজেশনের মাধ্যমে আপনার অটোমেটেড সিস্টেম লঞ্চ করুন।" }
          ].map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-800/60 absolute right-6 top-6">{item.step}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white relative z-10">{t(item.titleEn, item.titleBn)}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed relative z-10">{t(item.descEn, item.descBn)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-16 py-16 max-w-4xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-white">
            {t("Frequently Asked Questions", "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী")}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { qEn: "How long does it take to implement AI automation?", qBn: "এআই অটোমেশন বাস্তবায়ন করতে কত সময় লাগে?", aEn: "Most basic workflows and integrations take between 1 to 2 weeks, while enterprise systems may take 4-6 weeks.", aBn: "বেশিরভাগ বেসিক ওয়ার্কফ্লো এবং ইন্টিগ্রেশনের জন্য ১ থেকে ২ সপ্তাহ সময় লাগে, আর এন্টারপ্রাইজ সিস্টেমের জন্য ৪-৬ সপ্তাহ লাগতে পারে।" },
            { qEn: "Do I need technical knowledge to manage this?", qBn: "এটি পরিচালনা করার জন্য কি আমার প্রযুক্তিগত জ্ঞান থাকতে হবে?", aEn: "Not at all! We build intuitive dashboards and provide full team training so your staff can manage everything effortlessly.", aBn: "একেবারেই না! আমরা সহজ ড্যাশবোর্ড তৈরি করি এবং ফুল টিম ট্রেনিং দিই যাতে আপনার স্টাফরা খুব সহজেই সবকিছু ম্যানেজ করতে পারে।" },
            { qEn: "What tools do you use for automation?", qBn: "অটোমেশনের জন্য আপনারা কোন কোন টুল ব্যবহার করেন?", aEn: "We primarily use n8n, OpenAI APIs, custom webhook integrations, and various CRM/database platforms.", aBn: "আমরা মূলত n8n, OpenAI API, কাস্টম ওয়েবহুক এবং বিভিন্ন CRM/ডাটাবেস প্ল্যাটফর্ম ব্যবহার করি।" }
          ].map((faq, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm sm:text-base font-bold mb-2 text-white">{t(faq.qEn, faq.qBn)}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{t(faq.aEn, faq.aBn)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}