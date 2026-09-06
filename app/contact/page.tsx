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
    businessType: "",
    customBusinessType: "",
    contactMethod: "email",
    contactValue: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const finalBusinessType = formData.businessType === "Other" 
      ? `Other: ${formData.customBusinessType}` 
      : formData.businessType;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "195853f8-c1a8-415e-8cce-b8dd5212d790",
          subject: `নতুন লিড (TAE.Agency): ${formData.fullName} (${finalBusinessType})`,
          from_name: "TAE Agency Contact Form",
          
          "Client Name": formData.fullName,
          "Service Type": finalBusinessType,
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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t("Get in Touch With Us", "আমাদের সাথে যোগাযোগ করুন")}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t("Let's Talk to Automate", "আপনার ব্যবসা অটোমেট করতে")} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t("Your Business Today", "কথা বলুন আজই")}</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            {t(
              "Fill out the form below or reach out to us directly via WhatsApp, Facebook, Instagram, or Email.",
              "নিচের ফর্মটি পূরণ করুন অথবা সরাসরি আমাদের WhatsApp, ফেসবুক, ইনস্টাগ্রাম বা ইমেইলে যোগাযোগ করুন।"
            )}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-5 sm:p-8 shadow-2xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl animate-bounce">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("Thank you! Your information has been successfully sent.", "ধন্যবাদ! আপনার তথ্য সফলভাবে পাঠানো হয়েছে।")}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  {t(
                    "We have received your request. We will contact you shortly through your provided medium.",
                    "আমরা আপনার রিকোয়েস্টটি পেয়েছি। খুব শীঘ্রই আপনার দেওয়া মাধ্যমে যোগাযোগ করা হবে।"
                  )}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", businessType: "", customBusinessType: "", contactMethod: "email", contactValue: "", message: "" });
                  }}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg text-sm"
                >
                  {t("Send Another Message", "আরেকটি মেসেজ পাঠান")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <FaPaperPlane className="text-cyan-400 text-base" /> {t("Project Discussion Form", "প্রজেক্ট ডিসকাশন ফর্ম")}
                </h3>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    {t("Full Name *", "পূর্ণ নাম (Full Name) *")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t("Enter your full name", "আপনার পুরো নাম লিখুন")}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Business / Service Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    {t("Your Business Type or Category *", "আপনার ব্যবসার ধরণ বা ক্যাটাগরি *")}
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="" disabled>
                      {t("Select your business type", "আপনার ব্যবসার ধরণ সিলেক্ট করুন")}
                    </option>
                    <option value="রিয়েল এস্টেট 🏠">1. {t("Real Estate 🏠", "রিয়েল এস্টেট 🏠")}</option>
                    <option value="অটো ডিটেইলিং 🚗">2. {t("Auto Detailing 🚗", "অটো ডিটেইলিং 🚗")}</option>
                    <option value="বাড়ি সংস্কার ও নবায়ন 🏗️">3. {t("Home Renovation & Remodeling 🏗️", "বাড়ি সংস্কার ও নবায়ন 🏗️")}</option>
                    <option value="ডেন্টাল / মেডিকেল ক্লিনিক 🦷">4. {t("Dental / Medical Clinic 🦷", "ডেন্টাল / মেডিকেল ক্লিনিক 🦷")}</option>
                    <option value="হোম সার্ভিস ব্যবসা 🔧">5. {t("Home Services Business 🔧", "হোম সার্ভিস ব্যবসা 🔧")}</option>
                    <option value="Other">{t("Other", "অন্যান্য (Other)")}</option>
                  </select>
                </div>

                {/* Conditional Custom Business Field */}
                {formData.businessType === "Other" && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label className="block text-xs font-medium text-cyan-300">
                      {t("Enter your business name *", "আপনার ব্যবসার নামটি লিখুন *")}
                    </label>
                    <input
                      type="text"
                      name="customBusinessType"
                      required
                      value={formData.customBusinessType}
                      onChange={handleChange}
                      placeholder={t("e.g. E-commerce, Law Firm, etc.", "যেমন: ই-কমার্স, ল’ ফার্ম ইত্যাদি")}
                      className="w-full bg-slate-900/90 border border-cyan-500/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                )}

                {/* Contact Choice: Email or WhatsApp */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300">
                    {t("Contact Method (Select Email or WhatsApp) *", "যোগাযোগের মাধ্যম (ইমেইল অথবা WhatsApp সিলেক্ট করুন) *")}
                  </label>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${formData.contactMethod === 'email' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-semibold' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="email" 
                        checked={formData.contactMethod === 'email'} 
                        onChange={handleChange}
                        className="hidden"
                      />
                      <FaEnvelope /> {t("Email Address", "ইমেইল ঠিকানা")}
                    </label>

                    <label className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${formData.contactMethod === 'whatsapp' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-semibold' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="whatsapp" 
                        checked={formData.contactMethod === 'whatsapp'} 
                        onChange={handleChange}
                        className="hidden"
                      />
                      <FaWhatsapp /> {t("WhatsApp Number", "WhatsApp নম্বর")}
                    </label>
                  </div>

                  {/* Dynamic Input Field */}
                  <input
                    type={formData.contactMethod === 'email' ? 'email' : 'text'}
                    name="contactValue"
                    required
                    value={formData.contactValue}
                    onChange={handleChange}
                    placeholder={formData.contactMethod === 'email' ? 'info@tae.agency' : '+880 1724-132820'}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors mt-2"
                  />
                </div>

                {/* Additional Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    {t("Tell us about your project or request (Optional)", "আপনার প্রজেক্ট বা রিকোয়েস্টার সম্পর্কে কিছু বলুন (ঐচ্ছিক)")}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("Write your current project idea or issue in detail...", "আপনার বর্তমান প্রজেক্ট আইডিয়া বা সমস্যা বিস্তারিত লিখুন...")}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer text-sm"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-base" /> {t("Sending...", "পাঠানো হচ্ছে...")}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> {t("Submit Request", "রিকোয়েস্ট সাবমিট করুন")}
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                  <FaShieldAlt className="text-cyan-400" /> {t("Your information will be kept completely secure and confidential.", "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয় রাখা হবে।")}
                </p>
              </form>
            )}

          </div>

          {/* Right: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white mb-1">
                {t("Direct Contact Channels", "সরাসরি যোগাযোগের মাধ্যম")}
              </h3>
              <p className="text-slate-400 text-xs">
                {t(
                  "To avoid the hassle of filling out the form, you can contact us directly through the channels below:",
                  "ফর্ম পূরণের ঝামেলা এড়াতে সরাসরি আমাদের সাথে নিচের মাধ্যমগুলোতে যোগাযোগ করতে পারেন:"
                )}
              </p>

              <div className="space-y-3 pt-1">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/8801724132820" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{t("WhatsApp Chat", "WhatsApp চ্যাট")}</div>
                    <div className="text-white font-bold text-xs sm:text-sm">+880 1724-132820</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@tae.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{t("Email Support", "ইমেইল সাপোর্ট")}</div>
                    <div className="text-white font-bold text-xs sm:text-sm">info@tae.agency</div>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/tae.agency_official/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-lg group-hover:scale-110 transition-transform">
                    <FaInstagram />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{t("Instagram", "ইনস্টাগ্রাম")}</div>
                    <div className="text-white font-bold text-xs sm:text-sm">@tae.agency_official</div>
                  </div>
                </a>

                {/* Facebook Messenger */}
                <a 
                  href="https://m.me/taeagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg group-hover:scale-110 transition-transform">
                    <FaFacebookMessenger />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{t("Facebook Messenger", "ফেসবুক মেসেঞ্জার")}</div>
                    <div className="text-white font-bold text-xs sm:text-sm">TAE.Agency</div>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a 
                  href="tel:+8801724132820" 
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-base group-hover:scale-110 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{t("Direct Call", "সরাসরি কল করুন")}</div>
                    <div className="text-white font-bold text-xs sm:text-sm">+880 1724-132820</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 rounded-2xl p-4 text-center text-xs text-cyan-300">
              ⚡ {t("We usually reply within **2 hours** on working days.", "সাধারণত কাজের দিনগুলোতে **২ ঘণ্টার মধ্যে** আমরা রিপ্লাই দিয়ে থাকি।")}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}