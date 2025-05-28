import { Link } from "react-router-dom";

interface QuickLinkCardProps {
  label: string;
  to: string;
}

export default function QuickLinkCard({ label, to }: QuickLinkCardProps) {
  return (
    <Link to={to} className="flex flex-col items-center hover:opacity-80">
      <div className="text-4xl">★</div>
      <div className="mt-2 text-lg">{label}</div>
    </Link>
  );
}
