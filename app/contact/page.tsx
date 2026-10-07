"use client";

import React, { useState } from "react";
import { 
  FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaInstagram,
  FaPhoneAlt, FaPaperPlane, FaCheckCircle, FaShieldAlt, FaSpinner 
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    businessType: "Dental Practice",
    contactMethod: "whatsapp",
    contactValue: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "info@tae.agency";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "195853f8-c1a8-415e-8cce-b8dd5212d790",
          subject: `নতুন লিড (TAE.Agency): ${formData.fullName} (${formData.businessType})`,
          from_name: "TAE Agency Contact Form",
          "Client Name": formData.fullName,
          "Service Type": formData.businessType,
          "Contact Method": formData.contactMethod.toUpperCase(),
          "Contact Info": formData.contactValue,
          "Project Details": formData.message || "কোনো অতিরিক্ত মেসেজ নেই",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch (error) {
      setErrorMessage("সার্ভারের সাথে সংযোগ স্থাপন করা সম্ভব হয়নি। আপনার ইন্টারনেট কানেকশন চেক করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* FREE DENTAL AUTOMATION AUDIT BANNER */}
        <div className="bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(6,182,212,0.12)] text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            {t("Find the Automation Opportunities Inside Your Dental Practice.", "আপনার ডেন্টাল প্র্যাকটিসের ভেতরের অটোমেশন সুযোগগুলো খুঁজে বের করুন।")}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              "Not sure where to start? Book a free Dental Automation Audit and discover where repetitive work, slow follow-up, and manual processes may be creating unnecessary friction.",
              "কোথা থেকে শুরু করবেন বুঝতে পারছেন না? একটি ফ্রি ডেন্টাল অটোমেশন অডিট বুক করুন এবং দেখুন কোথায় রুটিন কাজ, স্লো ফলো-আপ এবং ম্যানুয়াল প্রসেস অপ্রয়োজনীয় বাধা তৈরি করছে।"
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-left max-w-4xl mx-auto mb-8">
            {[
              { num: "01", title: t("Patient Journey Review", "পেশেন্ট জার্নি রিভিউ") },
              { num: "02", title: t("Workflow Review", "ওয়ার্কফ্লো রিভিউ") },
              { num: "03", title: t("Automation Opportunities", "অটোমেশন সুযোগ") },
              { num: "04", title: t("Recommended Roadmap", "প্রস্তাবিত রোডম্যাপ") },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                <span className="text-cyan-400 font-mono font-bold text-xs">{step.num}</span>
                <p className="text-white font-semibold text-xs mt-0.5">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t("Get in Touch With Us", "আমাদের সাথে যোগাযোগ করুন")}
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t("Let's Talk to Automate", "আপনার ব্যবসা অটোমেট করতে")} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t("Your Business Today", "কথা বলুন আজই")}</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Compact Interactive Contact Form */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl animate-bounce">
                  <FaCheckCircle />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t("Thank you! Your information has been successfully sent.", "ধন্যবাদ! আপনার তথ্য সফলভাবে পাঠানো হয়েছে।")}
                </h3>
                <p className="text-slate-300 text-xs max-w-sm mx-auto">
                  {t("We have received your request. We will contact you shortly.", "আমরা আপনার রিকোয়েস্টটি পেয়েছি। খুব শীঘ্রই যোগাযোগ করা হবে।")}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", businessType: "Dental Practice", contactMethod: "whatsapp", contactValue: "", message: "" });
                  }}
                  className="bg-red-500 hover:bg-red-400 text-white font-bold px-4 py-2 rounded-xl transition-all text-xs"
                >
                  {t("Send Another Message", "আরেকটি মেসেজ পাঠান")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                <h3 className="text-lg font-bold text-white mb-3 border-b border-slate-800 pb-2.5 flex items-center gap-2">
                  <FaPaperPlane className="text-red-400 text-sm" /> {t("Project Discussion Form", "প্রজেক্ট ডিসকাশন ফর্ম")}
                </h3>

                {errorMessage && (
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Full Name *", "পূর্ণ নাম *")}</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t("Enter your full name", "যেমন: রাশেদ আহমেদ")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Business Category *", "বিজনেস ক্যাটাগরি *")}</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                  >
                    <option value="Dental Practice">{t("Dental Practice / Clinic", "ডেন্টাল প্র্যাকটিস / ক্লিনিক")}</option>
                    <option value="Service-Oriented Business">{t("Service-Oriented Business", "সার্ভিস-অরিয়েন্টেড বিজনেস")}</option>
                    <option value="Real Estate">{t("Real Estate", "রিয়েল এস্টেট")}</option>
                    <option value="Other">{t("Other Business", "অন্যান্য ব্যবসা")}</option>
                  </select>
                </div>

                {/* Contact Choice: Email or WhatsApp */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Contact Method (Email or WhatsApp) *", "যোগাযোগের মাধ্যম (ইমেইল বা হোয়াটসঅ্যাপ) *")}</label>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, contactMethod: "email"})}
                      className={`py-2 px-3 rounded-xl text-[11px] font-semibold border transition-all flex items-center justify-center gap-1.5 ${formData.contactMethod === "email" ? "bg-cyan-500/20 border-cyan-500 text-cyan-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                    >
                      <FaEnvelope /> Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, contactMethod: "whatsapp"})}
                      className={`py-2 px-3 rounded-xl text-[11px] font-semibold border transition-all flex items-center justify-center gap-1 ${formData.contactMethod === "whatsapp" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}
                    >
                      <FaWhatsapp /> WhatsApp
                    </button>
                  </div>
                  <input
                    type="text"
                    name="contactValue"
                    required
                    placeholder={formData.contactMethod === "whatsapp" ? "+880 1724-132820" : "yourname@email.com"}
                    value={formData.contactValue}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">{t("Project Details (Optional)", "প্রজেক্টের বিবরণ (ঐচ্ছিক)")}</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("Write your project idea...", "আপনার প্রজেক্ট আইডিয়া লিখুন...")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold py-3 rounded-xl shadow-[0_0_15px_rgba(225,29,72,0.4)] transition-all text-xs flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" /> {t("Sending...", "পাঠানো হচ্ছে...")}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> {t("Submit Request", "সাবমিট রিকোয়েস্ট")}
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1 pt-1">
                  <FaShieldAlt className="text-cyan-400 text-xs" /> {t("Your information is completely secure.", "আপনার তথ্য সম্পূর্ণ সুরক্ষিত ও গোপনীয়।")}
                </p>
              </form>
            )}

          </div>

          {/* Right: Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
              <h3 className="text-lg font-bold text-white mb-1">
                {t("Direct Contact Channels", "সরাসরি যোগাযোগের মাধ্যম")}
              </h3>
              <p className="text-slate-400 text-xs">
                {t(
                  "To avoid the hassle of filling out the form, you can contact us directly through the channels below:",
                  "ফর্ম পূরণের ঝামেলা এড়াতে সরাসরি আমাদের সাথে নিচের মাধ্যমগুলোতে যোগাযোগ করতে পারেন:"
                )}
              </p>

              <div className="space-y-2.5 pt-1">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/8801724132820" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-base group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{t("WhatsApp Chat", "WhatsApp চ্যাট")}</div>
                    <div className="text-white font-bold text-xs">+880 1724-132820</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="#email" 
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-base group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{t("Email Support", "ইমেইল সাপোর্ট")}</div>
                    <div className="text-white font-bold text-xs">info@tae.agency</div>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/tae.agency_official/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-base group-hover:scale-110 transition-transform">
                    <FaInstagram />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{t("Instagram", "ইনস্টাগ্রাম")}</div>
                    <div className="text-white font-bold text-xs">@tae.agency_official</div>
                  </div>
                </a>

                {/* Facebook Messenger */}
                <a 
                  href="https://m.me/taeagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-base group-hover:scale-110 transition-transform">
                    <FaFacebookMessenger />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{t("Facebook Messenger", "ফেসবুক মেসেঞ্জার")}</div>
                    <div className="text-white font-bold text-xs">TAE.Agency</div>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a 
                  href="tel:+8801724132820" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-sm group-hover:scale-110 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{t("Direct Call", "সরাসরি কল করুন")}</div>
                    <div className="text-white font-bold text-xs">+880 1724-132820</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-950/30 to-rose-950/30 border border-red-500/20 rounded-xl p-3.5 text-center text-xs text-red-300">
              ⚡ {t("We usually reply within **2 hours** on working days.", "সাধারণত কাজের দিনগুলোতে **২ ঘণ্টার মধ্যে** আমরা রিপ্লাই দিয়ে থাকি।")}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}