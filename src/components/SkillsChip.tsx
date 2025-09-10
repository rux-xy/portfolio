function Chip({ label }: { label: string }) {
  return (
    <span className="text-xs text-[#b4b4bb] border border-[#24242a] rounded-full px-2 py-1">
      {label}
    </span>
  );
}

export default Chip;
