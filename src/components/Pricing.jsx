export default function Pricing({ t }) {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">{t.pricing.title}</h2>
          <p className="mt-3 text-slate-600">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">{t.pricing.basic.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{t.pricing.basic.desc}</p>
            <div className="mt-4">
              <span className="text-4xl font-semibold text-slate-900">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>Community support</li>
              <li>Up to 3 projects</li>
              <li>Embed-ready</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white">{t.cta.getStarted}</a>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">
            <div className="inline-block px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs">{t.pricing.popular}</div>
            <h3 className="text-lg font-semibold text-slate-900 mt-2">{t.pricing.pro.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{t.pricing.pro.desc}</p>
            <div className="mt-4">
              <span className="text-4xl font-semibold text-slate-900">$29</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>Priority support</li>
              <li>Unlimited projects</li>
              <li>Advanced analytics</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white">{t.cta.getStarted}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
