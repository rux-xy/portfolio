import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Experience</h2>
      <p className="text-[#b4b4bb] mb-6">
        Roles where I practiced content, design, leadership, and teaching.
      </p>

      <div className="space-y-4">
        {EXPERIENCE.map((e) => (
          <article
            key={e.role}
            className="rounded-2xl border border-[#24242a] bg-[#151518] p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold">
                {e.role} — <span className="text-[#b4b4bb]">{e.org}</span>
              </h3>
              <span className="text-xs text-[#b4b4bb]">{e.time}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[#b4b4bb] space-y-1">
              {e.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
