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
    <article className="group relative rounded-2xl overflow-hidden border border-[#24242a] bg-[#151518] hover:border-[#2b2b33] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,.35)] hover:shadow-[0_20px_50px_rgba(0,0,0,.5)] hover:-translate-y-2">
      {/* Image with overlay effect */}
      <div className="relative overflow-hidden">
        {project.img && (
          <>
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Project link button that appears on hover */}
            {project.url && (
              <a
                href={project.url}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] text-[#0a0a0b] font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Project
              </a>
            )}
          </>
        )}

        {/* Colored accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] group-hover:w-full transition-all duration-500" />
      </div>

      <div className="p-5 relative">
        {/* Title with gradient on hover */}
        <h3 className="text-lg font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-[#6cf0c2] group-hover:to-[#8aa8ff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-[#b4b4bb] mb-3 leading-relaxed group-hover:text-[#c4c4cb] transition-colors duration-300">
          {project.desc}
        </p>

        <div className="mb-4 p-3 rounded-xl bg-[#0f0f11] border border-[#1a1a1f] group-hover:border-[#24242a] transition-colors duration-300">
          <p className="text-xs text-[#b4b4bb] group-hover:text-[#c4c4cb] transition-colors duration-300">
            <span className="text-[#6cf0c2] font-medium">Role:</span>{" "}
            {project.role}
            <span className="mx-2 text-[#3a3a3f]">•</span>
            <span className="text-[#8aa8ff] font-medium">Duration:</span>{" "}
            {project.time}
          </p>
        </div>

        {/* Tech stack chips */}
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((technology, index) => (
            <div
              key={technology}
              className="transform transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <Chip label={technology} />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-gradient-to-r from-[#8aa8ff] to-[#6cf0c2] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(108,240,194,0.05)] to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      </div>
    </article>
  );
}

export default ProjectCard;
