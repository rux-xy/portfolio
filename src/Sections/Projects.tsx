import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5; // pixels per frame

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to beginning when reaching the end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section id="projects" className="w-full py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[min(1100px,92%)] mx-auto mb-8">
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Projects</h2>
        <p className="text-[#b4b4bb] mb-4">
          Academic & personal work leading teams and building end-to-end
          solutions.
        </p>
      </div>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6 scrollbar-hide"
        style={{
          width: "calc(100% + 48px)", // Account for padding
          marginLeft: "-24px",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate projects array for seamless loop */}
        {[...PROJECTS, ...PROJECTS].map((project, index) => (
          <div key={`${project.title}-${index}`} className="flex-none w-80">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#0f0f11] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#0f0f11] to-transparent pointer-events-none" />
    </section>
  );
}
