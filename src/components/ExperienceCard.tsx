export interface Experience {
  role: string;
  org: string;
  time: string;
  points: string[];
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article
      key={experience.role}
      className="rounded-2xl border border-[#24242a] bg-[#151518] p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">
          {experience.role} —{" "}
          <span className="text-[#b4b4bb]">{experience.org}</span>
        </h3>
        <span className="text-xs text-[#b4b4bb]">{experience.time}</span>
      </div>
      <ul className="mt-2 list-disc pl-5 text-sm text-[#b4b4bb] space-y-1">
        {experience.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
