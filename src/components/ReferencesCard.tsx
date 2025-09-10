interface References {
  name: string;
  title: string;
  phone: string;
  email?: string;
}

function ReferencesCard({ reference }: { reference: References }) {
  return (
    <article
      key={reference.name}
      className="rounded-2xl border border-[#24242a] bg-[#151518] p-4"
    >
      <h3 className="font-semibold">{reference.name}</h3>
      <p className="text-sm text-[#b4b4bb]">{reference.title}</p>
      <p className="text-xs text-[#b4b4bb] mt-1">
        {reference.phone}
        {reference.email ? ` • ${reference.email}` : ""}
      </p>
    </article>
  );
}

export default ReferencesCard;
