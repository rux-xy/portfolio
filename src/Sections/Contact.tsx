import { CONTACT, SOCIALS } from "../data";
import SocialsChip from "../components/SocialsChip";

export default function Contact() {
  return (
    <section id="contact" className="w-[min(1100px,92%)] mx-auto py-20">
      <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-2">Contact</h2>
      <p className="text-[#b4b4bb] mb-5">
        Reach out for internships, collaborations, or projects. I read every
        message.
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
      </ul>

      <div className="flex gap-3 mb-6">
        <a
          href={`mailto:${CONTACT.email}`}
          className="px-4 py-2 rounded-xl border border-transparent bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] text-[#0a0a0b] font-semibold shadow-[0_10px_30px_rgba(0,0,0,.35)]"
        >
          Email me
        </a>
        <a
          href={CONTACT.cv}
          className="px-4 py-2 rounded-xl border border-[#24242a] shadow-[0_10px_30px_rgba(0,0,0,.35)] bg-gradient-to-b from-[#1a1a1f] to-[#151518]"
        >
          Download CV
        </a>
      </div>

      <div className="flex gap-2 flex-wrap">
        {SOCIALS.map((s) => (
          <SocialsChip key={s.label} social={s} />
        ))}
      </div>
    </section>
  );
}
