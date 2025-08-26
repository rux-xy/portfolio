import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section id="education" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Education</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {EDUCATION.map((ed) => (
          <article
            key={ed.school}
            className="rounded-2xl border border-[#24242a] bg-[#151518] p-4"
          >
            <h3 className="font-semibold">{ed.school}</h3>
            <p className="text-sm text-[#b4b4bb]">{ed.program}</p>
            <p className="text-xs text-[#b4b4bb] mt-1">{ed.time}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
