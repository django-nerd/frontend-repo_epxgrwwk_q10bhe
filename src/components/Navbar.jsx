import { Globe, Menu } from "lucide-react";

export default function Navbar({ lang, setLang, t }) {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-400 shadow-inner shadow-sky-100 grid place-items-center">
            <span className="text-white font-semibold">IM</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-800">InteractMap</p>
            <p className="text-xs text-slate-500">{t.tagline}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">{t.nav.features}</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">{t.nav.pricing}</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="toggle language"
          >
            <Globe size={18} />
            <span className="hidden sm:inline">{lang === "en" ? "ES" : "EN"}</span>
          </button>
          <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
