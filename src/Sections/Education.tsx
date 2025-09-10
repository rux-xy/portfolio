import EducationCard from "../components/EducationCard";
import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section id="education" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Education</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {EDUCATION.map((ed) => (
          <EducationCard key={ed.school} education={ed} />
        ))}
      </div>
    </section>
  );
}
