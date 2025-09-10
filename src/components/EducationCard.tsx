interface Education {
  school: string;
  program: string;
  time: string;
}

function EducationCard({ education }: { education: Education }) {
  return (
    <article
      key={education.school}
      className="rounded-2xl border border-[#24242a] bg-[#151518] p-4"
    >
      <h3 className="font-semibold">{education.school}</h3>
      <p className="text-sm text-[#b4b4bb]">{education.program}</p>
      <p className="text-xs text-[#b4b4bb] mt-1">{education.time}</p>
    </article>
  );
}

export default EducationCard;
