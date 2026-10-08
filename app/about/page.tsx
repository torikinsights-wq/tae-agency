"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import {
  FaTooth,
  FaRobot,
  FaBullseye,
  FaEye,
  FaCogs,
  FaNetworkWired,
  FaUserMd,
  FaCheckCircle,
  FaArrowRight,
  FaComments,
  FaCalendarAlt,
  FaSyncAlt,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaLayerGroup,
  FaHeart,
  FaWhatsapp,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Farjana",
    role: "Automation Specialist",
    descriptionBn: "ওয়ার্কফ্লো ডিজাইন ও ডেটা ম্যানেজমেন্ট এক্সপার্ট।",
    descriptionEn: "Workflow design & data management expert.",
    image: "/Farjana.png",
  },
  {
    name: "Sagor",
    role: "AI Chatbot Developer",
    descriptionBn: "এআই চ্যাটবট ও ইনস্ট্যান্ট রেসপন্স সেটআপে দক্ষ।",
    descriptionEn: "Skilled in AI chatbot & instant response setup.",
    image: "/Sagor.png",
  },
  {
    name: "Sakib",
    role: "Lead Gen Specialist",
    descriptionBn: "লিড জেনারেশন ও পাইপলাইন অপ্টিমাইজেশন।",
    descriptionEn: "Lead generation & pipeline optimization.",
    image: "/Sakib.png",
  },
  {
    name: "Rashed",
    role: "Marketing Strategist",
    descriptionBn: "ডিজিটাল মার্কেটিং ও ক্লায়েন্ট গ্রোথ স্ট্র্যাটেজিস্ট।",
    descriptionEn: "Digital marketing & client growth strategist.",
    image: "/Rashed.jpg",
  },
  {
    name: "Ramich",
    role: "Tech Integration Expert",
    descriptionBn: "সিস্টেম ইন্টিগ্রেশন ও টেকনিক্যাল সাপোর্ট।",
    descriptionEn: "System integration & technical support.",
    image: "/Ramich.jpg",
  },
  {
    name: "Rimu",
    role: "Operations & Support",
    descriptionBn: "অপারেশনস এবং ক্লায়েন্ট সাকসেস ম্যানেজমেন্ট।",
    descriptionEn: "Operations and client success management.",
    image: "/Rimu.jpg",
  },
];

const principles = [
  {
    icon: <FaTooth />,
    titleBn: "ডেন্টাল প্র্যাকটিসের উপযোগী সিস্টেম",
    titleEn: "Built Around Dental Practices",
    descriptionBn: "রোগীর অনুসন্ধান, যোগাযোগ, অ্যাপয়েন্টমেন্ট, রিকল এবং রিঅ্যাক্টিভেশনের মতো ডেন্টাল প্র্যাকটিসের রিয়েল ওয়ার্কফ্লো মাথায় রেখে আমরা অটোমেশন ডিজাইন করি।",
    descriptionEn: "We design automation around the real workflows of dental practices — from patient inquiries and communication to appointments, follow-up, recall, and reactivation.",
  },
  {
    icon: <FaRobot />,
    titleBn: "সঠিক উদ্দেশ্যে এআই এর ব্যবহার",
    titleEn: "AI With a Purpose",
    descriptionBn: "রোগী সেবার মানবিক দিকটি বজায় রেখেই আমরা যোগাযোগ ও পুনরাবৃত্তিমূলক কাজগুলোকে দ্রুত ও গোছানো করতে এআই ব্যবহার করি।",
    descriptionEn: "We use AI where it can make communication and repetitive workflows faster, more organized, and more useful — without replacing the human side of patient care.",
  },
  {
    icon: <FaNetworkWired />,
    titleBn: "সংযুক্ত ও স্মার্ট ওয়ার্কফ্লো",
    titleEn: "Connected Workflows",
    descriptionBn: "আরেকটি নতুন বিচ্ছিন্ন টুল যোগ করার পরিবর্তে, আমরা আপনার ক্লিনিকে ইতিমধ্যে থাকা ওয়ার্কফ্লোগুলোকে পরস্পরের সাথে যুক্ত করি।",
    descriptionEn: "Instead of adding another disconnected tool, we connect the workflows that already exist inside your practice.",
  },
  {
    icon: <FaUserMd />,
    titleBn: "মূল যত্ন ও সেবা থাকবে মানুষের হাতেই",
    titleEn: "Human Care Stays Human",
    descriptionBn: "অটোমেশন শুধু যোগাযোগ ও প্রশাসনকে সহায়তা করবে, আর রোগ নির্ণয়, চিকিৎসা সংক্রান্ত সিদ্ধান্ত এবং ক্লিনিক্যাল কেয়ারের দায়িত্ব থাকবে বিশেষজ্ঞদের হাতেই।",
    descriptionEn: "Automation can support communication and administration, while diagnosis, treatment decisions, clinical care, and complex situations remain with qualified professionals.",
  },
];

