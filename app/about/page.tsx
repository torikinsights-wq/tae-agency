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
  FaNetworkWired,
  FaUserMd,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaLayerGroup,
  FaChartLine,
  FaWhatsapp,
  FaClock,
  FaChevronDown,
  FaUserTie,
  FaRocket,
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

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";
  
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);

  const toggleFaqItem = (index: number) => {
    setOpenFaqItem((current) => (current === index ? null : index));
  };

  const faqs = [
    {
      q: t("What exactly does TAE.Agency provide?", "TAE.Agency ঠিক কী প্রদান করে?"),
      a: t(
        "TAE.Agency designs and implements AI-powered automation systems for dental practices. Depending on the clinic's needs, this can include patient acquisition, communication, appointment workflows, treatment follow-up, recall, reactivation, reputation workflows, and marketing automation.",
        "TAE.Agency ডেন্টাল প্র্যাকটিসের জন্য এআই-চালিত অটোমেশন সিস্টেম ডিজাইন ও ইমপ্লিমেন্ট করে। ক্লিনিকের প্রয়োজনের ওপর ভিত্তি করে এতে পেশেন্ট অ্যাকুইজিশন, কমিউনিকেশন, অ্যাপয়েন্টমেন্ট ওয়ার্কফ্লো, ট্রিটমেন্ট ফলো-আপ, রিকাল, রিয়াক্টিভেশন, রেপুটেশন এবং মার্কেটিং অটোমেশন অন্তর্ভুক্ত থাকতে পারে।"
      ),
    },
    {
      q: t("Do you only provide AI chatbots?", "আপনারা কি শুধু এআই চ্যাটবট প্রদান করেন?"),
      a: t(
        "No. A chatbot can be one part of an automation system, but TAE.Agency focuses on connecting the wider patient journey—from inquiry and follow-up to appointment communication, recall, and reactivation.",
        "না। চ্যাটবট অটোমেশন সিস্টেমের একটি অংশ হতে পারে, তবে TAE.Agency বৃহত্তর পেশেন্ট জার্নি কানেক্ট করার ওপর ফোকাস করে—ইনকোয়ারি ও ফলো-আপ থেকে শুরু করে অ্যাপয়েন্টমেন্ট যোগাযোগ, রিকাল এবং রিয়াক্টিভেশন পর্যন্ত।"
      ),
    },
    {
      q: t("Can AI handle medical or dental diagnosis?", "এআই কি মেডিকেল বা ডেন্টাল ডায়াগনোসিস হ্যান্ডেল করতে পারে?"),
      a: t(
        "No. AI workflows are intended for routine, non-clinical communication. Diagnosis, treatment decisions, clinical advice, and patient care remain the responsibility of qualified dental professionals.",
        "না। এআই ওয়ার্কফ্লো শুধুমাত্র রুটিন ও অ-ক্লিনিক্যাল যোগাযোগের জন্য। ডায়াগনোসিস, ট্রিটমেন্ট ডিসিশন, ক্লিনিক্যাল পরামর্শ এবং পেশেন্ট কেয়ারের দায়িত্ব সম্পূর্ণভাবে যোগ্য ডেন্টাল পেশেন্ট প্রফেশনালদের।"
      ),
    },
    {
      q: t("Can you automate appointment reminders?", "আপনারা কি অ্যাপয়েন্টমেন্ট রিমাইন্ডার অটোমেট করতে পারেন?"),
      a: t(
        "Yes, depending on the tools and workflow setup. Appointment confirmations, reminders, rescheduling communication, cancellation follow-up, and related communication workflows can be automated.",
        "হ্যাঁ, টুলস ও ওয়ার্কফ্লো সেটআপ অনুযায়ী এটি করা সম্ভব। অ্যাপয়েন্টমেন্ট কনফার্মেশন, রিমাইন্ডার, রিডিউল যোগাযোগ, ক্যান্সেলেশন ফলো-আপ ইত্যাদি অটোমেট করা যায়।"
      ),
    },
    {
      q: t("Can you automate WhatsApp or SMS communication?", "আপনারা কি হোয়াটসঅ্যাপ বা এসএমএস কমিউনিকেশন অটোমেট করতে পারেন?"),
      a: t(
        "Communication channels can be connected depending on the tools, APIs, account permissions, and workflow requirements of the practice.",
        "প্র্যাকটিসের টুলস, এপিআই, অ্যাকাউন্ট পারমিশন এবং ওয়ার্কফ্লো রিকোয়ারমেন্ট অনুযায়ী যোগাযোগ চ্যানেলগুলো কানেক্ট করা যেতে পারে।"
      ),
    },
    {
      q: t("Can you reactivate old patients?", "আপনারা কি পুরনো রোগীদের রিয়াক্টিভেট করতে পারেন?"),
      a: t(
        "TAE.Agency can design structured reactivation and recall workflows for eligible inactive patients. The exact workflow depends on the clinic's patient database, consent practices, communication channels, and goals.",
        "TAE.Agency উপযুক্ত নিষ্ক্রিয় রোগীদের জন্য স্ট্রাকচারড রিয়াক্টিভেশন এবং রিকাল ওয়ার্কফ্লো ডিজাইন করতে পারে। সঠিক ওয়ার্কফ্লো ক্লিনিকের পেশেন্ট ডেটাবেস এবং লক্ষ্যের ওপর নির্ভর করে।"
      ),
    },
    {
      q: t("Will automation replace my receptionist?", "অটোমেশন কি আমাদের রিসেপশনিস্টকে প্রতিস্থাপন করবে?"),
      a: t(
        "The goal is not to replace your reception team. Automation handles repetitive workflows so your staff can spend more time on patient care, complex situations, hospitality, and human communication.",
        "এর লক্ষ্য রিসেপশন টিমকে প্রতিস্থাপন করা নয়। অটোমেশন রুটিন কাজগুলো হ্যান্ডেল করে যাতে আপনার স্টাফরা পেশেন্ট কেয়ার, জটিল পরিস্থিতি এবং মানবীয় যোগাযোগে বেশি সময় দিতে পারেন।"
      ),
    },
    {
      q: t("Is the automation system the same for every clinic?", "প্রতিটি ক্লিনিকের জন্য কি অটোমেশন সিস্টেম একই রকম হয়?"),
      a: t(
        "No. Each dental practice has different services, patient sources, booking processes, communication channels, team structures, and goals. TAE.Agency designs workflows around the clinic.",
        "না। প্রতিটি ডেন্টাল প্র্যাকটিসের সার্ভিস, পেশেন্ট সোর্স, বুকিং প্রসেস, টিম স্ট্রাকচার এবং লক্ষ্য ভিন্ন। TAE.Agency ক্লিনিকের প্রয়োজন অনুযায়ী কাস্টম ওয়ার্কফ্লো ডিজাইন করে।"
      ),
    },
    {
      q: t("How do we know what should be automated?", "আমরা কীভাবে বুঝব কোন কাজগুলো অটোমেট করা উচিত?"),
      a: t(
        "The process starts by reviewing your existing patient journey and operational workflows. We identify repetitive tasks, communication gaps, and areas where automation could realistically improve consistency and efficiency.",
        "প্রক্রিয়াটি আপনার বর্তমান পেশেন্ট জার্নি এবং অপারেশনাল ওয়ার্কফ্লো পর্যালোচনার মাধ্যমে শুরু হয়। আমরা রুটিন কাজ, কমিউনিকেশন গ্যাপ এবং অটোমেশনের সুযোগগুলো চিহ্নিত করি।"
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070B] text-white overflow-hidden">
      
      {/* VIBRANT TOP CTA BAR */}
      <div className="w-full bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-500/40 py-3 px-4 sm:px-6 shadow-lg shadow-cyan-500/15">
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
      <section className="relative pt-20 pb-16 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
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
        </div>
      </section>

      {/* MISSION & VISION SECTION (CENTERED TEXT & RESTORED) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-8 text-center">
            <div className="text-cyan-400 text-3xl p-3 bg-cyan-500/10 w-fit mx-auto rounded-xl border border-cyan-500/20 mb-4">
              <FaBullseye />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{t("Our Mission", "আমাদের মিশন")}</p>
            <h3 className="mt-3 text-2xl font-bold">{t("Make Dental Practice Automation Practical.", "ডেন্টাল অটোমেশনকে আরও বাস্তবসম্মত করা।")}</h3>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm">
              {t(
                "To free businesses from manual follow-up hassles. Converting every lead instantly through automated text-backs, AI chatbots, and smart pipelines.",
                "ব্যবসাগুলোকে ম্যানুয়াল ফলো-আপের ঝামেলা থেকে মুক্তি দেওয়া। ইনস্ট্যান্ট অটো-টেক্সট ব্যাক, এআই চ্যাটবট এবং স্মার্ট পাইপলাইনের মাধ্যমে প্রতিটি লিডকে দ্রুত কনভার্ট করা।"
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/10 bg-gradient-to-br from-blue-400/[0.08] to-transparent p-8 text-center">
            <div className="text-blue-400 text-3xl p-3 bg-blue-500/10 w-fit mx-auto rounded-xl border border-blue-500/20 mb-4">
              <FaRocket />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{t("Our Vision", "আমাদের ভিশন")}</p>
            <h3 className="mt-3 text-2xl font-bold">{t("A More Connected Future for Dental Practices.", "ডেন্টাল প্র্যাকটিসের জন্য একটি সংযুক্ত ভবিষ্যৎ।")}</h3>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm">
              {t(
                "Creating an automated digital ecosystem where every local business can exponentially scale sales and growth using cutting-edge AI technology.",
                "একটি স্বয়ংক্রিয় ডিজিটাল ইকোসিস্টেম তৈরি করা, যেখানে এআই প্রযুক্তির সাহায্যে ছোট-বড় প্রতিটি লোকাল বিজনেস তাদের সেলস ও গ্রোথ বহুগুণ বাড়িয়ে নিতে পারে।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER / ABOUT ME SECTION */}
      <section className="py-20 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Leadership", "লিডারশিপ")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">{t("The Person Behind TAE.Agency", "TAE.Agency-এর পেছনের কারিগর")}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-[380px_1fr] items-center">
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
                  className="object-contain object-bottom"
                />
              </div>

              <div className="p-8 md:p-12 space-y-5">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
                  <FaUserTie /> {t("About Me", "আমার সম্পর্কে")}
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-white">Md Torikul Islam Ovi</h3>
                
                <p className="text-cyan-400 font-semibold text-base">
                  {t("Automation Engineer & Founder — TAE.Agency", "অটোমেশন ইঞ্জিনিয়ার অ্যান্ড ফাউন্ডার — TAE.Agency")}
                </p>

                <div className="space-y-3 text-slate-300 text-base leading-relaxed pt-2">
                  <p>
                    {t(
                      "Assalamu Alaikum! I believe that to thrive in today's competitive service industry, moving beyond traditional manual methods and embracing modern technology is crucial.",
                      "আসসালামু আলাইকুম! আমি বিশ্বাস করি বর্তমান প্রতিযোগিতায় যেকোনো সার্ভিসের ব্যবসায় টিক থাকতে হলে গতানুগতিক ম্যানুয়াল পদ্ধতির বাইরে এসে আধুনিক প্রযুক্তির ছোঁয়া নেওয়া অত্যন্ত জরুরি।"
                    )}
                  </p>
                  <p>
                    {t(
                      "My core mission is to free local business and dental practices from daily operational hurdles and follow-up stress. We build powerful AI automation ecosystems for your business that work 24/7 like an expert digital receptionist and sales specialist—ensuring not a single lead is ever lost.",
                      "আমার মূল লক্ষ্য হলো লোকাল বিজনেস ও ডেন্টাল প্র্যাকটিসগুলোকে দৈনন্দিন কর্মব্যস্ততা ও ফলো-আপের ঝামেলা থেকে মুক্তি দেওয়া। আমরা আপনার বিজনেসে এমন এক শক্তিশালী এআই অটোমেশন ইকোসিস্টেম তৈরি করে দিই, যা একজন দক্ষ ডিজিটাল রিসিপশনিস্ট ও সেলস এক্সপার্টের মতো ২৪ ঘণ্টা কাজ করে—যাতে আপনার একটি লিডও কখনোই হাতছাড়া না হয়।"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST (CENTERED TEXT AS REQUESTED) */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Why We Exist", "আমরা কেন আছি")}</p>

        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
          {t("Your Dental Team Should Focus on Patients.", "আপনার ডেন্টাল টিম ফোকাস করবে রোগীর সেবায়।")}
          <span className="block text-gray-500 mt-2">{t("Not Repetitive Administrative Work.", "পুনরাবৃত্তিমূলক প্রশাসনিক কাজে নয়।")}</span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          {t(
            "Dental practices manage dozens of repetitive interactions every day — inquiries, questions, appointment requests, confirmations, reminders, follow-ups, recalls, and reactivation.",
            "ডেন্টাল প্র্যাকটিসগুলোকে প্রতিদিন অসংখ্য পুনরাবৃত্তিমূলক কাজের মুখোমুখি হতে হয়—ইনকোয়ারি, প্রশ্ন, অ্যাপয়েন্টমেন্ট রিকোয়েস্ট, কনফার্মেশন, রিমাইন্ডার, ফলো-আপ এবং রিকল।"
          )}
        </p>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase">{t("Our Approach", "আমাদের কর্মপদ্ধতি")}</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              {t("We Don't Start With Software.", "আমরা সফটওয়্যার দিয়ে শুরু করি না।")}
              <span className="block text-gray-500">{t("We Start With Your Workflow.", "আমরা শুরু করি আপনার ওয়ার্কফ্লো দিয়ে।")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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

      {/* TEAM SECTION */}
      <section className="py-20 px-6 bg-white/[0.015] border-y border-white/5">
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

      {/* FAQ SECTION (EXTENDED & DETAILED MATCHING SERVICES PAGE) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              FAQ
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">
              {t("Questions About Our Services", "আমাদের সার্ভিসসমূহ সম্পর্কে প্রশ্ন")}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              {t(
                "Learn more about how our AI-powered automation systems work for dental practices and service businesses. Click below to explore our detailed answers.",
                "আমাদের এআই-চালিত অটোমেশন সিস্টেমগুলো কীভাবে ডেন্টাল প্র্যাকটিস এবং সার্ভিস বিজনেসের জন্য কাজ করে সে সম্পর্কে আরও জানুন। বিস্তারিত উত্তর দেখতে নিচে ক্লিক করুন।"
              )}
            </p>

            <button
              type="button"
              onClick={() => setIsFaqOpen(!isFaqOpen)}
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-bold px-7 py-3.5 rounded-2xl shadow-xl transition-all duration-300"
            >
              <span>{isFaqOpen ? t("Hide Questions", "প্রশ্নগুলো লুকান") : t("View All Questions", "সকল প্রশ্নগুলো দেখুন")}</span>
              <FaChevronDown className={`transition-transform duration-300 ${isFaqOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className={`grid transition-all duration-500 ${isFaqOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaqItem === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaqItem(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-5 hover:text-cyan-400 transition-colors"
                    >
                      <span className="text-white font-bold text-sm sm:text-base">
                        {faq.q}
                      </span>

                      <FaChevronDown
                        className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-1 text-slate-400 text-sm leading-relaxed border-t border-slate-800/70">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
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