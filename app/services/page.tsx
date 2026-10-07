"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaTooth,
  FaRobot,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
  FaNetworkWired,
  FaSyncAlt,
  FaUserMd,
  FaRegClock,
  FaStethoscope,
  FaSmile,
  FaStar,
  FaBullseye,
  FaCogs,
  FaChartLine,
  FaHeadset,
  FaFilter,
  FaBolt,
  FaLayerGroup,
  FaProjectDiagram,
  FaShieldAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function DentalAutomationServicesPage() {
  const { lang, t } = useLanguage();
  const isBangla = lang === "bn";
  
  // Master FAQ Dropdown State (Controls the entire FAQ section visibility)
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);
  
  // Service Card Dropdown State
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

  const toggleFaqItem = (index: number) => {
    setOpenFaqItem((current) => (current === index ? null : index));
  };

  const toggleService = (index: number) => {
    setOpenService((current) => (current === index ? null : index));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
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
      desc: t("Patients often ask simple questions before they decide to contact or visit a clinic. AI-powered workflows can handle routine, non-clinical communication while keeping your dental team in control of patient care.", "রোগীরা প্রায়ই ক্লিনিকে যোগাযোগ বা ভিজিট করার আগে সাধারণ প্রশ্ন করেন। এআই-চালিত ওয়ার্কফ্লো রুটিন ও অ-ক্লিনিক্যাল কমিউনিকেশন হ্যান্ডেল করে, আর পেশেন্ট কেয়ার টিম থাকে আপনার নিয়ন্ত্রণে।"),
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
      desc: t("Appointment communication can consume a significant amount of reception time. TAE.Agency can connect booking requests, confirmations, reminders, rescheduling, and cancellation workflows.", "অ্যাপয়েন্টমেন্ট কমিউনিকেশনে রিসেপশনের অনেক সময় নষ্ট হতে পারে। TAE.Agency বুকিং রিকোয়েস্ট, কনফার্মেশন, রিমাইন্ডার, রিডিউল এবং ক্যান্সেলেশন ওয়ার্কফ্লো কানেক্ট করে দেয়।"),
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
      desc: t("After a consultation or treatment discussion, patients may need additional communication before taking the next step. Structured follow-up workflows help your team maintain consistency.", "কনসালটেশন বা ট্রিটমেন্ট আলোচনার পরে রোগীরা পরবর্তী পদক্ষেপ নেওয়ার আগে অতিরিক্ত যোগাযোগের প্রয়োজন মনে করতে পারেন। স্ট্রাকচারড ফলো-আপ ওয়ার্কফ্লো আপনার টিমকে ধারাবাহিকতা বজায় রাখতে সাহায্য করে।"),
      features: [
        t("Consultation follow-up", "কনসালটেশন ফলো-আপ"),
        t("Treatment follow-up", "ট্রিটমেন্ট ফলো-আপ"),
        t("Next-step reminders", "পরবর্তী ধাপের রিমাইন্ডার"),
        t("Appointment follow-up", "অ্যাপয়েন্টমেন্ট ফলো-আপ"),
        t("Unresponsive patient follow-up", "উত্তের অপেক্ষায় থাকা রোগীর ফলো-আপ"),
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
      subtitle: t("Turn repetitive marketing work into connected workflows.", "মার্কেটিংয়ের রুটিন কাজগুলোকে কানেক্টেড ওয়ার্কফ্লোতে রূপান্তর করুন।"),
      desc: t("Marketing does not have to mean manually managing every repetitive task. TAE.Agency can help organize content, social media, campaign, lead tracking, and marketing workflows around your practice.", "মার্কেটিং মানেই প্রতিটি রুটিন কাজ ম্যানুয়ালি হ্যান্ডেল করা নয়। TAE.Agency আপনার প্র্যাকটিসের জন্য কন্টেন্ট, সোশ্যাল মিডিয়া, ক্যাম্পেইন এবং লিড ট্র্যাকিং ওয়ার্কফ্লো অর্গানাইজ করতে সাহায্য করে।"),
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

  const automationAreas = [
    {
      icon: <FaHeadset />,
      title: t("Patient Acquisition", "পেশেন্ট অ্যাকুইজিশন"),
      items: [t("Website inquiries", "ওয়েবসাইট ইনকোয়ারি"), t("Social media leads", "সোশ্যাল মিডিয়া লিড"), t("Advertising leads", "বিজ্ঞাপন লিড"), t("Lead capture", "লিড ক্যাপচার"), t("Lead qualification", "লিড কোয়ালিফিকেশন")],
    },
    {
      icon: <FaRobot />,
      title: t("Patient Communication", "পেশেন্ট কমিউনিকেশন"),
      items: [t("AI chat", "এআই চ্যাট"), t("Routine FAQs", "রুটিন ফ্রিকোয়েন্ট প্রশ্ন"), t("WhatsApp workflows", "হোয়াটসঅ্যাপ ওয়ার্কফ্লো"), t("SMS workflows", "এসএমএস ওয়ার্কফ্লো"), t("Email workflows", "ইমেইল ওয়ার্কফ্লো"), t("Automated follow-up", "অটোমেটেড ফলো-আপ")],
    },
    {
      icon: <FaCalendarAlt />,
      title: t("Appointments", "অ্যাপয়েন্টমেন্ট"),
      items: [t("Booking requests", "বুকিং রিকোয়েস্ট"), t("Confirmations", "কনফার্মেশন"), t("Reminders", "রিমাইন্ডার"), t("Rescheduling", "রিডিউল"), t("Cancellation follow-up", "ক্যান্সেলেশন ফলো-আপ"), t("No-response follow-up", "নো-রেসপন্স ফলো-আপ")],
    },
    {
      icon: <FaStethoscope />,
      title: t("Treatment Follow-Up", "ট্রিটমেন্ট ফলো-আপ"),
      items: [t("Consultation follow-up", "কনসালটেশন ফলো-আপ"), t("Treatment reminders", "ট্রিটমেন্ট রিমাইন্ডার"), t("Next-step communication", "পরবর্তী ধাপের যোগাযোগ"), t("Patient response tracking", "পেশেন্ট রেসপন্স ট্র্যাকিং"), t("Unresponsive patient follow-up", "উত্তের অপেক্ষায় থাকা রোগীর ফলো-আপ")],
    },
    {
      icon: <FaSyncAlt />,
      title: t("Retention & Recall", "রিটেনশন ও রিকাল"),
      items: [t("Recall reminders", "রিকাল রিমাইন্ডার"), t("Inactive patient reactivation", "নিষ্ক্রিয় রোগী রিয়াক্টিভেশন"), t("Post-visit follow-up", "পোস্ট-ভিজিট ফলো-আপ"), t("Returning patient campaigns", "রিটার্নিং পেশেন্ট ক্যাম্পেইন"), t("Review requests", "রিভিউ রিকোয়েস্ট")],
    },
    {
      icon: <FaChartLine />,
      title: t("Marketing & Visibility", "মার্কেটিং ও ভিজিবিলিটি"),
      items: [t("Content workflows", "কন্টেন্ট ওয়ার্কফ্লো"), t("Social media", "সোশ্যাল মিডিয়া"), t("Campaign automation", "ক্যাম্পেইন অটোমেশন"), t("Lead tracking", "লিড ট্র্যাকিং"), t("Performance monitoring", "পারফরম্যান্স মনিটরিং")],
    },
  ];

  const patientJourney = [
    { num: "01", icon: <FaNetworkWired />, title: t("Patient Finds Your Clinic", "রোগী আপনার ক্লিনিক খুঁজে পান"), desc: t("Google, Facebook, Instagram, website, advertising, referrals, and other channels.", "গুগল, ফেসবুক, ইনস্টাগ্রাম, ওয়েবসাইট, বিজ্ঞাপন, রেফারেল এবং অন্যান্য চ্যানেল।") },
    { num: "02", icon: <FaHeadset />, title: t("Inquiry Is Captured", "ইনকোয়ারি ক্যাপচার করা হয়"), desc: t("The inquiry enters a structured workflow instead of getting lost in disconnected channels.", "ইনকোয়ারিটি বিচ্ছিন্ন চ্যানেলে হারিয়ে না গিয়ে একটি স্ট্রাকচারড ওয়ার্কফ্লোতে প্রবেশ করে।") },
    { num: "03", icon: <FaBolt />, title: t("Response & Qualification", "রেসপন্স ও কোয়ালিফিকেশন"), desc: t("Routine communication and lead qualification workflows can start automatically.", "রুটিন কমিউনিকেশন এবং লিড কোয়ালিফিকেশন ওয়ার্কফ্লো স্বয়ংক্রিয়ভাবে শুরু হতে পারে।") },
    { num: "04", icon: <FaSyncAlt />, title: t("Follow-Up", "ফলো-আপ"), desc: t("Interested patients can receive structured follow-up based on your workflow.", "আগ্রহী রোগীরা আপনার ওয়ার্কফ্লো অনুযায়ী স্ট্রাকচারড ফলো-আপ পান।") },
    { num: "05", icon: <FaCalendarAlt />, title: t("Appointment", "অ্যাপয়েন্টমেন্ট"), desc: t("The patient moves toward booking, confirmation, and appointment communication.", "রোগী বুকিং, কনফার্মেশন এবং অ্যাপয়েন্টমেন্ট যোগাযোগের দিকে এগিয়ে যান।") },
    { num: "06", icon: <FaRegClock />, title: t("Reminder", "রিমাইন্ডার"), desc: t("Automated reminder workflows help keep appointment communication organized.", "অটোমেটেড রিমাইন্ডার ওয়ার্কফ্লো অ্যাপয়েন্টমেন্ট যোগাযোগ গুছিয়ে রাখতে সাহায্য করে।") },
    { num: "07", icon: <FaTooth />, title: t("Patient Visit", "পেশেন্ট ভিজিট"), desc: t("Your dental team focuses on delivering patient care.", "আপনার ডেন্টাল টিম পেশেন্ট কেয়ার প্রদানে মনোনিবেশ করে।") },
    { num: "08", icon: <FaSmile />, title: t("Retention & Recall", "রিটেনশন ও রিকাল"), desc: t("Post-visit, recall, review, and reactivation workflows can continue the relationship.", "পোস্ট-ভিজিট, রিকাল, রিভিউ এবং রিয়াক্টিভেশন ওয়ার্কফ্লো সম্পর্ক বজায় রাখে।") },
  ];

  const process = [
    { num: "01", title: t("DISCOVER", "বিশ্লেষণ"), icon: <FaFilter />, desc: t("We understand your patient journey, lead sources, booking process, communication channels, and repetitive tasks.", "আমরা আপনার পেশেন্ট জার্নি, লিড সোর্স, বুকিং প্রসেস, কমিউনিকেশন চ্যানেল এবং রুটিন কাজগুলো বুঝতে পারি।") },
    { num: "02", title: t("DESIGN", "ডিজাইন"), icon: <FaProjectDiagram />, desc: t("We map the workflows that can be automated and design the system around your actual clinic operations.", "যে ওয়ার্কফ্লোগুলো অটোমেট করা যায় তা ম্যাপ করি এবং আপনার ক্লিনিকাল অপারেশনের ওপর ভিত্তি করে সিস্টেম ডিজাইন করি।") },
    { num: "03", title: t("CONNECT", "কানেক্ট"), icon: <FaNetworkWired />, desc: t("Relevant tools, forms, calendars, communication channels, databases, and automation workflows are connected.", "সংশ্লিষ্ট টুলস, ফর্ম, ক্যালেন্ডার, কমিউনিকেশন চ্যানেল, ডেটাবেস এবং অটোমেশন ওয়ার্কফ্লো কানেক্ট করি।") },
    { num: "04", title: t("AUTOMATE", "অটোমেট"), icon: <FaRobot />, desc: t("The repetitive workflow begins running automatically while your team remains in control.", "আপনার টিম নিয়ন্ত্রণে রেখেই রুটিন ওয়ার্কফ্লো স্বয়ংক্রিয়ভাবে চলতে শুরু করে।") },
    { num: "05", title: t("OPTIMIZE", "অপ্টিমাইজ"), icon: <FaChartLine />, desc: t("Workflow activity is reviewed so the system can be improved as your practice evolves.", "ওয়ার্কফ্লো অ্যাক্টিভিটি পর্যালোচনা করা হয় যাতে আপনার প্র্যাকটিসের সাথে সাথে সিস্টেম আরও উন্নত হয়।") },
  ];

  const practiceTypes = [
    t("General Dental Practices", "জেনারেল ডেন্টাল প্র্যাকটিস"),
    t("Family Dental Practices", "ফ্যামিলি ডেন্টাল প্র্যাকটিস"),
    t("Cosmetic Dental Practices", "কসমেটিক ডেন্টাল প্র্যাকটিস"),
    t("Orthodontic Practices", "অর্থোডন্টিক প্র্যাকটিস"),
    t("Multi-Dentist Practices", "মাল্টি-ডেন্টিস্ট প্র্যাকটিস"),
    t("Multi-Location Dental Groups", "মাল্টি-লোকেশন ডেন্টাল গ্রুপ"),
  ];

  const faqs = [
    { q: t("What exactly does TAE.Agency provide?", "TAE.Agency ঠিক কী প্রদান করে?"), a: t("TAE.Agency designs and implements AI-powered automation systems for dental practices. Depending on the clinic's needs, this can include patient acquisition, communication, appointment workflows, treatment follow-up, recall, reactivation, reputation workflows, and marketing automation.", "TAE.Agency ডেন্টাল প্র্যাকটিসের জন্য এআই-চালিত অটোমেশন সিস্টেম ডিজাইন ও ইমপ্লিমেন্ট করে। ক্লিনিকের প্রয়োজনের ওপর ভিত্তি করে এতে পেশেন্ট অ্যাকুইজিশন, কমিউনিকেশন, অ্যাপয়েন্টমেন্ট ওয়ার্কফ্লো, ট্রিটমেন্ট ফলো-আপ, রিকাল, রিয়াক্টিভেশন, রেপুটেশন এবং মার্কেটিং অটোমেশন অন্তর্ভুক্ত থাকতে পারে।") },
    { q: t("Do you only provide AI chatbots?", "আপনারা কি শুধু এআই চ্যাটবট প্রদান করেন?"), a: t("No. A chatbot can be one part of an automation system, but TAE.Agency focuses on connecting the wider patient journey—from inquiry and follow-up to appointment communication, recall, and reactivation.", "না। চ্যাটবট অটোমেশন সিস্টেমের একটি অংশ হতে পারে, তবে TAE.Agency বৃহত্তর পেশেন্ট জার্নি কানেক্ট করার ওপর ফোকাস করে—ইনকোয়ারি ও ফলো-আপ থেকে শুরু করে অ্যাপয়েন্টমেন্ট যোগাযোগ, রিকাল এবং রিয়াক্টিভেশন পর্যন্ত।") },
    { q: t("Can AI handle medical or dental diagnosis?", "এআই কি মেডিকেল বা ডেন্টাল ডায়াগনোসিস হ্যান্ডেল করতে পারে?"), a: t("No. AI workflows are intended for routine, non-clinical communication. Diagnosis, treatment decisions, clinical advice, and patient care remain the responsibility of qualified dental professionals.", "না। এআই ওয়ার্কফ্লো শুধুমাত্র রুটিন ও অ-ক্লিনিক্যাল যোগাযোগের জন্য। ডায়াগনোসিস, ট্রিটমেন্ট ডিসিশন, ক্লিনিক্যাল পরামর্শ এবং পেশেন্ট কেয়ারের দায়িত্ব সম্পূর্ণভাবে যোগ্য ডেন্টাল পেশেন্ট প্রফেশনালদের।") },
    { q: t("Can you automate appointment reminders?", "আপনারা কি অ্যাপয়েন্টমেন্ট রিমাইন্ডার অটোমেট করতে পারেন?"), a: t("Yes, depending on the tools and workflow setup. Appointment confirmations, reminders, rescheduling communication, cancellation follow-up, and related communication workflows can be automated.", "হ্যাঁ, টুলস ও ওয়ার্কফ্লো সেটআপ অনুযায়ী এটি করা সম্ভব। অ্যাপয়েন্টমেন্ট কনফার্মেশন, রিমাইন্ডার, রিডিউল যোগাযোগ, ক্যান্সেলেশন ফলো-আপ ইত্যাদি অটোমেট করা যায়।") },
    { q: t("Can you automate WhatsApp or SMS communication?", "আপনারা কি হোয়াটসঅ্যাপ বা এসএমএস কমিউনিকেশন অটোমেট করতে পারেন?"), a: t("Communication channels can be connected depending on the tools, APIs, account permissions, and workflow requirements of the practice.", "প্র্যাকটিসের টুলস, এপিআই, অ্যাকাউন্ট পারমিশন এবং ওয়ার্কফ্লো রিকোয়ারমেন্ট অনুযায়ী যোগাযোগ চ্যানেলগুলো কানেক্ট করা যেতে পারে।") },
    { q: t("Can you reactivate old patients?", "আপনারা কি পুরনো রোগীদের রিয়াক্টিভেট করতে পারেন?"), a: t("TAE.Agency can design structured reactivation and recall workflows for eligible inactive patients. The exact workflow depends on the clinic's patient database, consent practices, communication channels, and goals.", "TAE.Agency উপযুক্ত নিষ্ক্রিয় রোগীদের জন্য স্ট্রাকচারড রিয়াক্টিভেশন এবং রিকাল ওয়ার্কফ্লো ডিজাইন করতে পারে। সঠিক ওয়ার্কফ্লো ক্লিনিকের পেশেন্ট ডেটাবেস এবং লক্ষ্যের ওপর নির্ভর করে।") },
    { q: t("Will automation replace my receptionist?", "অটোমেশন কি আমাদের রিসেপশনিস্টকে প্রতিস্থাপন করবে?"), a: t("The goal is not to replace your reception team. Automation handles repetitive workflows so your staff can spend more time on patient care, complex situations, hospitality, and human communication.", "এর লক্ষ্য রিসেপশন টিমকে প্রতিস্থাপন করা নয়। অটোমেশন রুটিন কাজগুলো হ্যান্ডেল করে যাতে আপনার স্টাফরা পেশেন্ট কেয়ার, জটিল পরিস্থিতি এবং মানবীয় যোগাযোগে বেশি সময় দিতে পারেন।") },
    { q: t("Is the automation system the same for every clinic?", "প্রতিটি ক্লিনিকের জন্য কি অটোমেশন সিস্টেম একই রকম হয়?"), a: t("No. Each dental practice has different services, patient sources, booking processes, communication channels, team structures, and goals. TAE.Agency designs workflows around the clinic.", "না। প্রতিটি ডেন্টাল প্র্যাকটিসের সার্ভিস, পেশেন্ট সোর্স, বুকিং প্রসেস, টিম স্ট্রাকচার এবং লক্ষ্য ভিন্ন। TAE.Agency ক্লিনিকের প্রয়োজন অনুযায়ী কাস্টম ওয়ার্কফ্লো ডিজাইন করে।") },
    { q: t("How do we know what should be automated?", "আমরা কীভাবে বুঝব কোন কাজগুলো অটোমেট করা উচিত?"), a: t("The process starts by reviewing your existing patient journey and operational workflows. We identify repetitive tasks, communication gaps, and areas where automation could realistically improve consistency and efficiency.", "প্রক্রিয়াটি আপনার বর্তমান পেশেন্ট জার্নি এবং অপারেশনাল ওয়ার্কফ্লো পর্যালোচনার মাধ্যমে শুরু হয়। আমরা রুটিন কাজ, কমিউনিকেশন গ্যাপ এবং অটোমেশনের সুযোগগুলো চিহ্নিত করি।") },
  ];

  return (
    <main className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">

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

      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-[8%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[55%] left-[30%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-[20%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      {/* HERO SECTION WITH EMBEDDED CONTACT FORM */}
      <section className="relative z-10 pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Content (Slightly reduced by ~1-2% for better proportion) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg">
              <FaTooth className="text-cyan-400" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {t("AI-POWERED DENTAL PRACTICE AUTOMATION", "এআই-চালিত ডেন্টাল প্র্যাকটিস অটোমেশন")}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              {t("Automation Systems Built", "অটোমেশন সিস্টেম তৈরি")}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                {t("Around Your Dental Practice.", "আপনার ডেন্টাল প্র্যাকটিসের চারপাশে।")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t(
                "TAE.Agency designs intelligent automation systems that help dental clinics organize patient acquisition, communication, appointments, follow-up, recall, reactivation, and marketing workflows.",
                "TAE.Agency এমন বুদ্ধিমান অটোমেশন সিস্টেম ডিজাইন করে যা ডেন্টাল ক্লিনিকগুলোকে পেশেন্ট অ্যাকুইজিশন, কমিউনিকেশন, অ্যাপয়েন্টমেন্ট, ফলো-আপ, রিকাল, রিয়াক্টিভেশন এবং মার্কেটিং ওয়ার্কফ্লো গুছিয়ে রাখতে সাহায্য করে।"
              )}
            </p>
          </div>

          {/* Right Contact/Lead Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl relative">
              <div className="absolute -top-2.5 right-5 bg-cyan-500 text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                {t("Online Booking Open", "অনলাইন বুকিং খোলা আছে")}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  <FaHeadset />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{t("Quick Appointment & Project Form", "প্রজেক্ট ও অ্যাপয়েন্টমেন্ট ফর্ম")}</h3>
                  <p className="text-slate-400 text-[11px]">{t("Fill in your details to connect instantly.", "আপনার বিবরণ দিয়ে সহজেই আমাদের সাথে যোগাযোগ করুন।")}</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                  <FaCheckCircle className="text-cyan-400 text-2xl mx-auto mb-2 animate-bounce" />
                  <h4 className="text-white font-bold text-sm mb-1">{t("Request Submitted Successfully!", "রিকোয়েস্ট সফলভাবে জমা হয়েছে!")}</h4>
                  <p className="text-slate-300 text-[11px]">{t("Our team will contact you shortly.", "আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।")}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-[11px] bg-slate-800 text-cyan-400 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-all"
                  >
                    {t("Submit Another Request", "আরেকটি ফর্ম পূরণ করুন")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 text-left">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Your Name *", "আপনার নাম *")}</label>
                    <input
                      type="text"
                      required
                      placeholder={t("Enter your full name", "যেমন: রাশেদ আহমেদ")}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Business Category *", "বিজনেস ক্যাটাগরি *")}</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                    >
                      <option value="Dental Practice">{t("Dental Practice / Clinic", "ডেন্টাল প্র্যাকটিস / ক্লিনিক")}</option>
                      <option value="General Service">{t("Service-Oriented Business", "সার্ভিস-অরিয়েন্টেড বিজনেস")}</option>
                      <option value="Real Estate">{t("Real Estate", "রিয়েল এস্টেট")}</option>
                      <option value="Other">{t("Other Business", "অন্যান্য ব্যবসা")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Contact Method (Email or WhatsApp) *", "যোগাযোগের মাধ্যম (ইমেইল বা হোয়াটসঅ্যাপ) *")}</label>
                    <div className="grid grid-cols-2 gap-2 mb-1.5">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, contactMethod: "email"})}
                        className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold border transition-all flex items-center justify-center gap-1 ${formData.contactMethod === "email" ? "bg-cyan-500/20 border-cyan-500 text-cyan-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                      >
                        <FaEnvelope /> Email
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, contactMethod: "whatsapp"})}
                        className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold border transition-all flex items-center justify-center gap-1 ${formData.contactMethod === "whatsapp" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}
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
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold py-2.5 rounded-lg shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all text-xs mt-1 flex items-center justify-center gap-2"
                  >
                    <FaArrowRight /> {t("Submit Request", "সাবমিট রিকোয়েস্ট")}
                  </button>
                  <p className="text-[9px] text-slate-400 text-center flex items-center justify-center gap-1">
                    <FaShieldAlt className="text-cyan-400 text-[10px]" /> {t("Your information is completely secure.", "আপনার তথ্য সম্পূর্ণ সুরক্ষিত ও গোপনীয়।")}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Service overview strip */}
        <div className="mt-10 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 max-w-5xl mx-auto shadow-xl">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs uppercase tracking-[0.2em] font-mono mb-4">
            <FaNetworkWired />
            {t("ONE CONNECTED AUTOMATION SYSTEM", "একটি সংযুক্ত অটোমেশন সিস্টেম")}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 text-xs font-medium text-slate-300">
            {[
              t("Patient Acquisition", "পেশেন্ট অ্যাকুইজিশন"),
              t("AI Support", "এআই সাপোর্ট"),
              t("Appointments", "অ্যাপয়েন্টমেন্ট"),
              t("Follow-Up", "ফলো-আপ"),
              t("Recall", "রিকাল"),
              t("Reactivation", "রিয়াক্টিভেশন"),
              t("Marketing", "মার্কেটিং"),
            ].map((item, index, arr) => (
              <React.Fragment key={index}>
                <div className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-200">
                  {item}
                </div>
                {index < arr.length - 1 && (
                  <span className="text-cyan-400 font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
            {t("MORE THAN INDIVIDUAL TOOLS", "শুধু আলাদা টুলসের চেয়েও বেশি কিছু")}
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-5">
            {t("Your Dental Practice Doesn't Need", "আপনার ডেন্টাল প্র্যাকটিসের প্রয়োজন নেই")}
            <br />
            <span className="text-cyan-400">
              {t("More Disconnected Tools.", "আরও বিচ্ছিন্ন সব টুলের।")}
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto font-normal">
            {t("It needs connected workflows.", "এর জন্য প্রয়োজন সংযুক্ত ওয়ার্কফ্লো।")}
            <br />
            <br />
            {t(
              "TAE.Agency — Torik Automation Engineering — focuses on connecting repetitive parts of the patient journey so information can move between workflows instead of remaining trapped in separate manual processes.",
              "TAE.Agency — তরিক অটোমেশন ইঞ্জিনিয়ারিং — পেশেন্ট জার্নির রুটিন কাজগুলো কানেক্ট করার ওপর ফোকাস করে, যাতে তথ্যগুলো আলাদা ম্যানুয়াল প্রসেসে আটকে না থেকে ওয়ার্কফ্লোর মধ্যে অবাধে প্রবাহিত হতে পারে।"
            )}
          </p>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              {t("OUR PROCESS", "আমাদের কার্যপদ্ধতি")}
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-3">
              {t("We Don't Start With Software.", "আমরা সফটওয়্যার দিয়ে শুরু করি না।")}
              <br />
              <span className="text-cyan-400">
                {t("We Start With Your Workflow.", "আমরা শুরু করি আপনার ওয়ার্কফ্লো দিয়ে।")}
              </span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm">
              {t("The technology comes after we understand what your practice actually needs.", "আপনার প্র্যাকটিসের ঠিক কী প্রয়োজন তা বোঝার পরেই প্রযুক্তিগত কাজ শুরু হয়।")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((step) => (
              <div
                key={step.num}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-cyan-400 font-mono">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-white font-bold text-sm mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES (WITH UNIFORM CARD HEIGHT & CLEAN DROPDOWN) */}
      <section
        id="services"
        className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              <FaTooth />
              {t("CORE SERVICES", "মূল সেবাসমূহ")}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-6">
              {t("Six Automation Systems.", "ছয়টি অটোমেশন সিস্টেম।")}
              <br />
              <span className="text-cyan-400">
                {t("One Connected Patient Journey.", "একটি সংযুক্ত পেশেন্ট জার্নি।")}
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              {t(
                "Start with one workflow or build a complete automation ecosystem around your dental practice.",
                "একটি ওয়ার্কফ্লো দিয়ে শুরু করুন অথবা আপনার ডেন্টাল প্র্যাকটিসের চারপাশে একটি সম্পূর্ণ অটোমেশন ইকোসিস্টেম গড়ে তুলুন।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {services.map((service, index) => {
              const isServiceOpen = openService === index;
              return (
                <div
                  key={service.num}
                  className="group bg-slate-900/80 border border-slate-800 rounded-3xl p-7 flex flex-col hover:border-cyan-400/50 transition-all duration-300"
                >
                  {/* Top Header Part (Title & Subtitle) */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-cyan-400 font-mono font-bold">
                        {service.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>

                    <p className="text-cyan-400 text-sm font-semibold mb-4">
                      {service.subtitle}
                    </p>

                    {service.safe && (
                      <div className="p-3 mb-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                        <div className="flex gap-2">
                          <FaShieldAlt className="text-cyan-400 mt-0.5 flex-shrink-0 text-xs" />
                          <p className="text-[11px] text-cyan-300 leading-relaxed">
                            {t(
                              "AI handles routine, non-clinical communication. Diagnosis, treatment decisions, and care remain with qualified professionals.",
                              "এআই রুটিন ও অ-ক্লিনিক্যাল কমিউনিকেশন হ্যান্ডেল করে। ডায়াগনোসিস ও ক্লিনিক্যাল যত্নের দায়িত্ব চিকিৎসকদের।"
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dropdown for Description & Features */}
                  <div className="border-t border-slate-800 pt-4 mt-2">
                    <button
                      type="button"
                      onClick={() => toggleService(index)}
                      className="w-full flex items-center justify-between text-xs uppercase tracking-wider text-cyan-300 font-mono py-1.5 hover:text-cyan-400 transition-colors"
                    >
                      <span>{t("WHAT CAN BE AUTOMATED", "যা অটোমেট করা যায়")}</span>
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

                  <div className="mt-4 pt-3 border-t border-slate-800/70">
                    <p className="text-[11px] text-cyan-400 font-mono leading-relaxed">
                      {service.flow}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT CAN WE AUTOMATE */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              {t("AUTOMATION CAPABILITIES", "অটোমেশন সুবিধাসমূহ")}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-5">
              {t("What Can We", "আমরা কী")}
              <span className="text-cyan-400">
                {t(" Automate?", " অটোমেট করতে পারি?")}
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              {t(
                "Our systems can connect multiple operational areas of your practice instead of automating only one isolated task.",
                "আমাদের সিস্টেমগুলো শুধুমাত্র একটি বিচ্ছিন্ন কাজ নয়, বরং আপনার প্র্যাকটিসের একাধিক অপারেশনাল এরিয়াকে সংযুক্ত করতে পারে।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationAreas.map((area) => (
              <div
                key={area.title}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  {area.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-5">
                  {area.title}
                </h3>

                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              {t("CONNECTED PATIENT JOURNEY", "কানেক্টেড পেশেন্ট জার্নি")}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-6">
              {t("From First Inquiry", "প্রথম ইনকোয়ারি থেকে শুরু করে")}
              <br />
              <span className="text-cyan-400">
                {t("to Returning Patient.", "পুরনো রোগীর ফিরে আসা পর্যন্ত।")}
              </span>
            </h2>

            <p className="text-slate-300 text-lg">
              {t("Each workflow can become part of a larger connected system.", "প্রতিটি ওয়ার্কফ্লো একটি বৃহত্তর সংযুক্ত সিস্টেমের অংশ হতে পারে।")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {patientJourney.map((step) => (
              <div
                key={step.num}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-cyan-400 font-mono font-bold bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wide">
              INQUIRY → RESPONSE → FOLLOW-UP → BOOKING → VISIT → RECALL → REACTIVATION
            </p>
          </div>
        </div>
      </section>

      {/* AI + HUMAN */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-[#080c14] border border-cyan-500/20 rounded-3xl p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
                  {t("AI + HUMAN", "এআই + মানবীয়")}
                </span>

                <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-6">
                  {t("Automation Handles", "অটোমেশন হ্যান্ডেল করে")}
                  <br />
                  <span className="text-cyan-400">
                    {t("Repetitive Work.", "রুটিন কাজ।")}
                  </span>
                </h2>

                <p className="text-slate-300 leading-relaxed mb-7">
                  {t(
                    "Your dental team should remain in control of patient care. Automation is designed to support the team by handling repetitive workflows and routine communication.",
                    "আপনার ডেন্টাল টিম পেশেন্ট কেয়ারের নিয়ন্ত্রণে থাকবে। অটোমেশন রুটিন ওয়ার্কফ্লো এবং রুটিন কমিউনিকেশন হ্যান্ডেল করে টিমকে সহায়তা করার জন্য তৈরি।"
                  )}
                </p>

                <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-cyan-300 font-semibold">
                    {t("Human Care + Intelligent Automation.", "মানবীয় যত্ন + বুদ্ধিমান অটোমেশন।")}
                    <br />
                    {t("That's the TAE.Agency approach.", "এটিই TAE.Agency এর দৃষ্টিভঙ্গি।")}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-cyan-400 font-bold flex items-center gap-2 mb-5">
                    <FaRobot />
                    {t("Automation Can Handle", "অটোমেশন যা হ্যান্ডেল করতে পারে")}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      t("Routine inquiries", "রুটিন ইনকোয়ারি"),
                      t("Lead capture", "লিড ক্যাপচার"),
                      t("Follow-up workflows", "ফলো-আপ ওয়ার্কফ্লো"),
                      t("Appointment communication", "অ্যাপয়েন্টমেন্ট যোগাযোগ"),
                      t("Reminders", "রিমাইন্ডার"),
                      t("Recall workflows", "রিকাল ওয়ার্কফ্লো"),
                      t("Reactivation campaigns", "রিয়াক্টিভেশন ক্যাম্পেইন"),
                      t("Review requests", "রিভিউ রিকোয়েস্ট"),
                    ].map((item) => (
                      <div
                        key={item}
                        className="text-sm text-slate-400 flex gap-2"
                      >
                        <FaCheckCircle className="text-cyan-400 mt-1 text-xs" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-teal-400 font-bold flex items-center gap-2 mb-5">
                    <FaUserMd />
                    {t("Your Dental Team Handles", "আপনার ডেন্টাল টিম যা হ্যান্ডেল করে")}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      t("Diagnosis", "ডায়াগনোসিস"),
                      t("Treatment decisions", "ট্রিটমেন্ট ডিসিশন"),
                      t("Clinical questions", "ক্লিনিক্যাল প্রশ্ন"),
                      t("Patient care", "পেশেন্ট কেয়ার"),
                      t("Complex situations", "জটিল পরিস্থিতি"),
                      t("Human relationships", "মানবীয় সম্পর্ক"),
                    ].map((item) => (
                      <div
                        key={item}
                        className="text-sm text-slate-400 flex gap-2"
                      >
                        <FaCheckCircle className="text-teal-400 mt-1 text-xs" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
                {t("CUSTOM AUTOMATION", "কাস্টম অটোমেশন")}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-6">
                {t("Your Clinic Is Unique.", "আপনার ক্লিনিক অনন্য।")}
                <br />
                <span className="text-cyan-400">
                  {t("Your Automation Should Be Too.", "আপনার অটোমেশনও হওয়া উচিত তেমনি।")}
                </span>
              </h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                {t(
                  "A general dental practice does not operate exactly like an orthodontic, cosmetic, family, or multi-location practice.",
                  "একটি সাধারণ ডেন্টাল প্র্যাকটিস হুবহু অর্থোডন্টিক, কসমেটিক, ফ্যামিলি বা মাল্টি-লোকেশন প্র্যাকটিসের মতো পরিচালিত হয় না।"
                )}
              </p>

              <p className="text-slate-400 leading-relaxed">
                {t(
                  "That's why TAE.Agency designs workflows around your actual services, patient journey, communication process, team, booking system, and business goals.",
                  "সে কারণেই TAE.Agency আপনার প্রকৃত সার্ভিস, পেশেন্ট জার্নি, কমিউনিকেশন প্রসেস, টিম, বুকিং সিস্টেম এবং ব্যবসায়িক লক্ষ্যের ওপর ভিত্তি করে ওয়ার্কফ্লো ডিজাইন করে।"
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                t("Your Services", "আপনার সার্ভিসসমূহ"),
                t("Your Lead Sources", "আপনার লিড সোর্স"),
                t("Your Booking Process", "আপনার বুকিং প্রক্রিয়া"),
                t("Your Communication Channels", "আপনার যোগাযোগের মাধ্যম"),
                t("Your Team", "আপনার টিম"),
                t("Your Follow-Up Process", "আপনার ফলো-আপ প্রক্রিয়া"),
                t("Your Patient Journey", "আপনার পেশেন্ট জার্নি"),
                t("Your Business Goals", "আপনার ব্যবসায়িক লক্ষ্য"),
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex items-center gap-3 hover:border-cyan-500/40 transition-all"
                >
                  <FaCheckCircle className="text-cyan-400 text-xs" />
                  <span className="text-slate-300 text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-cyan-400 font-bold">
              {t("Built Around Your Clinic. Not the Other Way Around.", "আপনার ক্লিনিকের জন্য তৈরি। অন্যভাবে নয়।")}
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICES WE SERVE */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
            {t("BUILT FOR DENTAL PRACTICES", "ডেন্টাল প্র্যাকটিসের জন্য তৈরি")}
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-6">
            {t("Automation for", "বিভিন্ন ধরণের")}
            <span className="text-cyan-400">
              {t(" Different Types of Dental Practices.", " ডেন্টাল প্র্যাকটিসের জন্য অটোমেশন।")}
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            {t(
              "Whether you're running a single practice or a growing dental group, the workflow can be designed around your operation.",
              "আপনি একটিমাত্র ক্লিনিক চালান কিংবা একটি ক্রমবর্ধমান ডেন্টাল গ্রুপ, আপনার অপারেশনের ওপর ভিত্তি করে ওয়ার্কফ্লো ডিজাইন করা যেতে পারে।"
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceTypes.map((practice) => (
              <div
                key={practice}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <FaTooth className="text-cyan-400 mx-auto mb-4 text-xl" />
                <h3 className="text-white font-bold">
                  {practice}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TAE */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              {t("WHY TAE.AGENCY", "কেন TAE.AGENCY")}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">
              {t("Automation Built With", "উদ্দেশ্যমূলকভাবে")}
              <span className="text-cyan-400">
                {t(" Purpose.", " তৈরি অটোমেশন।")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <FaTooth />,
                title: t("Dental Practice Focused", "ডেন্টাল প্র্যাকটিস ফোকাসড"),
                desc: t("Our service structure is designed around the operational needs of dental practices.", "আমাদের সার্ভিস স্ট্রাকচার ডেন্টাল প্র্যাকটিসের অপারেশনাল প্রয়োজনের কথা মাথায় রেখে ডিজাইন করা।"),
              },
              {
                icon: <FaCogs />,
                title: t("Customized Systems", "কাস্টমাইজড সিস্টেম"),
                desc: t("Workflows are designed around your clinic instead of forcing your clinic into a generic template.", "ক্লিনিককে সাধারণ টেমপ্লেটে না ফেলে, আপনার ক্লিনিকের চারপাশেই ওয়ার্কফ্লো ডিজাইন করা হয়।"),
              },
              {
                icon: <FaRobot />,
                title: t("AI + Automation", "এআই + অটোমেশন"),
                desc: t("Combine intelligent AI capabilities with practical workflow automation.", "বুদ্ধিমান এআই ক্ষমতার সাথে প্র্যাকটিক্যাল ওয়ার্কফ্লো অটোমেশন একত্রিত করুন।"),
              },
              {
                icon: <FaNetworkWired />,
                title: t("Connected Patient Journey", "কানেক্টেড পেশেন্ট জার্নি"),
                desc: t("Connect acquisition, communication, appointments, follow-up, recall, and reactivation.", "অ্যাকুইজিশন, কমিউনিকেশন, অ্যাপয়েন্টমেন্ট, ফলো-আপ, রিকাল এবং রিয়াক্টিভেশন কানেক্ট করুন।"),
              },
              {
                icon: <FaUserMd />,
                title: t("Human + AI", "মানবীয় + এআই"),
                desc: t("Automation supports your team while humans remain responsible for patient care.", "রোগীর সেবার দায়িত্ব মানুষের হাতে রেখে অটোমেশন টিমকে সহায়তা করে।"),
              },
              {
                icon: <FaLayerGroup />,
                title: t("Scalable Workflows", "স্কেলেবল ওয়ার্কফ্লো"),
                desc: t("Start with the most important workflow and expand your automation system over time.", "সবচেয়ে গুরুত্বপূর্ণ ওয়ার্কফ্লো দিয়ে শুরু করুন এবং সময়ের সাথে অটোমেশন সিস্টেম প্রসারিত করুন।"),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (WITH MASTER ACCORDION DROPDOWN BUTTON AS REQUESTED) */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          
          {/* Master FAQ Header & Dropdown Trigger Button */}
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
              FAQ
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-6">
              {t("Questions About Our Services", "আমাদের সার্ভিসসমূহ সম্পর্কে প্রশ্ন")}
            </h2>

            {/* Master Dropdown Toggle Button */}
            <button
              type="button"
              onClick={() => setIsFaqOpen(!isFaqOpen)}
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-bold px-7 py-3.5 rounded-2xl shadow-xl transition-all duration-300"
            >
              <span>{isFaqOpen ? t("Hide Questions", "প্রশ্নগুলো লুকান") : t("View All Questions", "সকল প্রশ্নগুলো দেখুন")}</span>
              <FaChevronDown className={`transition-transform duration-300 ${isFaqOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* FAQ Items Container (Opens only when master button is clicked) */}
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
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-950/50 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-[2rem] p-8 sm:p-14 lg:p-16 text-center shadow-[0_0_80px_rgba(6,182,212,0.12)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono mb-5">
                <FaTooth />
                {t("START WITH YOUR WORKFLOW", "আপনার ওয়ার্কফ্লো দিয়ে শুরু করুন")}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                {t("Ready to Find What Your", "আপনার ডেন্টাল প্র্যাকটিস")}
                <br />
                <span className="text-cyan-400">
                  {t("Dental Practice Can Automate?", "কী অটোমেট করতে পারে তা জানতে প্রস্তুত?")}
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                {t(
                  "Let TAE.Agency review your patient journey, repetitive workflows, communication process, and automation opportunities.",
                  "TAE.Agency-কে আপনার পেশেন্ট জার্নি, রুটিন ওয়ার্কফ্লো, কমিউনিকেশন প্রসেস এবং অটোমেশনের সুযোগগুলো পর্যালোচনা করতে দিন।"
                )}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-9 py-5 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt />
                  {t("Book a Free Dental Automation Audit", "ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন")}
                </Link>

                <Link
                  href="/contact"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-9 py-5 rounded-2xl border border-slate-700 hover:border-cyan-500/40 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaHeadset />
                  {t("Talk to TAE.Agency", "TAE.Agency-এর সাথে কথা বলুন")}
                </Link>
              </div>

              <p className="text-xs text-slate-500 mt-6">
                {t("No obligation. Just a practical look at where automation may fit your dental practice.", "কোনো বাধ্যবাধকতা নেই। শুধু দেখুন অটোমেশন কীভাবে আপনার ডেন্টাল প্র্যাকটিসে মানিয়ে যেতে পারে।")}
              </p>

              <div className="mt-12">
                <p className="text-cyan-400 font-mono text-sm">
                  CAPTURE → RESPOND → FOLLOW UP → BOOK → REMIND
                </p>

                <p className="text-slate-600 font-mono text-xs mt-2">
                  VISIT → RECALL → REACTIVATE → RETURN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}