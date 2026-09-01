"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#040711]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Logo & Tagline */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-32 sm:w-36 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Logo.png"
                alt="Torik Automation Engineering Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
          <span className="hidden xl:inline-block text-[11px] text-slate-400 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
            {t("Torik Automation Engineering", "তরিক অটোমেশন ইঞ্জিনিয়ারিং")}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            {t("Home", "হোম")}
          </Link>
          <Link href="/services" className="hover:text-cyan-400 transition-colors">
            {t("Services", "সেবাসমূহ")}
          </Link>
          <Link href="/industries" className="hover:text-cyan-400 transition-colors">
            {t("Industries", "ইন্ডাস্ট্রিজ")}
          </Link>
          <Link href="/case-studies" className="hover:text-cyan-400 transition-colors">
            {t("Case Studies", "কেস স্টাডিজ")}
          </Link>
          <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
            {t("Pricing", "মূল্যতালিকা")}
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">
            {t("About", "আমাদের সম্পর্কে")}
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 transition-colors">
            {t("Contact", "যোগাযোগ")}
          </Link>
        </nav>

        {/* Right Actions (Language Toggle & CTA Button) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switch Button */}
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition-all hover:bg-cyan-500/20"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>

          {/* Consultation Button */}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm"
          >
            {t("Book Consultation", "পরামর্শ বুক করুন")}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="px-3 py-1 rounded-md bg-slate-900 text-cyan-400 border border-cyan-500/30 text-xs font-bold"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#040711] border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-slate-300 font-medium text-sm">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("Home", "হোম")}
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("Services", "সেবাসমূহ")}
          </Link>
          <Link href="/industries" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("Industries", "ইন্ডাস্ট্রিজ")}
          </Link>
          <Link href="/case-studies" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("Case Studies", "কেস স্টাডিজ")}
          </Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("Pricing", "মূল্যতালিকা")}
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("About", "আমাদের সম্পর্কে")}
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            {t("Contact", "যোগাযোগ")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-center bg-cyan-500 text-slate-950 font-bold py-3 rounded-xl mt-2"
          >
            {t("Book Consultation", "পরামর্শ বুক করুন")}
          </Link>
        </div>
      )}
    </header>
  );
}