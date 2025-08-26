export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-[rgba(15,15,17,.6)] border-b border-[#24242a]">
      <div className="w-[min(1100px,92%)] mx-auto h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-8 rounded-md border border-[#24242a]"
          />
          <span className="font-extrabold tracking-tight text-xl">Rumeth</span>
        </a>
        <ul className="hidden md:flex items-center gap-5 text-[#b4b4bb]">
          <li>
            <a
              className="px-2 py-2 rounded-md hover:bg-[#1a1a20]"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="px-2 py-2 rounded-md hover:bg-[#1a1a20]"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="px-2 py-2 rounded-md hover:bg-[#1a1a20]"
              href="#education"
            >
              Education
            </a>
          </li>
          <li>
            <a
              className="px-2 py-2 rounded-md hover:bg-[#1a1a20]"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="px-2 py-2 rounded-md hover:bg-[#1a1a20]"
              href="#achievements"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 rounded-xl border border-transparent bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] text-[#0a0a0b] font-semibold shadow-[0_10px_30px_rgba(0,0,0,.35)]"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
