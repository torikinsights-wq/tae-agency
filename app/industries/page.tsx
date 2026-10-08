"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import {
  FaTooth,
  FaRegComments,
  FaCalendarCheck,
  FaBell,
  FaUserPlus,
  FaChartLine,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaEnvelope,
  FaWhatsapp,
  FaUsers,
  FaHeart,
  FaClock,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

export default function IndustriesPage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";

  const practiceTypes = [
    {
      title: t("General & Family Dentistry", "জেনারেল ও ফ্যামিলি ডেন্টিস্ট্রি"),
      description: t(
        "Organize new patient inquiries, appointment requests, confirmations, reminders, and routine follow-ups.",
        "নতুন রোগীর ইনকোয়ারি, অ্যাপয়েন্টমেন্ট রিকোয়েস্ট, কনফার্মেশন, রিমাইন্ডার এবং রুটিন ফলো-আপগুলো সুসংগঠিত করুন।"
      ),
      icon: FaTooth,
      tags: [t("Patient inquiries", "পেশেন্ট ইনকোয়ারি"), t("Appointments", "অ্যাপয়েন্টমেন্ট"), t("Recall", "রিকল")],
    },
    {
      title: t("Cosmetic Dentistry", "কসমেটিক ডেন্টিস্ট্রি"),
      description: t(
        "Support inquiries about cosmetic services with timely responses, consultation requests, and structured follow-up.",
        "সময়মতো রেসপন্স, কনসালটেশন রিকোয়েস্ট এবং স্ট্রাকচারড ফলো-আপের মাধ্যমে কসমেটিক সার্ভিসের ইনকোয়ারিগুলোকে সাপোর্ট দিন।"
      ),
      icon: FaUserPlus,
      tags: [t("Consultation leads", "কনসালটেশন লিড"), t("Follow-ups", "ফলো-আপ"), t("Lead management", "লিড ম্যানেজমেন্ট")],
    },
    {
      title: t("Orthodontic Practices", "অর্থোডন্টিক প্র্যাকটিস"),
      description: t(
        "Help manage consultation inquiries, appointment communication, and ongoing administrative reminders.",
        "কনসালটেশন ইনকোয়ারি, অ্যাপয়েন্টমেন্ট যোগাযোগ এবং প্রশাসনিক রিমাইন্ডারগুলো ম্যানেজ করতে সাহায্য করুন।"
      ),
      icon: FaCalendarCheck,
      tags: [t("Consultations", "কনসালটেশন"), t("Reminders", "রিমাইন্ডার"), t("Communication", "কমিউনিকেশন")],
    },
    {
      title: t("Multi-Dentist Practices", "মাল্টি-ডেন্টিস্ট প্র্যাকটিস"),
      description: t(
        "Connect communication and appointment workflows to help teams manage patient requests more consistently.",
        "টিমকে আরও ধারাবাহিকভাবে রোগীর অনুরোধগুলো পরিচালনা করতে সহায়তা করার জন্য যোগাযোগ এবং অ্যাপয়েন্টমেন্ট ওয়ার্কফ্লো সংযুক্ত করুন।"
      ),
      icon: FaUsers,
      tags: [t("Team workflows", "টিম ওয়ার্কফ্লো"), t("Coordination", "সমন্বয়"), t("Organization", "সংগঠন")],
    },
    {
      title: t("Multi-Location Dental Groups", "মাল্টি-লোকেশন ডেন্টাল গ্রুপ"),
      description: t(
        "Create repeatable workflows across locations while adapting communication and processes to each practice.",
        "যোগাযোগ এবং প্রক্রিয়াগুলোকে প্রতিটি প্র্যাকটিসের সাথে মানানসই করে বিভিন্ন লোকেশনে পুনরাবৃত্তিযোগ্য ওয়ার্কফ্লো তৈরি করুন।"
      ),
      icon: FaChartLine,
      tags: [t("Scalable workflows", "স্কেলেবল ওয়ার্কফ্লো"), t("Consistency", "ধারাবাহিকতা"), t("Reporting", "রিপোর্টিং")],
    },
  ];

  const challenges = [
    {
      number: "01",
      title: t("Missed Patient Inquiries", "মিসড পেশেন্ট ইনকোয়ারি"),
      description: t(
        "Website, social media, and messaging inquiries can go unanswered during busy periods.",
        "ব্যস্ত সময়ের মধ্যে ওয়েবসাইট, সোশ্যাল মিডিয়া এবং মেসেজিংয়ের ইনকোয়ারিগুলোর উত্তর দেওয়া সম্ভব হয় না।"
      ),
      solution: t(
        "Use automated acknowledgments, inquiry capture, and timely follow-up workflows.",
        "অটোমেটেড অ্যাকনোলজমেন্ট, ইনকোয়ারি ক্যাপচার এবং সময়মতো ফলো-আপ ওয়ার্কফ্লো ব্যবহার করুন।"
      ),
      icon: FaRegComments,
    },
    {
      number: "02",
      title: "Slow Follow-Up",
      description: t(
        "Potential patients may lose interest when responses and follow-ups are delayed.",
        "রেসপন্স এবং ফলো-আপে দেরি হলে সম্ভাব্য রোগীরা আগ্রহ হারিয়ে ফেলতে পারেন।"
      ),
      solution: t(
        "Create structured follow-up sequences with appropriate timing and handoff to staff.",
        "সঠিক সময়ে এবং স্টাফদের কাছে সহজে হস্তান্তরের ব্যবস্থা সহ স্ট্রাকচারড ফলো-আপ সিকোয়েন্স তৈরি করুন।"
      ),
      icon: FaClock,
    },
    {
      number: "03",
      title: t("Appointment Communication", "অ্যাপয়েন্টমেন্ট যোগাযোগ"),
      description: t(
        "Manually managing confirmations, reminders, cancellations, and rescheduling takes time.",
        "কনফার্মেশন, রিমাইন্ডার, ক্যান্সেলেশন এবং রিডিউল ম্যানুয়ালি ম্যানেজ করতে অনেক সময় নষ্ট হয়।"
      ),
      solution: t(
        "Automate routine appointment communications and connect them with your booking process.",
        "রুটিন অ্যাপয়েন্টমেন্ট যোগাযোগগুলো অটোমেট করুন এবং বুকিং প্রক্রিয়ার সাথে সংযুক্ত করুন।"
      ),
      icon: FaCalendarCheck,
    },
    {
      number: "04",
      title: t("Inactive Patients", "নিষ্ক্রিয় রোগী"),
      description: t(
        "Patients may not return when recall reminders and follow-up opportunities are overlooked.",
        "রিকাল রিমাইন্ডার এবং ফলো-আপের সুযোগগুলো উপেক্ষিত হলে রোগীরা আর ফিরে আসেন না।"
      ),
      solution: t(
        "Set up recall reminders and reactivation campaigns based on your practice's workflow.",
        "আপনার প্র্যাকটিসের ওয়ার্কফ্লোর ওপর ভিত্তি করে রিকাল রিমাইন্ডার এবং রিয়াক্টিভেশন ক্যাম্পেইন সেটআপ করুন।"
      ),
      icon: FaSyncAlt,
    },
  ];

  const capabilities = [
    {
      title: t("Patient Acquisition Automation", "পেশেন্ট অ্যাকুইজিশন অটোমেশন"),
      description: t(
        "Capture and organize inquiries from your website, social channels, and other connected lead sources.",
        "আপনার ওয়েবসাইট, সোশ্যাল চ্যানেল এবং অন্যান্য সংযুক্ত লিড সোর্স থেকে ইনকোয়ারিগুলো ক্যাপচার ও অর্গানাইজ করুন।"
      ),
      icon: FaUserPlus,
    },
    {
      title: t("AI Dental Patient Support", "এআই ডেন্টাল পেশেন্ট সাপোর্ট"),
      description: t(
        "Respond to routine non-clinical questions about clinic hours, location, services, and appointment information.",
        "ক্লিনিকের সময়সূচী, লোকেশন, সার্ভিস এবং অ্যাপয়েন্টমেন্ট সম্পর্কিত রুটিন অ-ক্লিনিক্যাল প্রশ্নের উত্তর দিন।"
      ),
      icon: FaRobot,
    },
    {
      title: t("Appointment Booking & Reminders", "অ্যাপয়েন্টমেন্ট বুকিং ও রিমাইন্ডার"),
      description: t(
        "Support appointment requests, confirmations, reminders, and rescheduling through connected workflows.",
        "সংযুক্ত ওয়ার্কফ্লোর মাধ্যমে অ্যাপয়েন্টমেন্ট রিকোয়েস্ট, কনফার্মেশন, রিমাইন্ডার এবং রিডিউল সাপোর্ট করুন।"
      ),
      icon: FaCalendarCheck,
    },
    {
      title: t("Treatment Follow-Up Automation", "ট্রিটমেন্ট ফলো-আপ অটোমেশন"),
      description: t(
        "Help staff send appropriate administrative follow-ups and approved patient communication after visits.",
        "ভিজিটের পর স্টাফদের উপযুক্ত প্রশাসনিক ফলো-আপ এবং অনুমোদিত রোগী যোগাযোগ পাঠাতে সাহায্য করুন।"
      ),
      icon: FaBell,
    },
    {
      title: t("Patient Recall & Reactivation", "পেশেন্ট রিকাল ও রিয়াক্টিভেশন"),
      description: t(
        "Organize recall reminders and outreach to patients who may be due for another visit.",
        "যাদের আবার ভিজিট করার সময় হয়েছে, তাদের জন্য রিকাল রিমাইন্ডার এবং আউটরিচ গুছিয়ে রাখুন।"
      ),
      icon: FaHeart,
    },
    {
      title: t("Dental Marketing Automation", "ডেন্টাল মার্কেটিং অটোমেশন"),
      description: t(
        "Connect lead capture, campaign follow-ups, review requests, and marketing workflows.",
        "লিড ক্যাপচার, ক্যাম্পেইন ফলো-আপ, রিভিউ রিকোয়েস্ট এবং মার্কেটিং ওয়ার্কফ্লো সংযুক্ত করুন।"
      ),
      icon: FaChartLine,
    },
  ];

  const journey = [
    t("New Inquiry", "নতুন ইনকোয়ারি"),
    t("Instant Response", "তাৎক্ষণিক রেসপন্স"),
    t("Follow-Up", "ফলো-আপ"),
    t("Appointment", "অ্যাপয়েন্টমেন্ট"),
    t("Reminder", "রিমাইন্ডার"),
    t("Patient Visit", "পেশেন্ট ভিজিট"),
    t("Recall", "রিকাল"),
    t("Reactivation", "রিয়াক্টিভেশন"),
  ];

  const principles = [
    {
      title: t("Faster Communication", "দ্রুত যোগাযোগ"),
      description: t(
        "Help patients receive timely responses without requiring your team to manually handle every routine message.",
        "আপনার টিমকে প্রতিটি রুটিন মেসেজ ম্যানুয়ালি হ্যান্ডেল না করেই রোগীদের সময়মতো রেসপন্স পেতে সাহায্য করুন।"
      ),
      icon: FaClock,
    },
    {
      title: t("More Organized Workflows", "আরও সুসংগঠিত ওয়ার্কফ্লো"),
      description: t(
        "Keep inquiries, appointment communication, and follow-up tasks organized across connected systems.",
        "ইনকোয়ারি, অ্যাপয়েন্টমেন্ট যোগাযোগ এবং ফলো-আপ কাজগুলোকে সংযুক্ত সিস্টেমের মাধ্যমে সুসংগঠিত রাখুন।"
      ),
      icon: FaClipboardCheck,
    },
    {
      title: t("Better Patient Continuity", "উন্নত পেশেন্ট কন্টিনিউটি"),
      description: t(
        "Create consistent recall and reactivation processes that support ongoing patient relationships.",
        "ধারাবাহিক রিকাল এবং রিয়াক্টিভেশন প্রক্রিয়া তৈরি করুন যা চলমান রোগী সম্পর্ককে সমর্থন করে।"
      ),
      icon: FaHeart,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070B] text-white">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.09] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300">
              <FaTooth />
              <span>{t("Industry Solutions for Dental Practices", "ডেন্টাল প্র্যাকটিসের জন্য ইন্ডাস্ট্রি সলিউশন")}</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {t("Automation Built Around Your", "আপনার ডেন্টাল প্র্যাকটিসের চারপাশে")}{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                {t("Dental Practice.", "তৈরি অটোমেশন।")}
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
              {t(
                "Every dental practice has different patient communication and operational needs. TAE.Agency helps connect patient inquiries, appointment workflows, follow-ups, and recall processes through practical AI-powered automation.",
                "প্রতিটি ডেন্টাল প্র্যাকটিসের রোগী যোগাযোগ এবং অপারেশনাল চাহিদা আলাদা। TAE.Agency ব্যবহারিক এআই-চালিত অটোমেশনের মাধ্যমে পেশেন্ট ইনকোয়ারি, অ্যাপয়েন্টমেন্ট ওয়ার্কফ্লো, ফলো-আপ এবং রিকাল প্রক্রিয়াগুলোকে সংযুক্ত করতে সাহায্য করে।"
              )}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-[#041016] transition hover:bg-cyan-300"
              >
                {t("Book a Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
                <FaArrowRight />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                {t("Explore Our Services", "আমাদের সার্ভিসগুলো দেখুন")}
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                {t("Built for dental workflows", "ডেন্টাল ওয়ার্কফ্লোর জন্য তৈরি")}
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                {t("AI + human oversight", "এআই + মানুষের তত্ত্বাবধান")}
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                {t("Customized to your process", "আপনার প্রক্রিয়ার সাথে কাস্টমাইজড")}
              </span>
            </div>
          </div>

          {/* PATIENT JOURNEY */}
          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:mt-20 sm:p-8">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                {t("The Connected Patient Journey", "কানেক্টেড পেশেন্ট জার্নি")}
              </p>
              <h2 className="mt-3 text-xl font-semibold sm:text-2xl">
                {t("From First Inquiry to Returning Patient", "প্রথম ইনকোয়ারি থেকে ফিরে আসা রোগী পর্যন্ত")}
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {journey.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-3 text-center text-xs font-medium text-gray-200 sm:px-4 sm:text-sm">
                    <span className="mb-1 block text-[10px] text-cyan-300">
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </div>
                  {index < journey.length - 1 && (
                    <FaArrowRight className="hidden text-xs text-cyan-500/70 md:block" />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm leading-6 text-gray-500">
              {t(
                "Connect the steps that matter most to your practice, using suitable tools and workflows.",
                "উপযুক্ত টুলস এবং ওয়ার্কফ্লো ব্যবহার করে আপনার প্র্যাকটিসের জন্য সবচেয়ে গুরুত্বপূর্ণ ধাপগুলো সংযুক্ত করুন।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY INDUSTRY */}
      <section className="border-y border-white/[0.06] bg-[#090D13] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t("Our Primary Industry", "আমাদের প্রধান ইন্ডাস্ট্রি")}
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              {t("Specialized Automation for", "বিশেষায়িত অটোমেশন")}{" "}
              <span className="text-cyan-300">{t("Dental Clinics", "ডেন্টাল ক্লিনিক")}</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {t(
                "Dental teams need to balance patient care with inquiries, appointment coordination, follow-ups, and recall communication. We help reduce repetitive administrative work by connecting these processes into practical automation systems.",
                "ডেন্টাল টিমগুলোকে রোগীর যত্নের পাশাপাশি ইনকোয়ারি, অ্যাপয়েন্টমেন্ট সমন্বয়, ফলো-আপ এবং রিকাল যোগাযোগ সামলাতে হয়। আমরা এই প্রক্রিয়াগুলোকে ব্যবহারিক অটোমেশন সিস্টেমে সংযুক্ত করে পুনরাবৃত্তিমূলক প্রশাসনিক কাজ কমাতে সাহায্য করি।"
              )}
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              {t(
                "Our goal is to help your team respond more consistently, organize patient communication, and maintain a clearer process from the first inquiry through ongoing patient engagement.",
                "আমাদের লক্ষ্য হলো আপনার টিমকে আরও ধারাবাহিকভাবে রেসপন্স করতে, রোগী যোগাযোগ গুছিয়ে রাখতে এবং প্রথম ইনকোয়ারি থেকে শুরু করে চলমান এনগেজমেন্ট পর্যন্ত একটি পরিষ্কার প্রক্রিয়া বজায় রাখতে সহায়তা করা।"
              )}
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              {t("Explore Dental Automation Services", "ডেন্টাল অটোমেশন সার্ভিসগুলো দেখুন")}
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: t("Patient Inquiries", "পেশেন্ট ইনকোয়ারি"),
                text: t("Capture and organize incoming inquiries.", "আগত ইনকোয়ারিগুলো ক্যাপচার ও অর্গানাইজ করুন।"),
                icon: FaRegComments,
              },
              {
                title: t("Appointment Workflows", "অ্যাপয়েন্টমেন্ট ওয়ার্কফ্লো"),
                text: t("Coordinate requests, confirmations, and reminders.", "অনুরোধ, কনফার্মেশন এবং রিমাইন্ডার সমন্বয় করুন।"),
                icon: FaCalendarCheck,
              },
              {
                title: t("Follow-Up Systems", "ফলো-আপ সিস্টেম"),
                text: t("Create consistent communication sequences.", "ধারাবাহিক যোগাযোগের সিকোয়েন্স তৈরি করুন।"),
                icon: FaBell,
              },
              {
                title: t("Patient Retention", "পেশেন্ট রিটেনশন"),
                text: t("Organize recall and reactivation outreach.", "রিকাল এবং রিয়াক্টিভেশন আউটরিচ গুছিয়ে রাখুন।"),
                icon: FaHeart,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-400/30"
                >
                  <Icon className="text-2xl text-cyan-300" />
                  <h3 className="mt-5 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRACTICE TYPES */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t("Who We Support", "আমরা যাদের সাপোর্ট দিই")}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {t("Designed for Different Types of Dental Practices", "বিভিন্ন ধরণের ডেন্টাল প্র্যাকটিসের জন্য ডিজাইন করা")}
            </h2>
            <p className="mt-5 leading-8 text-gray-400">
              {t(
                "Whether your practice focuses on general dentistry, specialist consultations, or multiple locations, your automation should reflect how your team actually works.",
                "আপনার প্র্যাকটিস জেনারেল ডেন্টিস্ট্রি, বিশেষজ্ঞ কনসালটেশন বা একাধিক লোকেশনের ওপর ফোকাস করুক না কেন, আপনার অটোমেশনটি আপনার টিমের কাজের পদ্ধতির সাথে সামঞ্জস্যপূর্ণ হওয়া উচিত।"
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practiceTypes.map((practice) => {
              const Icon = practice.icon;

              return (
                <article
                  key={practice.title}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.08]">
                    <Icon className="text-xl text-cyan-300" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {practice.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {practice.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {practice.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-y border-white/[0.06] bg-[#090D13] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t("The Challenges We Address", "যে চ্যালেঞ্জগুলো আমরা সমাধান করি")}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {t("Where Dental Practice Automation Can Help", "যেখানে ডেন্টাল প্র্যাকটিস অটোমেশন সাহায্য করতে পারে")}
            </h2>
            <p className="mt-5 leading-8 text-gray-400">
              {t(
                "Repetitive communication and disconnected workflows can make patient administration harder than it needs to be. The right automation can help your team handle these tasks more consistently.",
                "পুনরাবৃত্তিমূলক যোগাযোগ এবং বিচ্ছিন্ন ওয়ার্কফ্লো পেশেন্ট প্রশাসনকে আরও জটিল করে তুলতে পারে। সঠিক অটোমেশন আপনার টিমকে এই কাজগুলো আরও ধারাবাহিকভাবে পরিচালনা করতে সাহায্য করতে পারে।"
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.08]">
                      <Icon className="text-xl text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-widest text-cyan-300">
                        {item.number}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      {t("How Automation Helps", "অটোমেশন যেভাবে সাহায্য করে")}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-300">
                      {item.solution}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t("What We Automate", "আমরা যা অটোমেট করি")}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {t("One Connected System. Six Core Capabilities.", "একটি সংযুক্ত সিস্টেম। ছয়টি মূল সক্ষমতা।")}
            </h2>
            <p className="mt-5 leading-8 text-gray-400">
              {t(
                "Choose the workflows that match your practice today, then expand your automation as your operational needs evolve.",
                "আজই আপনার প্র্যাকটিসের সাথে মিলে যায় এমন ওয়ার্কফ্লো বেছে নিন, এবং সময়ের সাথে অপারেশনাল চাহিদা বাড়ার সাথে সাথে অটোমেশন প্রসারিত করুন।"
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-400/30"
                >
                  <Icon className="text-2xl text-cyan-300" />
                  <h3 className="mt-5 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {t("View All Services", "সকল সার্ভিস দেখুন")}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-white/[0.06] bg-[#090D13] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t("Why Automation Matters", "অটোমেশন কেন গুরুত্বপূর্ণ")}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {t("Give Your Team More Room to Focus on Patients", "আপনার টিমকে রোগীদের ওপর ফোকাস করার সুযোগ দিন")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
                >
                  <Icon className="text-3xl text-cyan-300" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 bg-[#05070B] p-5 sm:p-6">
            <FaShieldAlt className="mt-1 shrink-0 text-xl text-cyan-300" />
            <div>
              <h3 className="font-semibold">
                {t("Automation With Appropriate Human Oversight", "উপযুক্ত মানব তত্ত্বাবধান সহ অটোমেশন")}
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-400">
                {t(
                  "AI can assist with routine administrative communication, but diagnosis, treatment recommendations, and clinical decisions remain the responsibility of qualified dental professionals. Patient information should be handled through appropriately configured systems and access controls.",
                  "এআই রুটিন প্রশাসনিক যোগাযোগে সাহায্য করতে পারে, তবে ডায়াগনোসিস, ট্রিটমেন্ট সুপারিশ এবং ক্লিনিক্যাল সিদ্ধান্তের দায়িত্ব যোগ্য ডেন্টাল পেশেন্ট প্রফেশনালদের। রোগীর তথ্য যথাযথভাবে কনফিগার করা সিস্টেম এবং অ্যাক্সেস কন্ট্রোলের মাধ্যমে পরিচালনা করা উচিত।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t("How We Work", "আমরা যেভাবে কাজ করি")}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              {t("From Workflow Review to Automation", "ওয়ার্কফ্লো রিভিউ থেকে অটোমেশন পর্যন্ত")}
            </h2>
            <p className="mt-5 leading-8 text-gray-400">
              {t(
                "We start with your existing process and identify practical opportunities for improvement before designing an automation workflow.",
                "আমরা আপনার বর্তমান প্রক্রিয়া দিয়ে শুরু করি এবং অটোমেশন ওয়ার্কফ্লো ডিজাইন করার আগে উন্নতির ব্যবহারিক সুযোগগুলো চিহ্নিত করি।"
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: t("Discover", "ডিসকভার"),
                description: t(
                  "Review your patient journey, communication channels, and repetitive tasks.",
                  "আপনার পেশেন্ট জার্নি, কমিউনিকেশন চ্যানেল এবং রুটিন কাজগুলো রিভিউ করুন।"
                ),
              },
              {
                step: "02",
                title: t("Design", "ডিজাইন"),
                description: t(
                  "Map a workflow that fits your goals, team, and existing tools.",
                  "আপনার লক্ষ্য, টিম এবং বর্তমান টুলসের সাথে মানানসই ওয়ার্কফ্লো ম্যাপ করুন।"
                ),
              },
              {
                step: "03",
                title: t("Connect", "কানেক্ট"),
                description: t(
                  "Configure suitable integrations, communication channels, and workflow rules.",
                  "উপযুক্ত ইন্টিগ্রেশন, কমিউনিকেশন চ্যানেল এবং ওয়ার্কফ্লো রুলস কনফিগার করুন।"
                ),
              },
              {
                step: "04",
                title: t("Optimize", "অপ্টিমাইজ"),
                description: t(
                  "Test the workflow, review performance, and improve it as needed.",
                  "ওয়ার্কফ্লো টেস্ট করুন, পারফরম্যান্স রিভিউ করুন এবং প্রয়োজন অনুযায়ী উন্নত করুন।"
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="text-sm font-bold tracking-widest text-cyan-300">
                  STEP {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 pt-6 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/60 via-[#0A111A] to-blue-950/40 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08]">
              <FaTooth className="text-2xl text-cyan-300" />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              {t("Ready to Improve Your Dental Practice Workflows?", "আপনার ডেন্টাল প্র্যাকটিসের ওয়ার্কফ্লো উন্নত করতে প্রস্তুত?")}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              {t(
                "Let's review your current patient journey, identify repetitive tasks, and explore an automation plan tailored to your practice.",
                "আসুন আপনার বর্তমান পেশেন্ট জার্নি রিভিউ করি, রুটিন কাজগুলো চিহ্নিত করি এবং আপনার প্র্যাকটিসের সাথে মানানসই অটোমেশন প্ল্যান তৈরি করি।"
              )}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-[#041016] transition hover:bg-cyan-300"
              >
                {t("Book a Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
                <FaArrowRight />
              </Link>

              <a
                href="https://wa.me/8801724132820"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 px-7 py-4 font-semibold transition hover:border-cyan-400/40"
              >
                <FaWhatsapp className="text-lg text-cyan-300" />
                {t("Chat on WhatsApp", "হোয়াটসঅ্যাপে চ্যাট করুন")}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <a
                href="mailto:info@tae.agency"
                className="inline-flex items-center gap-2 transition hover:text-cyan-300"
              >
                <FaEnvelope />
                info@tae.agency
              </a>

              <a
                href="https://www.instagram.com/tae.agency_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                @tae.agency_official
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}