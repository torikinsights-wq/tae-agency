"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#070B19] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t("Our Services", "আমাদের সেবাসমূহ")}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              "Comprehensive AI and automation solutions built to scale your enterprise.",
              "আপনার এন্টারপ্রাইজকে স্কেল করার জন্য তৈরি কমপ্রিহেনসিভ এআই এবং অটোমেশন সলিউশন।"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              titleEn: "AI Agent & Chatbots", 
              titleBn: "এআই এজেন্ট ও চ্যাটবট", 
              descEn: "Custom trained LLM bots for 24/7 customer support and lead qualification.", 
              descBn: "২৪/৭ কাস্টমার সাপোর্ট এবং লিড কোয়ালিফিকেশনের জন্য কাস্টম ট্রেইনড এলএলএম বট।" 
            },
            { 
              titleEn: "Workflow Automation (n8n)", 
              titleBn: "ওয়ার্কফ্লো অটোমেশন (n8n)", 
              descEn: "Complex multi-app workflow integrations connecting your tools seamlessly.", 
              descBn: "আপনার টুলগুলোকে নিখুঁতভাবে সংযুক্ত করার জন্য জটিল মাল্টি-অ্যাপ ওয়ার্কফ্লো ইন্টিগ্রেশন।" 
            },
            { 
              titleEn: "CRM & Lead Pipelines", 
              titleBn: "সিআরএম ও লিড পাইপলাইন", 
              descEn: "Automated lead capture, scoring, and nurturing sequences.", 
              descBn: "অটোমেটেড লিড ক্যাপচার, স্কোরিং এবং নার্টিং সিকোয়েন্স।" 
            }
          ].map((service, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {t(service.titleEn, service.titleBn)}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t(service.descEn, service.descBn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}