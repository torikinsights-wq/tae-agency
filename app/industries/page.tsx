"use client";

import { useLanguage } from "../context/LanguageContext";

export default function IndustriesPage() {
  const { t } = useLanguage();

  const industriesList = [
    { 
      nameEn: "E-Commerce & Retail", 
      nameBn: "ই-কমার্স ও রিটেইল", 
      descEn: "Automating operations, lead generation, and customer success workflows for e-commerce & retail.", 
      descBn: "ই-কমার্স ও রিটেইলের জন্য অপারেশন, লিড জেনারেশন এবং কাস্টমার সাকসেস ওয়ার্কফ্লো অটোমেট করা।" 
    },
    { 
      nameEn: "Real Estate & Agencies", 
      nameBn: "রিয়েল এস্টেট ও এজেন্সি", 
      descEn: "Automating operations, lead generation, and customer success workflows for real estate & agencies.", 
      descBn: "রিয়েল এস্টেট ও এজেন্সির জন্য অপারেশন, লিড জেনারেশন এবং কাস্টমার সাকসেস ওয়ার্কফ্লো অটোমেট করা।" 
    },
    { 
      nameEn: "SaaS & Tech Startups", 
      nameBn: "সাস ও টেক স্টার্টআপ", 
      descEn: "Automating operations, lead generation, and customer success workflows for saas & tech startups.", 
      descBn: "সাস ও টেক স্টার্টআপের জন্য অপারেশন, লিড জেনারেশন এবং কাস্টমার সাকসেস ওয়ার্কফ্লো অটোমেট করা।" 
    }
  ];

  return (
    <main className="min-h-screen bg-[#070B19] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("Industries We Serve", "আমরা যেসব শিল্পে সেবা প্রদান করি")}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              "Tailored AI and automation systems designed for specific sector growths.",
              "নির্দিষ্ট খাতের প্রবৃদ্ধির জন্য ডিজাইন করা কাস্টমাইজড এআই এবং অটোমেশন সিস্টেম।"
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industriesList.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">
                {t(item.nameEn, item.nameBn)}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t(item.descEn, item.descBn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}