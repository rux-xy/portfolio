type Project = {
  title: string;
  description: string;
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  { title: "Tic‑Tac‑Toe", description: "A tiny game built with React." },
  { title: "Portfolio", description: "This very site — Vite + React + TS." },
];

export default function Projects() {
  return (
    <section className="card">
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.title} style={{ marginBottom: 12 }}>
            <strong>{p.title}</strong> — {p.description}{" "}
            {p.link && (
              <>
                ·{" "}
                <a href={p.link} target="_blank">
                  Live
                </a>
              </>
            )}
            {p.repo && (
              <>
                {" "}
                |{" "}
                <a href={p.repo} target="_blank">
                  Repo
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
