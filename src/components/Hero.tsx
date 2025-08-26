import { CONTACT, LANGUAGES } from "../data";

export default function Hero() {
  return (
    <header id="home" className="w-[min(1100px,92%)] mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] items-center gap-8">
        <div>
          <h1 className="text-[clamp(45px,6vw,56px)] leading-[1.1] font-extrabold mb-3">
            {CONTACT.name} —<br />
            {CONTACT.title}
          </h1>
          <p className="text-[#b4b4bb] mb-4">
            Undergraduate in Computer Science, Statistics, and Pure
            Mathematics—actively growing as a programmer and graphic designer.
            Seeking an internship to learn fast and contribute.
          </p>
          <ul className="text-sm text-[#b4b4bb] mb-6 space-y-1">
            <li>
              <strong className="text-white">Phone:</strong> {CONTACT.phone}
            </li>
            <li>
              <strong className="text-white">Email:</strong> {CONTACT.email}
            </li>
            <li>
              <strong className="text-white">Address:</strong> {CONTACT.address}
            </li>
            <li>
              <strong className="text-white">Languages:</strong>{" "}
              {LANGUAGES.join(", ")}
            </li>
          </ul>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl border border-transparent bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] text-[#0a0a0b] font-semibold shadow-[0_10px_30px_rgba(0,0,0,.35)]"
            >
              View Projects
            </a>
            <a
              href={CONTACT.cv}
              className="px-4 py-2 rounded-xl border border-[#24242a] shadow-[0_10px_30px_rgba(0,0,0,.35)] bg-gradient-to-b from-[#1a1a1f] to-[#151518]"
            >
              Download CV
            </a>
          </div>
        </div>
        <img
          src="/logo.png"
          alt="Portrait/logo"
          className="rounded-2xl border border-[#24242a]"
        />
      </div>
    </header>
  );
}
