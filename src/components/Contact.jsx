import { useState } from 'react';

export default function Contact({ t }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${backend}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">{t.contact.title}</h2>
            <p className="mt-3 text-slate-600">{t.contact.subtitle}</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <p className="text-sm text-slate-600"><strong>{t.contact.support.title}:</strong> {t.contact.support.desc}</p>
              <p className="text-sm text-slate-600 mt-2">Email: support@interactmap.app</p>
              <p className="text-sm text-slate-600">{t.contact.hours}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <label className="block text-sm font-medium text-slate-700">{t.form.name}
              <input name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
            </label>
            <label className="block text-sm font-medium text-slate-700 mt-4">{t.form.email}
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
            </label>
            <label className="block text-sm font-medium text-slate-700 mt-4">{t.form.message}
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
            </label>
            <button disabled={status==="loading"} className="mt-6 inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white">
              {status === "loading" ? t.form.sending : t.form.send}
            </button>
            {status === "success" && <p className="text-emerald-600 text-sm mt-3">{t.form.sent}</p>}
            {status === "error" && <p className="text-rose-600 text-sm mt-3">{t.form.error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
