export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#040711] py-10 px-4 sm:px-6 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left text-xs text-slate-400">
        <div>
          <div className="text-white font-bold text-sm sm:text-base mb-1">TAE.Agency</div>
          <p className="text-slate-500 text-[11px] sm:text-xs">Torik Automation Engineering - Scaling business through intelligent AI solutions.</p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms</a>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <div className="text-slate-500 text-[11px]">
          © 2026 TAE.Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}