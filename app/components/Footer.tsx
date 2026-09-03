"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#02040a] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        {/* Direct Contact Links Bar (সকল পেজের ফুটারে যুক্ত হলো) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pb-12 border-b border-slate-800/60">
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/8801724132820" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FaWhatsapp className="text-lg" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[11px] text-slate-400 font-medium">WhatsApp</div>
              <div className="text-white font-bold text-xs truncate">+880 1724-132820</div>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:torikinsights@gmail.com" 
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FaEnvelope className="text-lg" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[11px] text-slate-400 font-medium">{t("Email Support", "ইমেইল সাপোর্ট")}</div>
              <div className="text-white font-bold text-xs truncate">torikinsights@gmail.com</div>
            </div>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FaInstagram className="text-lg" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[11px] text-slate-400 font-medium">{t("Instagram", "ইনস্টাগ্রাম")}</div>
              <div className="text-white font-bold text-xs truncate">@tae.agency</div>
            </div>
          </a>

          {/* Messenger */}
          <a 
            href="https://m.me/your-facebook-page" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FaFacebookMessenger className="text-lg" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[11px] text-slate-400 font-medium">{t("Messenger", "মেসেঞ্জার")}</div>
              <div className="text-white font-bold text-xs truncate">TAE.Agency Official</div>
            </div>
          </a>

          {/* Phone Call */}
          <a 
            href="tel:+8801724132820" 
            className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FaPhoneAlt className="text-base" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[11px] text-slate-400 font-medium">{t("Direct Call", "সরাসরি কল")}</div>
              <div className="text-white font-bold text-xs truncate">+880 1724-132820</div>
            </div>
          </a>

        </div>

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
                "এআই-চালিত অটোমেশন সিস্টেম, লিড জেনারেশন এবং কাস্টম ওয়ার্কফ্লো দিয়ে সার্ভিস-অরিয়েন্টেড বিজনেস এবং রিয়েল এস্টেট ব্যবসার বৃদ্ধি ত্বরান্বিত করছি।"
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