"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#070B19] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("About TAE.Agency", "TAE.Agency সম্পর্কে")}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              "Torik Automation Engineering - Empowering modern enterprises through cutting-edge AI and custom workflows.",
              "তরিক অটোমেশন ইঞ্জিনিয়ারিং - অত্যাধুনিক এআই এবং কাস্টম ওয়ার্কফ্লোর মাধ্যমে আধুনিক এন্টারপ্রাইজগুলোকে শক্তিশালী করা।"
            )}
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-3xl mx-auto text-slate-300 leading-relaxed text-center">
          <p>
            {t(
              "We bridge the gap between complex technology and practical business growth. Our mission is to eliminate repetitive manual tasks so your team can focus on scaling and creativity.",
              "আমরা জটিল প্রযুক্তি এবং বাস্তব ব্যবসায়িক প্রবৃদ্ধির মধ্যে সেতুবন্ধন তৈরি করি। আমাদের লক্ষ্য হলো পুনরাবৃত্তিমূলক ম্যানুয়াল কাজগুলো দূর করা, যাতে আপনার টিম ব্যবসার পরিধি বাড়ানো এবং সৃষ্টিশীল কাজে মনোনিবেশ করতে পারে।"
            )}
          </p>
        </div>
      </div>
    </main>
  );
}