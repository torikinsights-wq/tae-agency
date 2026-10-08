"use client";

import React from "react";
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
  FaRocket,
  FaPhoneSlash,
  FaCreditCard,
  FaStar,
  FaShareAlt,
  FaUserTie,
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
    descriptionBn: "রোগী সেচার মানবিক দিকটি বজায় রেখেই আমরা যোগাযোগ ও পুনরাবৃত্তিমূলক কাজগুলোকে দ্রুত ও গোছানো করতে এআই ব্যবহার করি।",
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

const automationAreas = [
  {
    icon: <FaUsers />,
    titleBn: "রোগী অর্জন (Patient Acquisition)",
    titleEn: "Patient Acquisition",
    items: [
      "ওয়েবসাইট ইনকোয়ারি (Website inquiries)",
      "সোশ্যাল মিডিয়া লিড (Social media leads)",
      "অ্যাডভার্টাইজিং লিড (Advertising leads)",
      "লিড ক্যাপচার (Lead capture)",
      "লিড কোয়ালিফিকেশন (Lead qualification)",
    ],
  },
  {
    icon: <FaComments />,
    titleBn: "রোগী যোগাযোগ (Patient Communication)",
    titleEn: "Patient Communication",
    items: [
      "এআই চ্যাট (AI chat)",
      "রুটিন এফএকিউ (Routine FAQs)",
      "হোয়াটসঅ্যাপ ওয়ার্কফ্লো (WhatsApp workflows)",
      "এসএমএস ওয়ার্কফ্লো (SMS workflows)",
      "ইমেইল ওয়ার্কফ্লো (Email workflows)",
      "অটোমেটেড ফলো-আপ (Automated follow-up)",
    ],
  },
  {
    icon: <FaCalendarAlt />,
    titleBn: "অ্যাপয়েন্টমেন্ট ম্যানেজমেন্ট",
    titleEn: "Appointments",
    items: [
      "বুকিং রিকোয়েস্ট (Booking requests)",
      "কনফার্মেশন (Confirmations)",
      "রিমাইন্ডার (Reminders)",
      "পুনরায় সময় নির্ধারণ (Rescheduling)",
      "বাতিলকরণ ফলো-আপ (Cancellation follow-up)",
      "রেসপন্সহীন ফলো-আপ (No-response follow-up)",
    ],
  },
  {
    icon: <FaSyncAlt />,
    titleBn: "রিটেনশন ও রিকল",
    titleEn: "Retention & Recall",
    items: [
      "রিকল রিমাইন্ডার (Recall reminders)",
      "নিষ্ক্রিয় রোগী রিঅ্যাক্টিভেশন (Inactive reactivation)",
      "ভিজিট পরবর্তী ফলো-আপ (Post-visit follow-up)",
      "পুনরায় আগমনকারী রোগী ক্যাম্পেইন",
      "রিভিউ রিকোয়েস্ট (Review requests)",
    ],
  },
];

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";

  return (
    <main className="min-h-screen bg-[#05070B] text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-24 px-6">
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

          <div className="mt-20 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <FaTooth className="text-cyan-300 text-2xl mb-4" />
              <p className="text-xs uppercase tracking-widest text-gray-500">{t("Focus", "ফোকাস")}</p>
              <h3 className="text-lg font-bold mt-2">{t("Dental Practice Automation", "ডেন্টাল প্র্যাকটিস অটোমেশন")}</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <FaRobot className="text-cyan-300 text-2xl mb-4" />
              <p className="text-xs uppercase tracking-widest text-gray-500">{t("Approach", "পদ্ধতি")}</p>
              <h3 className="text-lg font-bold mt-2">{t("AI + Connected Workflows", "এআই + সংযুক্ত ওয়ার্কফ্লো")}</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <FaHeart className="text-cyan-300 text-2xl mb-4" />
              <p className="text-xs uppercase tracking-widest text-gray-500">{t("Philosophy", "দর্শন")}</p>
              <h3 className="text-lg font-bold mt-2">{t("Human Care + Intelligent Automation", "মানবিক সেবা + ইন্টেলিজেন্ট অটোমেশন")}</h3>
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

            <p className="mt-5 text-gray-400 text-lg leading-relaxed">
              {t(
                "TAE.Agency exists to turn these repetitive processes into structured, connected workflows so your team can spend more of its attention where it matters most: patient care and human relationships.",
                "TAE.Agency এই পুনরাবৃত্তিমূলক প্রক্রিয়াগুলোকে একটি গোছানো ও সংযুক্ত ওয়ার্কফ্লোতে রূপান্তর করতে কাজ করে, যাতে আপনার টিম তাদের প্রধান মনোযোগ রোগীর যত্ন এবং মানব সম্পর্কের ওপর দিতে পারে।"
              )}
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-8">
              <FaBullseye className="text-3xl text-cyan-300 mb-5" />
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{t("Our Mission", "আমাদের মিশন")}</p>
              <h3 className="mt-3 text-2xl font-bold">{t("Make Dental Practice Automation Practical.", "ডেন্টাল অটোমেশনকে আরও বাস্তবসম্মত করা।")}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                {t(
                  "Our mission is to help dental practices reduce repetitive manual work, respond to patient inquiries more efficiently, organize communication, and build connected workflows.",
                  "আমাদের লক্ষ্য হলো ডেন্টাল প্র্যাকটিসগুলোর ম্যানুয়াল কাজের চাপ কমানো, রোগীর অনুসন্ধানে দ্রুত সাড়া দেওয়া এবং সংযুক্ত ওয়ার্কফ্লো তৈরি করা।"
                )}
              </p>
            </div>

            <div className="rounded-3xl border border-blue-400/10 bg-gradient-to-br from-blue-400/[0.08] to-transparent p-8">
              <FaEye className="text-3xl text-blue-300 mb-5" />
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{t("Our Vision", "আমাদের ভিশন")}</p>
              <h3 className="mt-3 text-2xl font-bold">{t("A More Connected Future for Dental Practices.", "ডেন্টাল প্র্যাকটিসের জন্য একটি সংযুক্ত ভবিষ্যৎ।")}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                {t(
                  "We envision dental practices where intelligent systems quietly handle repetitive workflows in the background while dental professionals remain focused on meaningful patient care.",
                  "আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে ইন্টেলিজেন্ট সিস্টেম ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে রুটিন কাজগুলো সামল করবে এবং প্রফেশনালরা রোগীর সেবায় মনোনিবেশ করবেন।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("What We Believe", "আমাদের বিশ্বাস")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              {t("Technology Should Make Your Practice", "প্রযুক্তি আপনার প্র্যাকটিসকে করবে")}
              <span className="block text-gray-500">{t("Simpler, Not More Complicated.", "সহজতর, জটিল নয়।")}</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((item, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-[#080B11] p-6 hover:border-cyan-400/30 transition">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-xl">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{isBangla ? item.titleBn : item.titleEn}</h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{isBangla ? item.descriptionBn : item.descriptionEn}</p>
              </div>
            ))}
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

      {/* FOUNDER SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Leadership", "লিডারশিপ")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">{t("The Person Behind TAE.Agency", "TAE.Agency-এর পেছনের কারিগর")}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden">
            <div className="grid lg:grid-cols-[380px_1fr]">
              <div className="relative min-h-[420px] bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent flex items-end justify-center overflow-hidden">
                <div className="absolute top-8 left-8 z-10">
                  <span className="px-3 py-1.5 rounded-full text-xs uppercase tracking-widest border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                    {t("Founder", "ফাউন্ডার")}
                  </span>
                </div>
                <Image
                  src="/Md Torikul Islam Ovi.png"
                  alt="Md Torikul Islam Ovi"
                  fill
                  className="object-cover object-bottom"
                />
              </div>

              <div className="p-8 md:p-12">
                <p className="text-cyan-300 text-sm uppercase tracking-[0.2em] font-bold">{t("About Me", "আমার সম্পর্কে")}</p>
                <h3 className="mt-3 text-3xl md:text-4xl font-extrabold">Md Torikul Islam Ovi</h3>
                <p className="mt-2 text-lg text-gray-400">{t("Automation Engineer & Founder — TAE.Agency", "অটোমেশন ইঞ্জিনিয়ার অ্যান্ড ফাউন্ডার — TAE.Agency")}</p>

                <div className="mt-8 space-y-5 text-gray-400 leading-relaxed">
                  <p>
                    {t(
                      "Assalamu Alaikum! I believe that modern businesses should not have to spend their valuable time repeating the same administrative tasks again and again.",
                      "আসসালামু আলাইকুম! আমি বিশ্বাস করি আধুনিক ব্যবসায় বারবার একই প্রশাসনিক কাজগুলোর পেছনে মূল্যবান সময় নষ্ট করা উচিত নয়।"
                    )}
                  </p>
                  <p>
                    {t(
                      "My focus through TAE.Agency is to help dental practices and service businesses identify those repetitive workflows and turn them into practical, connected automation systems.",
                      "TAE.Agency-এর মাধ্যমে আমার মূল লক্ষ্য হলো ডেন্টাল প্র্যাকটিস এবং সার্ভিস বিজনেসগুলোকে পুনরাবৃত্তিমূলক ওয়ার্কফ্লো থেকে মুক্ত করে কার্যকর অটোমেশন সিস্টেম গড়ে দেওয়া।"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Our Team", "আমাদের টিম")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">{t("The Team Behind Your Project", "আপনার প্রজেক্টের পেছনের এক্সপার্ট টিম")}</h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group rounded-3xl border border-white/10 bg-[#080B11] overflow-hidden hover:border-cyan-400/25 transition">
                <div className="relative h-72 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-bottom group-hover:scale-[1.02] transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-cyan-300 text-sm font-semibold">{member.role}</p>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">{isBangla ? member.descriptionBn : member.descriptionEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-28 px-6">
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