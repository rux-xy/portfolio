import { ACHIEVEMENTS, CLUB_PROJECTS } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">
        Achievements & Clubs
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#24242a] bg-[#151518] p-4">
          <h3 className="font-semibold mb-2">Achievements</h3>
          <ul className="list-disc pl-5 text-sm text-[#b4b4bb] space-y-1">
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#24242a] bg-[#151518] p-4">
          <h3 className="font-semibold mb-2">Club Projects</h3>
          <ul className="space-y-2">
            {CLUB_PROJECTS.map((c) => (
              <li key={c.name} className="text-sm text-[#b4b4bb]">
                <span className="text-white font-medium">{c.name}</span>
                <br />
                <span>{c.desc}</span>
                <br />
                <span className="text-xs">
                  Role: {c.role} • Time: {c.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
