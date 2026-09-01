"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#02040a] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Column (Logo & Description - Takes 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              {/* Footer Logo */}
              <div className="relative h-12 w-16 sm:h-14 sm:w-20 shrink-0">
                <Image
                  src="/Logo.png"
                  alt="TAE.Agency Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Brand Name */}
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1 leading-none">
                  TAE<span className="text-cyan-400">.</span>Agency
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide mt-1.5">
                  {t("Torik Automation Engineering", "তরিক অটোমেশন ইঞ্জিনিয়ারিং")}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-2">
              {t(
                "Empowering service-oriented businesses and real estate with AI-driven automation systems, lead generation, and custom workflows.",
                "এআই-চালিত অটোমেশন সিস্টেম, লিড জেনারেশন এবং কাস্টম ওয়ার্কফ্লো দিয়ে সার্ভিস-অরিয়েন্টেড বিজনেস এবং রিয়েল এস্টেট ব্যবসার বৃদ্ধি ত্বরান্বিত করছি।"
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              {t("Quick Links", "দ্রুত লিংক")}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  {t("Home", "হোম")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  {t("Services", "সেবাসমূহ")}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-400 transition-colors">
                  {t("Industries", "ইন্ডাস্ট্রিজ")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  {t("About Us", "আমাদের সম্পর্কে")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Case Studies */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              {t("Resources", "রিসোর্সেস")}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/case-studies" className="hover:text-cyan-400 transition-colors">
                  {t("Case Studies", "কেস স্টাডিজ")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                  {t("Pricing", "মূল্যতালিকা")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  {t("Contact Us", "যোগাযোগ")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / CTA Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              {t("Get Started", "শুরু করুন")}
            </h3>
            <p className="text-sm text-slate-400">
              {t("Ready to automate your business? Book a free consultation.", "আপনার ব্যবসা অটোমেট করতে প্রস্তুত? একটি ফ্রি কনসালটেশন বুক করুন।")}
            </p>
            <Link
              href="/contact"
              className="mt-1 inline-block text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/10 text-sm"
            >
              {t("Book Consultation", "পরামর্শ বুক করুন")}
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">TAE.Agency</span> ({t("Torik Automation Engineering", "তরিক অটোমেশন ইঞ্জিনিয়ারিং")}). {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              {t("Privacy Policy", "প্রাইভেসি পলিসি")}
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              {t("Terms of Service", "শর্তাবলী")}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}