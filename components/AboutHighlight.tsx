interface AboutHighlightProps {
  title: string;
  description: string;
}

export default function AboutHighlight({
  title,
  description,
}: AboutHighlightProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
      <h2 className="mb-2 text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}