interface Social {
  label: string;
  href: string;
}

function SocialsChip({ social }: { social: Social }) {
  return (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="text-xs text-[#b4b4bb] border border-[#24242a] rounded-full px-2 py-1 hover:opacity-80"
    >
      {social.label}
    </a>
  );
}
export default SocialsChip;
