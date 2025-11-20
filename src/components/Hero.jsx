import Spline from '@splinetool/react-spline';

export default function Hero({ t }) {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/70 border border-slate-200 text-slate-600 text-xs mb-4">
              <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" />
              {t.hero.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-slate-900 text-white shadow-sm hover:opacity-95">
                {t.cta.primary}
              </a>
              <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-700 hover:bg-white">
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
