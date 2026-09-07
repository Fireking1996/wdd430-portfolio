interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mb-4 leading-relaxed text-slate-600">
        {description}
      </p>

      <p className="text-sm text-slate-700">
        <strong>Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      {link && (
        <p className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}