const processSteps = [
  {
    number: "01",
    titleBn: "ডিসকভার",
    titleEn: "Discover",
    descriptionBn: "আমরা আপনার রোগীর জার্নি, লিড সোর্স, বুকিং প্রসেস এবং পুনরাবৃত্তিমূলক কাজগুলো গভীরভাবে বুঝি।",
    descriptionEn: "We understand your patient journey, lead sources, booking process, communication channels, team structure, and repetitive tasks.",
    icon: <FaLightbulb />,
  },
  {
    number: "02",
    titleBn: "ডিজাইন",
    titleEn: "Design",
    descriptionBn: "আপনার ডেন্টাল প্র্যাকটিস যেভাবে পরিচালিত হয়, তার সাথে মিলিয়ে আমরা অটোমেশন সুযোগ ও ওয়ার্কফ্লো ডিজাইন করি।",
    descriptionEn: "We identify automation opportunities and design workflows around how your dental practice actually operates.",
    icon: <FaLayerGroup />,
  },
  {
    number: "03",
    titleBn: "কানেক্ট",
    titleEn: "Connect",
    descriptionBn: "প্রয়োজনীয় টুলস, ফর্ম, ক্যালেন্ডার, কমিউনিকেশন চ্যানেল এবং ডেটাবেসগুলোকে একসাথে সংযুক্ত করা হয়।",
    descriptionEn: "Relevant tools, forms, calendars, communication channels, databases, and automation systems are connected.",
    icon: <FaNetworkWired />,
  },
  {
    number: "04",
    titleBn: "অটোমেট",
    titleEn: "Automate",
    descriptionBn: "আপনার ডেন্টাল টিম সম্পূর্ণ নিয়ন্ত্রণে রেখে পুনরাবৃত্তিমূলক কাজগুলো স্বয়ংক্রিয়ভাবে চলতে শুরু করে।",
    descriptionEn: "Repetitive workflows begin running automatically while your dental team remains in control.",
    icon: <FaRobot />,
  },
  {
    number: "05",
    titleBn: "অপ্টিমাইজ",
    titleEn: "Optimize",
    descriptionBn: "আপনার প্র্যাকটিস ও রোগীর জার্নির সাথে সামঞ্জস্য রেখে ওয়ার্কফ্লোর কার্যকারিতা নিয়মিত পর্যালোচনা ও উন্নত করা হয়।",
    descriptionEn: "Workflow activity is reviewed and improved as your practice, team, and patient journey evolve.",
    icon: <FaChartLine />,
  },
];

