import AboutHighlight from "@/components/AboutHighlight";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          About Me
        </h1>

        <p className="mb-4 leading-relaxed text-slate-600">
          I am a web development student building my skills in backend
          development, APIs, databases, and full-stack web applications.
        </p>

        <p className="mb-8 leading-relaxed text-slate-600">
          This portfolio showcases some of the projects I have created
          throughout my coursework and development experience.
        </p>

        <AboutHighlight
          title="My Development Focus"
          description="I enjoy building practical web applications and learning how different parts of a full-stack application work together."
        />
      </section>
    </main>
  );
}