import { CORE_SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">
        Core Skills
      </h2>
      <p className="text-[#b4b4bb] mb-4">
        Technologies and tools I use across programming, data analysis, and
        design.
      </p>

      <div className="flex flex-wrap gap-2">
        {CORE_SKILLS.map((s) => (
          <span
            key={s}
            className="text-xs text-[#b4b4bb] border border-[#24242a] rounded-full px-2 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
