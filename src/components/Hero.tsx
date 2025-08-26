import { CONTACT } from "../data";

export default function Hero() {
  return (
    <header id="home" className="w-[min(1100px,92%)] mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] items-center gap-8">
        <div>
          <h1 className="text-[clamp(44px,8vw,64px)] leading-[1.15] pb-1 font-black font-['Anton',_Inter,_ui-sans-serif] bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] bg-clip-text text-transparent">
            {CONTACT.name}
          </h1>
          <p className="text-[clamp(16px,2.5vw,22px)] text-[#e7e7ea] mb-4">
            {CONTACT.title}
          </p>

          <p className="text-[#b4b4bb] mb-4">
            Undergraduate in Computer Science, Statistics, and Pure
            Mathematics—actively growing as a programmer and graphic designer.
            Experienced in web development, data analysis, and design tools like
            Adobe Illustrator and Canva.
          </p>

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
          src="/mugshot.png"
          alt="Portrait"
          className="rounded-full border-4 border-[#6cf0c2] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#6cf0c2]"
        />
      </div>
    </header>
  );
}
