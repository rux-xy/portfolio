export default function Footer() {
  return (
    <footer className="border-t border-[#24242a] text-[#b4b4bb]">
      <div className="w-[min(1100px,92%)] mx-auto py-6 text-sm">
        © {new Date().getFullYear()} Rumeth Wijethunge
      </div>
    </footer>
  );
}
