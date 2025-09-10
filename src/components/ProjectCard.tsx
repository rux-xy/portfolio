import Chip from "./SkillsChip";

export interface Project {
  title: string;
  desc: string;
  role: string;
  time: string;
  tech: string[];
  img?: string;
  url?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl overflow-hidden border border-[#24242a] bg-[#151518] hover:-translate-y-1 hover:border-[#2b2b33] transition shadow-[0_10px_30px_rgba(0,0,0,.35)]">
      {project.img && <img src={project.img} alt="" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-[#b4b4bb] mb-2">{project.desc}</p>
        <p className="text-xs text-[#b4b4bb] mb-2">
          <strong className="text-white">Role:</strong> {project.role} •{" "}
          <strong className="text-white">Time:</strong> {project.time}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((technology) => (
            <Chip key={technology} label={technology} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
