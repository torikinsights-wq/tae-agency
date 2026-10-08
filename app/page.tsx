"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import {
  FaTooth,
  FaRobot,
  FaCalendarAlt,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
  FaNetworkWired,
  FaSyncAlt,
  FaRegClock,
  FaStethoscope,
  FaSmile,
  FaHeadset,
  FaWhatsapp,
  FaEnvelope,
  FaBullseye,
  FaRocket,
} from "react-icons/fa";

export default function DentalAutomationHomePage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";
 
  // Service Card Dropdown State for Home Page
  const [openService, setOpenService] = useState<number | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "whatsapp",
    contactValue: "",
    businessType: "Dental Practice",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (index: number) => {
    setOpenService((current) => (current === index ? null : index));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const homeServices = [
    {
      num: "01",
      icon: <FaHeadset />,
      title: t("Patient Acquisition Automation", "পেশেন্ট অ্যাকুইজিশন অটোমেশন"),
      subtitle: t("Turn incoming interest into organized patient opportunities.", "নতুন ইনকোয়ারিকে সুসংগঠিত পেশেন্ট সুযোগে রূপান্তর করুন।"),
      desc: t("New patient inquiries can come from your website, Google, Facebook, Instagram, advertisements, WhatsApp, and other channels. TAE.Agency connects these sources into a structured lead capture and follow-up workflow.", "নতুন রোগীর ইনকোয়ারি ওয়েবসাইট, গুগল, ফেসবুক, ইনস্টাগ্রাম, বিজ্ঞাপন, হোয়াটসঅ্যাপ এবং অন্যান্য চ্যানেল থেকে আসতে পারে। TAE.Agency এগুলোকে একটি স্ট্রাকচারড লিড ক্যাপচার এবং ফলো-আপ ওয়ার্কফ্লোর সাথে যুক্ত করে।"),
      features: [
        t("Website lead capture", "ওয়েবসাইট লিড ক্যাপচার"),
        t("Social media lead capture", "সোশ্যাল মিডিয়া লিড ক্যাপচার"),
        t("Advertising lead capture", "বিজ্ঞাপন লিড ক্যাপচার"),
        t("Lead organization", "লিড অর্গানাইজেশন"),
        t("Lead qualification workflows", "লিড কোয়ালিফিকেশন ওয়ার্কফ্লো"),
        t("Instant response workflows", "তাৎক্ষণিক রেসপন্স ওয়ার্কফ্লো"),
        t("Automated follow-up sequences", "স্বয়ংক্রিয় ফলো-আপ সিকোয়েন্স"),
      ],
      flow: "Inquiry → Capture → Response → Qualification → Follow-Up → Appointment Opportunity",
    },
    {
      num: "02",
      icon: <FaRobot />,
      title: t("AI Dental Patient Support", "এআই ডেন্টাল পেশেন্ট সাপোর্ট"),
      subtitle: t("Give patients faster answers to routine questions.", "রোগীদের রুটিন প্রশ্নের দ্রুত উত্তর প্রদান করুন।"),
      desc: t("Patients often ask simple questions before they decide to contact or visit a clinic. AI-powered workflows can handle routine, non-clinical communication while keeping your dental team in control of patient care.", "রোগীরা প্রায়ই ক্লিনিকে যোগাযোগ বা ভিজিট করার আগে সাধারণ প্রশ্ন করেন। এআই-চালিত ওয়ার্কফ্লো রুটিন ও অ-ক্লিনিক্যাল কমিউনিকেশন হ্যান্ডেল করে, আর পেশেন্ট কেয়ার টিম থাকে আপনার নিয়ন্ত্রণে।"),
      features: [
        t("Clinic hours", "ক্লিনিকের সময়সূচী"),
        t("Location information", "লোকেশন তথ্য"),
        t("Available services", "উপলব্ধ সেবাসমূহ"),
        t("Routine FAQs", "রুটিন প্রশ্নাবলী"),
        t("Appointment information", "অ্যাপয়েন্টমেন্ট তথ্য"),
        t("New-patient information", "নতুন রোগীর তথ্য"),
        t("Basic inquiry handling", "বেসিক ইনকোয়ারি হ্যান্ডলিং"),
      ],
      flow: "Patient Question → AI Response → Information Collected → Appointment Opportunity",
      safe: true,
    },
    {
      num: "03",
      icon: <FaCalendarAlt />,
      title: t("Appointment Booking & Reminders", "অ্যাপয়েন্টমেন্ট বুকিং ও রিমাইন্ডার"),
      subtitle: t("Make appointment communication more organized.", "অ্যাপয়েন্টমেন্ট কমিউনিকেশন আরও সুসংগঠিত করুন।"),
      desc: t("Appointment communication can consume a significant amount of reception time. TAE.Agency can connect booking requests, confirmations, reminders, rescheduling, and cancellation workflows.", "অ্যাপয়েন্টমেন্ট কমিউনিকেশনে রিসেপশনের অনেক সময় নষ্ট হতে পারে। TAE.Agency বুকিং রিকোয়েস্ট, কনফার্মেশন, রিমাইন্ডার, রিডিউল এবং ক্যান্সেলেশন ওয়ার্কফ্লো কানেক্ট করে দেয়।"),
      features: [
        t("Appointment request workflows", "অ্যাপয়েন্টমেন্ট রিকোয়েস্ট ওয়ার্কফ্লো"),
        t("Booking workflows", "বুকিং ওয়ার্কফ্লো"),
        t("Booking confirmations", "বুকিং কনফার্মেশন"),
        t("Appointment reminders", "অ্যাপয়েন্টমেন্ট রিমাইন্ডার"),
        t("Pre-appointment communication", "প্রি-অ্যাপয়েন্টমেন্ট কমিউনিকেশন"),
        t("Rescheduling workflows", "রিডিউল ওয়ার্কফ্লো"),
        t("Cancellation follow-up", "ক্যান্সেলেশন ফলো-আপ"),
        t("No-response follow-up", "নো-রেসপন্স ফলো-আপ"),
      ],
      flow: "Request → Book → Confirm → Remind → Visit",
    },
    {
      num: "04",
      icon: <FaChartLine />,
      title: t("Treatment Follow-Up Automation", "ট্রিটমেন্ট ফলো-আপ অটোমেশন"),
      subtitle: t("Keep patients moving toward their next step.", "রোগীদের পরবর্তী ধাপের দিকে এগিয়ে রাখুন।"),
      desc: t("After a consultation or treatment discussion, patients may need additional communication before taking the next step. Structured follow-up workflows help your team maintain consistency.", "কনসালটেশন বা ট্রিটমেন্ট আলোচনার পরে রোগীরা পরবর্তী পদক্ষেপ নেওয়ার আগে অতিরিক্ত যোগাযোগের প্রয়োজন মনে করতে পারেন। স্ট্রাকচারড ফলো-আপ ওয়ার্কফ্লো আপনার টিমকে ধারাবাহিকতা বজায় রাখতে সাহায্য করে।"),
      features: [
        t("Consultation follow-up", "কনসালটেশন ফলো-আপ"),
        t("Treatment follow-up", "ট্রিটমেন্ট ফলো-আপ"),
        t("Next-step reminders", "পরবর্তী ধাপের রিমাইন্ডার"),
        t("Appointment follow-up", "অ্যাপয়েন্টমেন্ট ফলো-আপ"),
        t("Unresponsive patient follow-up", "উত্তের অপেক্ষায় থাকা রোগীর ফলো-আপ"),
        t("Patient response tracking", "পেশেন্ট রেসপন্স ট্র্যাকিং"),
        t("Follow-up escalation workflows", "ফলো-আপ এসকেলেশন ওয়ার্কফ্লো"),
      ],
      flow: "Consultation → Follow-Up → Response → Next Step → Appointment",
    },
    {
      num: "05",
      icon: <FaSyncAlt />,
      title: t("Patient Recall & Reactivation", "পেশেন্ট রিকাল ও রিয়াক্টিভেশন"),
      subtitle: t("Reconnect with eligible inactive patients.", "উপযুক্ত নিষ্ক্রিয় রোগীদের সাথে পুনরায় যোগাযোগ করুন।"),
      desc: t("Patients can become inactive for many different reasons. Instead of relying entirely on manual reminders, TAE.Agency can create structured recall and reactivation workflows around your existing patient processes.", "নানা কারণে রোগীরা নিষ্ক্রিয় হতে পারেন। ম্যানুয়াল রিমাইন্ডারের ওপর নির্ভর না করে TAE.Agency আপনার প্র্যাকটিসের সাথে মানানসই রিকাল ও রিয়াক্টিভেশন ওয়ার্কফ্লো তৈরি করতে পারে।"),
      features: [
        t("Recall reminder workflows", "রিকাল রিমাইন্ডার ওয়ার্কফ্লো"),
        t("Inactive patient segmentation", "ইনঅ্যাক্টিভ পেশেন্ট সেগমেন্টেশন"),
        t("Re-engagement campaigns", "রি-এনগেজমেন্ট ক্যাম্পেইন"),
        t("Post-visit follow-up", "পোস্ট-ভিজিট ফলো-আপ"),
        t("Returning patient campaigns", "রিটার্নিং পেশেন্ট ক্যাম্পেইন"),
        t("Patient response tracking", "পেশেন্ট রেসপন্স ট্র্যাকিং"),
        t("Reactivation opportunities", "রিয়াক্টিভেশন সুযোগ"),
      ],
      flow: "Patient Database → Segment → Re-Engagement → Response → Appointment Opportunity",
    },
    {
      num: "06",
      icon: <FaNetworkWired />,
      title: t("Dental Marketing Automation", "ডেন্টাল মার্কেটিং অটোমেশন"),
      subtitle: t("Turn repetitive marketing work into connected workflows.", "মার্কেটিংয়ের রুটিন কাজগুলোকে কানেক্টেড ওয়ার্কফ্লোতে রূপান্তর করুন।"),
      desc: t("Marketing does not have to mean manually managing every repetitive task. TAE.Agency can help organize content, social media, campaign, lead tracking, and marketing workflows around your practice.", "মার্কেটিং মানেই প্রতিটি রুটিন কাজ ম্যানুয়ালি হ্যান্ডেল করা নয়। TAE.Agency আপনার প্র্যাকটিসের জন্য কন্টেন্ট, সোশ্যাল মিডিয়া, ক্যাম্পেইন এবং লিড ট্র্যাকিং ওয়ার্কফ্লো অর্গানাইজ করতে সাহায্য করে।"),
      features: [
        t("Content workflows", "কন্টেন্ট ওয়ার্কফ্লো"),
        t("AI-assisted content creation", "এআই-সহায়তা পুষ্ট কন্টেন্ট তৈরি"),
        t("Social media workflows", "সোশ্যাল মিডিয়া ওয়ার্কফ্লো"),
        t("Content scheduling", "কন্টেন্ট শিডিউলিং"),
        t("Campaign workflows", "ক্যাম্পেইন ওয়ার্কফ্লো"),
        t("Lead tracking", "লিড ট্র্যাকিং"),
        t("Marketing activity monitoring", "মার্কেটিং অ্যাক্টিভিটি মনিটরিং"),
      ],
      flow: "Idea → AI Assistance → Content → Schedule → Publish → Track",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
     
      {/* TOP EMERGENCY & WHATSAPP HOTLINE BANNER */}
      <div className="bg-slate-900/90 border-b border-cyan-500/20 py-2.5 px-4 text-xs sm:text-sm text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-cyan-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{t("Emergency & Appointments: 24/7 Open (AI Powered Support)", "জরুরী সেবা ও অ্যাপয়েন্টমেন্ট: ২৪/৭ ওপেন (AI Powered Support)")}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/8801724132820"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <FaWhatsapp className="text-base" /> {t("WhatsApp Hotline: +880 1724-132820", "হোয়াটসঅ্যাপ হটলাইন: +880 1724-132820")}
            </a>
          </div>
        </div>
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* HERO SECTION WITH EMBEDDED FORM */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg">
              <FaTooth className="text-cyan-400" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              {t("Modern AI-Powered Dental Care & Booking System", "আধুনিক এআই চালিত ডেন্টাল কেয়ার ও বুকিং সিস্টেম")}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              {t("Smart Dental Care, Seamless", "স্মার্ট ডেন্টাল কেয়ার, ঝামেলাহীন")}{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                {t("Appointment Booking", "অ্যাপয়েন্টমেন্ট বুকিং")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {t(
                "Book dental appointments in seconds, get instant AI consultations, and ensure timely visits with automated smart reminders.",
                "মুহূর্তের মধ্যে ডেন্টাল অ্যাপয়েন্টমেন্ট বুক করুন, এআই চ্যাটবটের মাধ্যমে যেকোনো পরামর্শ নিন এবং স্বয়ংক্রিয় রিমাইন্ডারের সাহায্যে সঠিক সময়ে আপনার ডেন্টাল ভিজিট নিশ্চিত করুন।"
              )}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="#audit"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <FaCalendarAlt /> {t("Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট")}
              </Link>
              <Link
                href="/services"
                className="bg-slate-900/90 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <FaStethoscope /> {t("Explore Services", "সার্ভিসসমূহ দেখুন")}
              </Link>
            </div>
          </div>

          {/* Right Hero Quick Lead Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-cyan-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {t("Online Booking Open", "অনলাইন বুকিং খোলা আছে")}
              </div>

              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <FaHeadset />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t("Quick Appointment & Project Form", "প্রজেক্ট ও অ্যাপয়েন্টমেন্ট ফর্ম")}</h3>
                  <p className="text-slate-400 text-xs">{t("Fill in your details to connect instantly.", "আপনার বিবরণ দিয়ে সহজেই আমাদের সাথে যোগাযোগ করুন।")}</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 text-center">
                  <FaCheckCircle className="text-cyan-400 text-3xl mx-auto mb-3 animate-bounce" />
                  <h4 className="text-white font-bold text-lg mb-1">{t("Request Submitted Successfully!", "রিকোয়েস্ট সফলভাবে জমা হয়েছে!")}</h4>
                  <p className="text-slate-300 text-xs">{t("Our team will contact you shortly.", "আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।")}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs bg-slate-800 text-cyan-400 hover:bg-slate-700 px-4 py-2 rounded-xl transition-all"
                  >
                    {t("Submit Another Request", "আরেকটি ফর্ম পূরণ করুন")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t("Your Name *", "আপনার নাম *")}</label>
                    <input
                      type="text"
                      required
                      placeholder={t("Enter your full name", "যেমন: রাশেদ আহমেদ")}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t("Business Category *", "বিজনেস ক্যাটাগরি *")}</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-all"
                    >
                      <option value="Dental Practice">{t("Dental Practice / Clinic", "ডেন্টাল প্র্যাকটিস / ক্লিনিক")}</option>
                      <option value="General Service">{t("Service-Oriented Business", "সার্ভিস-অরিয়েন্টেড বিজনেস")}</option>
                      <option value="Real Estate">{t("Real Estate", "রিয়েল এস্টেট")}</option>
                      <option value="Other">{t("Other Business", "অন্যান্য ব্যবসা")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t("Contact Method (Email or WhatsApp) *", "যোগাযোগের মাধ্যম (ইমেইল বা হোয়াটসঅ্যাপ) *")}</label>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, contactMethod: "email"})}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${formData.contactMethod === "email" ? "bg-cyan-500/20 border-cyan-500 text-cyan-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                      >
                        <FaEnvelope /> Email
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, contactMethod: "whatsapp"})}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1 ${formData.contactMethod === "whatsapp" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                      >
                        <FaWhatsapp /> WhatsApp
                      </button>
                    </div>
                    <input
                      type="text"
                      required
                      placeholder={formData.contactMethod === "whatsapp" ? "+880 1724-132820" : "yourname@email.com"}
                      value={formData.contactValue}
                      onChange={(e) => setFormData({...formData, contactValue: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold py-3.5 rounded-xl shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300 text-sm mt-2 flex items-center justify-center gap-2"
                  >
                    <FaArrowRight /> {t("Submit Request", "সাবমিট রিকোয়েস্ট")}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
                    <FaShieldAlt className="text-cyan-400" /> {t("Your information is completely secure.", "আপনার তথ্য সম্পূর্ণ সুরক্ষিত ও গোপনীয়।")}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Patient Journey Strip in Hero */}
        <div className="mt-16 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 max-w-6xl mx-auto shadow-2xl">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-4 flex items-center justify-center gap-2">
            <FaNetworkWired /> {t("Connected Patient Journey Workflow", "কানেক্টেড পেশেন্ট জার্নি ওয়ার্কফ্লো")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-slate-300">
            {["New Inquiry", "Instant Response", "Follow-Up", "Appointment", "Reminder", "Visit", "Recall", "Reactivation", "Returning Patient"].map((step, index, arr) => (
              <React.Fragment key={index}>
                <span className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg text-cyan-200 flex items-center gap-1.5">
                  {index === 0 && <FaHeadset className="text-cyan-400 text-xs" />}
                  {index === 3 && <FaCalendarAlt className="text-cyan-400 text-xs" />}
                  {index === 5 && <FaTooth className="text-cyan-400 text-xs" />}
                  {step}
                </span>
                {index < arr.length - 1 && <span className="text-cyan-500 font-bold">→</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
            <FaShieldAlt className="text-cyan-400" /> {t("Built for modern dental practices.", "আধুনিক ডেন্টাল প্র্যাকটিসের জন্য তৈরি।")}
          </p>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 flex items-center justify-center gap-1.5">
            <FaTooth /> {t("Our Purpose & Direction", "আমাদের উদ্দেশ্য ও দিকনির্দেশনা")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            {t("Mission & Vision of TAE.Agency", "TAE.Agency-এর মিশন ও ভিশন")}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {t("Discover how we are transforming dental practices and service businesses through intelligent automation.", "জানুন কীভাবে আমরা ইন্টেলিজেন্ট অটোমেশনের মাধ্যমে ডেন্টাল প্র্যাকটিস এবং সার্ভিস বিজনেসগুলোকে রূপান্তর করছি।")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-8 text-center shadow-xl">
            <div className="text-cyan-400 text-3xl p-3 bg-cyan-500/10 w-fit mx-auto rounded-xl border border-cyan-500/20 mb-4">
              <FaBullseye />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{t("Our Mission", "আমাদের মিশন")}</p>
            <h3 className="mt-3 text-2xl font-bold text-white">{t("Make Dental Practice Automation Practical.", "ডেন্টাল অটোমেশনকে আরও বাস্তবসম্মত করা।")}</h3>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              {t(
                "To free businesses from manual follow-up hassles. Converting every lead instantly through automated text-backs, AI chatbots, and smart pipelines, ensuring human care remains at the heart of practice.",
                "ব্যবসাগুলোকে ম্যানুয়াল ফলো-আপের ঝামেলা থেকে মুক্তি দেওয়া। ইনস্ট্যান্ট অটো-টেক্সট ব্যাক, এআই চ্যাটবট এবং স্মার্ট পাইপলাইনের মাধ্যমে প্রতিটি লিডকে দ্রুত কনভার্ট করা এবং মানুষের যত্নকে অগ্রাধিকার দেওয়া।"
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-400/[0.08] to-transparent p-8 text-center shadow-xl">
            <div className="text-blue-400 text-3xl p-3 bg-blue-500/10 w-fit mx-auto rounded-xl border border-blue-500/20 mb-4">
              <FaRocket />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{t("Our Vision", "আমাদের ভিশন")}</p>
            <h3 className="mt-3 text-2xl font-bold text-white">{t("A More Connected Future for Dental Practices.", "ডেন্টাল প্র্যাকটিসের জন্য একটি সংযুক্ত ভবিষ্যৎ।")}</h3>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              {t(
                "Creating an automated digital ecosystem where every dental clinic and service business can exponentially scale sales, patient retention, and growth using cutting-edge AI technology.",
                "একটি স্বয়ংক্রিয় ডিজিটাল ইকোসিস্টেম তৈরি করা, যেখানে এআই প্রযুক্তির সাহায্যে প্রতিটি ডেন্টাল ক্লিনিক ও সার্ভিস বিজনেস তাদের সেলস, পেশেন্ট রিটেনশন এবং গ্রোথ বহুগুণ বাড়িয়ে নিতে পারে।"
              )}
            </p>
          </div>
        </div>

        {/* Link to About Page */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-bold transition-all shadow-lg hover:scale-105"
          >
            <span>{t("Learn More About Our Team & Story", "আমাদের টিম ও স্টোরি সম্পর্কে আরও জানুন")}</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* SECTION 2 — CORE VALUE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            {t("Your Dental Team Should Focus on Patients.", "আপনার ডেন্টাল টিম রোগীদের চিকিৎসায় মনোযোগ দিক।")}<br />
            <span className="text-cyan-400">{t("Let Automation Handle the Repetitive Work.", "বাকি পুনরাবৃত্তিমূলক কাজ অটোমেশন संभालবে।")}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Dental clinics receive inquiries from websites, Google, Facebook, Instagram, WhatsApp, advertisements, phone calls, and other channels. TAE.Agency automates repetitive communication and operational workflows while keeping human care at the center of the patient experience.",
              "ডেন্টাল ক্লিনিকে ওয়েবসাইট, গুগল, ফেসবুক, ইনস্টাগ্রাম, হোয়াটসঅ্যাপ, অ্যাডভারটাইজমেন্ট এবং ফোন কল থেকে ইনকোয়ারি আসে। TAE.Agency মানবীয় সেবাকে ঠিক রেখে রুটিন কমিউনিকেশন এবং অপারেশনাল কাজগুলো সম্পূর্ণ অটোমেট করে।"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t("Faster Patient Response", "দ্রুত রোগী রেসপন্স"), desc: t("Respond to new inquiries quickly, even when your reception team is busy.", "রিসেপশন টিম ব্যস্ত থাকলেও নতুন ইনকোয়ারির দ্রুত উত্তর দিন।"), icon: <FaRegClock className="text-cyan-400 text-lg" /> },
            { title: t("More Appointment Opportunities", "বেশি অ্যাপয়েন্টমেন্ট সুযোগ"), desc: t("Move interested patients from inquiry toward appointment through structured follow-up workflows.", "স্ট্রাকচারড ফলো-আপ ওয়ার্কফ্লোর মাধ্যমে আগ্রহী রোগীদের অ্যাপয়েন্টমেন্টের দিকে এগিয়ে নিন।"), icon: <FaCalendarAlt className="text-cyan-400 text-lg" /> },
            { title: t("Less Manual Work", "কম ম্যানুয়াল কাজ"), desc: t("Reduce repetitive administrative communication for front-desk teams.", "ফ্রন্ট-ডেস্ক টিমের জন্য পুনরাবৃত্তিমূলক প্রশাসনিক যোগাযোগ কম করুন।"), icon: <FaSyncAlt className="text-cyan-400 text-lg" /> },
            { title: t("Better Patient Retention", "উন্নত পেশেন্ট রিটেনশন"), desc: t("Stay connected with patients through follow-ups, recalls, review requests, and reactivation workflows.", "ফলো-আপ, রিকাল, রিভিউ রিকোয়েস্ট এবং রিয়াক্টিভেশন ওয়ার্কফ্লোর মাধ্যমে রোগীদের সাথে সংযোগ রাখুন।"), icon: <FaSmile className="text-cyan-400 text-lg" /> },
          ].map((card, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/40 transition-all shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 flex items-center justify-center gap-1.5">
            <FaTooth /> {t("Core Capabilities", "মূল সুবিধাসমূহ")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">{t("Powerful Automation Systems Built Around Your Dental Practice.", "আপনার ডেন্টাল প্র্যাকটিসের উপযোগী শক্তিশালী অটোমেশন সিস্টেম।")}</h2>
          <p className="text-slate-300 text-sm sm:text-base">{t("TAE.Agency builds customized automation systems around your workflows instead of forcing your clinic into a one-size-fits-all process.", "TAE.Agency আপনার ক্লিনিককে ছাঁচে ফেলতে বাধ্য না করে, আপনার নির্দিষ্ট ওয়ার্কফ্লোর ওপর ভিত্তি করে কাস্টম অটোমেশন সিস্টেম তৈরি করে।")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {homeServices.map((service, index) => {
            const isServiceOpen = openService === index;
            return (
              <div key={index} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 flex flex-col justify-between hover:border-cyan-400 transition-all shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-cyan-400 font-mono text-sm font-bold">{service.num}</span>
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-4">{service.subtitle}</p>

                  {service.safe && (
                    <div className="p-3.5 mb-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                      <div className="flex gap-2">
                        <FaShieldAlt className="text-cyan-400 mt-0.5 flex-shrink-0 text-xs" />
                        <p className="text-[11px] text-cyan-300 leading-relaxed">
                          {t(
                            "AI handles routine, non-clinical communication. Diagnosis, treatment decisions, and care remain with qualified professionals.",
                            "এআই রুটিন ও অ-ক্লিনিক্যাল কমিউনিকেশন হ্যান্ডেল করে। ডায়াগনোসিস ও ক্লিনিক্যাল যত্নের দায়িত্ব চিকিৎসকদের।"
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-800 pt-4 mt-2">
                  <button
                    type="button"
                    onClick={() => toggleService(index)}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-wider text-cyan-300 font-mono py-1.5 hover:text-cyan-400 transition-colors"
                  >
                    <span>{t("WHAT CAN BE AUTOMATED", "যা অটোমেট করা যায়")}</span>
                    <FaChevronDown className={`transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`grid transition-all duration-300 ${isServiceOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden space-y-3">
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 pb-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                            <FaCheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0 text-[10px]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70 text-[11px] text-cyan-400 font-mono">
                  {service.flow}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 18 — FREE DENTAL AUTOMATION AUDIT */}
      <section id="audit" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/50 rounded-3xl p-8 sm:p-14 shadow-[0_0_60px_rgba(6,182,212,0.15)] text-center relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">{t("Find the Automation Opportunities Inside Your Dental Practice.", "আপনার ডেন্টাল প্র্যাকটিসের ভেতরের অটোমেশন সুযোগগুলো খুঁজে বের করুন।")}</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("Not sure where to start? Book a free Dental Automation Audit and discover where repetitive work, slow follow-up, and manual processes may be creating unnecessary friction.", "কোথা থেকে শুরু করবেন বুঝতে পারছেন না? একটি ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন এবং দেখুন কোথায় রুটিন কাজ, স্লো ফলো-আপ এবং ম্যানুয়াল প্রসেস অপ্রয়োজনীয় বাধা তৈরি করছে।")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto mb-10">
            {[
              { num: "01", title: t("Patient Journey Review", "পেশেন্ট জার্নি রিভিউ") },
              { num: "02", title: t("Workflow Review", "ওয়ার্কফ্লো রিভিউ") },
              { num: "03", title: t("Automation Opportunities", "অটোমেশন সুযোগ") },
              { num: "04", title: t("Recommended Roadmap", "প্রস্তাবিত রোডম্যাপ") },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <span className="text-cyan-400 font-mono font-bold text-xs">{step.num}</span>
                <p className="text-white font-semibold text-xs mt-1">{step.title}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-10 py-5 rounded-2xl shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <FaCalendarAlt /> {t("Book Your Free Dental Automation Audit", "আপনার ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
            </Link>
            <p className="text-xs text-slate-400">{t("No obligation. Just a clear look at where automation may help your dental practice.", "কোনো বাধ্যবাধকতা নেই। শুধু দেখুন অটোমেশন কীভাবে আপনার ডেন্টাল প্র্যাকটিসে সাহায্য করতে পারে।")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 20 — FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-slate-900">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">{t("Your Dental Clinic Is Busy. Your Automation Shouldn't Be.", "আপনার ক্লিনিক ব্যস্ত, কিন্তু অটোমেশন নয়।")}</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {t(
            "Don't let slow responses, manual follow-ups, and repetitive administrative work create friction. Let TAE.Agency — Torik Automation Engineering — build an intelligent automation system around your dental practice.",
            "স্লো রেসপন্স, ম্যানুয়াল ফলো-আপ এবং রুটিন প্রশাসনিক কাজকে আপনার প্র্যাকটিসে বাধা সৃষ্টি করতে দেবেন না। আজই TAE.Agency — তরিক অটোমেশন ইঞ্জিনিয়ারিং — এর মাধ্যমে আপনার ডেন্টাল প্র্যাকটিসে একটি স্মার্ট অটোমেশন সিস্টেম তৈরি করুন।"
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#audit"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <FaCalendarAlt /> {t("Book a Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
          </Link>
          <Link
            href="#audit"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl border border-slate-700 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <FaHeadset /> {t("Talk to TAE.Agency", "TAE.Agency-এর সাথে কথা বলুন")}
          </Link>
        </div>
        <p className="text-cyan-400 font-mono text-sm mt-8 flex items-center justify-center gap-2">
          <FaTooth /> {t("A More Connected. More Efficient. More Intelligent Dental Practice.", "একটি অধিক সংযুক্ত। অধিক দক্ষ। অধিক বুদ্ধিমান ডেন্টাল প্র্যাকটিস।")}
        </p>
      </section>

    </div>
  );
}