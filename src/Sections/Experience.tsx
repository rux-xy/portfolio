import { EXPERIENCE } from "../data";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Experience</h2>
      <p className="text-[#b4b4bb] mb-6">
        Roles where I practiced content, design, leadership, and teaching.
      </p>

      <div className="space-y-4">
        {EXPERIENCE.map((e) => (
          <ExperienceCard key={e.role} experience={e} />
        ))}
      </div>
    </section>
  );
}
