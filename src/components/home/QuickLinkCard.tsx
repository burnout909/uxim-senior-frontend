interface QuickLinkCardProps {
  label: string;
}

export default function QuickLinkCard({ label }: QuickLinkCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl">★</div>
      <div className="mt-2 text-lg">{label}</div>
    </div>
  );
}
