"use client";
import { useState } from "react";

export default function InlineInquiryForm() {
  const [values, setValues] = useState({ name: "", email: "", goal: "", budget: "" });
  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };
  return (
    <form className="mx-auto mb-8 max-w-xl text-gray-200">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          name="name"
          value={values.name}
          onChange={update}
          placeholder="Votre nom"
          className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={update}
          placeholder="Email"
          className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        <input
          name="goal"
          value={values.goal}
          onChange={update}
          placeholder="Votre objectif"
          className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        <input
          name="budget"
          value={values.budget}
          onChange={update}
          placeholder="Budget estimé"
          className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/40"
        />
      </div>
      <button
        type="submit"
        className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-xl border border-white/30 px-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black"
      >
        Envoyer
      </button>
    </form>
  );
}
