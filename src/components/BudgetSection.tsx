export default function BudgetSection() {
  return (
    <section className="mx-auto max-w-screen-lg px-4 sm:px-6 py-8">
      <h3 className="text-2xl font-extrabold text-center">Quel pack est fait pour vous ?</h3>
      <p className="text-center text-neutral-600 dark:text-neutral-300 mt-1">Quel est votre budget ?</p>
      <div className="mt-4 grid gap-3">
        {["≤100€","100€-400€",">400€"].map((label) => (
          <button key={label} className="w-full rounded-2xl border border-black/10 dark:border-white/10 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
