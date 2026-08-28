"use client";

import { useLanguage } from "../context/LanguageContext";

export default function CaseStudiesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#070B19] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("Case Studies", "কেস স্টাডিজ")}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              "See how we helped businesses scale with intelligent automation.",
              "দেখে নিন কীভাবে আমরা ইন্টেলিজেন্ট অটোমেশনের মাধ্যমে ব্যবসাগুলোকে বড় করে তুলেছে।"
            )}
          </p>
        </div>
        
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
            {t("Success Story", "সফলতার গল্প")}
          </span>
          <h3 className="text-2xl font-bold mt-4 mb-2">
            {t(
              "How an Agency Saved 40+ Hours/Week using n8n & AI",
              "n8n এবং এআই ব্যবহার করে একটি এজেন্সি কীভাবে প্রতি সপ্তাহে ৪০+ ঘণ্টা সময় বাঁচিয়েছে"
            )}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t(
              "By integrating automated lead scoring and CRM synchronization, our client reduced response times from hours to mere seconds.",
              "অটোমেটেড লিড স্কোরিং এবং সিআরএম সিঙ্ক্রোনাইজেশনের মাধ্যমে আমাদের ক্লায়েন্ট রেসপন্স টাইম কয়েক ঘণ্টা থেকে কমিয়ে মাত্র কয়েক সেকেন্ডে নামিয়ে এনেছেন।"
            )}
          </p>
        </div>
      </div>
    </main>
  );
}