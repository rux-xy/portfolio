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
          <article
            key={p.title}
            className="rounded-2xl overflow-hidden border border-[#24242a] bg-[#151518] hover:-translate-y-1 hover:border-[#2b2b33] transition shadow-[0_10px_30px_rgba(0,0,0,.35)]"
          >
            {p.img && <img src={p.img} alt="" />}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-[#b4b4bb] mb-2">{p.desc}</p>
              <p className="text-xs text-[#b4b4bb] mb-2">
                <strong className="text-white">Role:</strong> {p.role} •{" "}
                <strong className="text-white">Time:</strong> {p.time}
              </p>
              <div className="flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#b4b4bb] border border-[#24242a] rounded-full px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
