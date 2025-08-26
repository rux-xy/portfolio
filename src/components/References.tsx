import { REFERENCES } from "../data";

export default function References() {
  return (
    <section id="references" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">References</h2>
      <p className="text-[#b4b4bb] mb-6">
        Available on request — or contact below.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {REFERENCES.map((r) => (
          <article
            key={r.name}
            className="rounded-2xl border border-[#24242a] bg-[#151518] p-4"
          >
            <h3 className="font-semibold">{r.name}</h3>
            <p className="text-sm text-[#b4b4bb]">{r.title}</p>
            <p className="text-xs text-[#b4b4bb] mt-1">
              {r.phone}
              {r.email ? ` • ${r.email}` : ""}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
