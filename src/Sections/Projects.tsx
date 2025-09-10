import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Projects</h2>
      <p className="text-[#b4b4bb] mb-6">
        Academic & personal work leading teams and building end-to-end
        solutions.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
