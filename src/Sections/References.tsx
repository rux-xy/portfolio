import { REFERENCES } from "../data";
import ReferencesCard from "../components/ReferencesCard";

export default function References() {
  return (
    <section id="references" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">References</h2>
      <p className="text-[#b4b4bb] mb-6">
        Available on request — or contact below.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {REFERENCES.map((r) => (
          <ReferencesCard key={r.name} reference={r} />
        ))}
      </div>
    </section>
  );
}