const faqs = [
  {
    qBn: "ডেন্টাল প্র্যাকটিসে অটোমেশন কীভাবে কাজ করে?",
    qEn: "How does automation work in dental practices?",
    aBn: "অটোমেশন আপনার ওয়েبসাইটের ইনকোয়ারি, মিসড কল টেক্সট-ব্যাক, অ্যাপয়েন্টমেন্ট বুকিং এবং রিমাইন্ডারগুলো স্বয়ংক্রিয়ভাবে পরিচালনা করে, যাতে আপনার টিম রোগীর সেবায় বেশি সময় দিতে পারে।",
    aEn: "Automation handles your website inquiries, missed call text-backs, appointment bookings, and patient reminders automatically so your team can focus entirely on patient care.",
  },
  {
    qBn: "সেটআপ করতে কতদিন সময় লাগে?",
    qEn: "How long does setup take?",
    aBn: "সাধারণত আপনার ক্লিনিকের ওয়ার্কফ্লো এবং রিকোয়ারমেন্ট অনুযায়ী সম্পূর্ণ সিস্টেম সেটআপ ও লাইভ হতে ৩ থেকে ৭ কার্যদিবস সময় লাগে।",
    aEn: "Typically, full system setup and deployment take between 3 to 7 business days depending on your clinic's specific workflow requirements.",
  },
  {
    qBn: "এটি কি আমাদের বর্তমান সফটওয়্যারের সাথে কাজ করবে?",
    qEn: "Will this work with our existing software?",
    aBn: "হ্যাঁ, আমরা আপনার ব্যবহৃত জনপ্রিয় ক্যালেন্ডার, গুগল শিট, সিআরএম এবং কমিউনিকেশন টুলের সাথে এটি স্মুথলি ইন্টিগ্রেট করে দিই।",
    aEn: "Yes, we smoothly integrate our automation systems with your existing calendars, Google Sheets, CRMs, and communication tools.",
  },
  {
    qBn: "ফ্রি অডিট সেশনের জন্য কীভাবে বুক করব?",
    qEn: "How do I book a free audit session?",
    aBn: "আমাদের ওয়েবসাইটের যেকোনো 'Book a Free Dental Automation Audit' বাটনে ক্লিক করে ফর্ম পূরণ করলেই আমাদের টিম আপনার সাথে যোগাযোগ করবে।",
    aEn: "Simply click any 'Book a Free Dental Automation Audit' button on our website and fill out the form to get started with our team.",
  },
];

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#05070B] text-white overflow-hidden">
      
      {/* COLORFUL & VIBRANT TOP CTA BAR (Like Services Page) */}
      <div className="w-full bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-500/40 py-3 px-4 sm:px-6 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2 text-cyan-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <FaClock className="text-cyan-400 ml-1 text-base" />
            <span className="font-semibold text-white tracking-wide">
              {t("Emergency & Appointments: 24/7 Open (AI Powered Support)", "ইমার্জেন্সি ও অ্যাপয়েন্টমেন্ট: ২৪/৭ খোলা (এআই সাপোর্টেড)")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="https://wa.me/8801724132820" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition font-bold shadow-sm"
            >
              <FaWhatsapp className="text-emerald-400 text-base" />
              <span>WhatsApp Hotline: +880 1724-132820</span>
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-orange-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs md:text-sm tracking-[0.18em] uppercase mb-7">
              <FaTooth />
              {t("About TAE.Agency", "TAE.Agency সম্পর্কে")}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              {t("Building Smarter", "স্মার্ট ডেন্টাল প্র্যাকটিস")}
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {t("Dental Practice Automation.", "অটোমেশন সিস্টেম তৈরি করছি।")}
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {t(
                "TAE.Agency — Torik Automation Engineering — designs intelligent automation systems that help dental practices organize patient acquisition, communication, appointments, follow-up, recall, reactivation, and marketing workflows.",
                "TAE.Agency — টরিক অটোমেশন ইঞ্জিনিয়ারিং — বুদ্ধিমান অটোমেশন সিস্টেম ডিজাইন করে যা ডেন্টাল ক্লিনিকগুলোকে রোগী অর্জন, যোগাযোগ, অ্যাপয়েন্টমেন্ট, ফলো-আপ, রিকল, রিঅ্যাক্টিভেশন এবং মার্কেটিং ওয়ার্কফ্লো গুছিয়ে রাখতে সাহায্য করে।"
              )}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
              >
                {t("Book a Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
                <FaArrowRight />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white font-semibold hover:bg-white/[0.06] transition"
              >
                {t("Explore Our Services", "আমাদের সার্ভিসগুলো দেখুন")}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Why We Exist", "আমরা কেন আছি")}</p>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              {t("Your Dental Team Should Focus on Patients.", "আপনার ডেন্টাল টিম ফোকাস করবে রোগীর সেবায়।")}
              <span className="block text-gray-500">{t("Not Repetitive Administrative Work.", "পুনরাবৃত্তিমূলক প্রশাসনিক কাজে নয়।")}</span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              {t(
                "Dental practices manage dozens of repetitive interactions every day — inquiries, questions, appointment requests, confirmations, reminders, follow-ups, recalls, and reactivation.",
                "ডেন্টাল প্র্যাকটিসগুলোকে প্রতিদিন অসংখ্য পুনরাবৃত্তিমূলক কাজের মুখোমুখি হতে হয়—ইনকোয়ারি, প্রশ্ন, অ্যাপয়েন্টমেন্ট রিকোয়েস্ট, কনফার্মেশন, রিমাইন্ডার, ফলো-আপ এবং রিকল।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Our Approach", "আমাদের কর্মপদ্ধতি")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              {t("We Don't Start With Software.", "আমরা সফটওয়্যার দিয়ে শুরু করি না।")}
              <span className="block text-gray-500">{t("We Start With Your Workflow.", "আমরা শুরু করি আপনার ওয়ার্কফ্লো দিয়ে।")}</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative rounded-2xl border border-white/10 bg-[#080B11] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-white/10">{step.number}</span>
                  <span className="text-cyan-300 text-xl">{step.icon}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold">{isBangla ? step.titleBn : step.titleEn}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{isBangla ? step.descriptionBn : step.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION (Fixed Image Fit & Smaller Proportional Box) */}
      <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Our Team", "আমাদের টিম")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">{t("The Team Behind Your Project", "আপনার প্রজেক্টের পেছনের এক্সপার্ট টিম")}</h2>
            <p className="mt-4 text-gray-400 text-base">
              {t("Dedicated professionals working to ensure your automation success.", "আপনার অটোমেশন সফল করতে নিবেদিতপ্রাণ এক্সপার্টগণ।")}
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group rounded-2xl border border-white/10 bg-[#080B11] p-6 flex flex-col items-center text-center hover:border-cyan-400/30 transition">
                <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 shadow-md mb-5">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-bottom group-hover:scale-105 transition duration-300" 
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-cyan-400 text-xs font-semibold">{member.role}</p>
                <p className="mt-3 text-gray-400 text-xs leading-relaxed">
                  {isBangla ? member.descriptionBn : member.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (Accordion Dropdown Style like Services Page) */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              {t("Frequently Asked Questions", "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী")}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-white/10 bg-[#080B11] overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:text-cyan-300 transition"
                >
                  <span>{isBangla ? faq.qBn : faq.qEn}</span>
                  <span className="text-cyan-400">
                    {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {isBangla ? faq.aBn : faq.aEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-28 px-6 border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs tracking-[0.2em] uppercase">
            <FaTooth />
            {t("Start With Your Workflow", "আপনার ওয়ার্কফ্লো দিয়ে শুরু করুন")}
          </div>

          <h2 className="mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
            {t("Ready to Find What Your", "আপনার ডেন্টাল প্র্যাকটিস কী অটোমেট")}
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t("Dental Practice Can Automate?", "করতে পারে তা জানতে প্রস্তুত?")}
            </span>
          </h2>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
            >
              {t("Book a Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}