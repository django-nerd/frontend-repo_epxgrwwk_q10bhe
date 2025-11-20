import { Map, Zap, ShieldCheck } from "lucide-react";

export default function Features({ t }) {
  const items = [
    {
      icon: <Map className="h-5 w-5 text-sky-500" />,
      title: t.features.item1.title,
      desc: t.features.item1.desc,
    },
    {
      icon: <Zap className="h-5 w-5 text-violet-500" />,
      title: t.features.item2.title,
      desc: t.features.item2.desc,
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: t.features.item3.title,
      desc: t.features.item3.desc,
    },
  ];
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-slate-50 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
