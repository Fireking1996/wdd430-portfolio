import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "CSE 340 Backend Application",
    description:
      "A backend-driven web application developed for CSE 340, featuring server-side routing, database integration, controllers, models, utilities, and views.",
    technologies: ["Node.js", "Express", "JavaScript", "PostgreSQL", "EJS"],
    link: "https://github.com/Fireking1996/cse340-hw",
  },
  {
    title: "Story Vault API",
    description:
      "A REST API project for managing story data, featuring database integration, routes, middleware, server configuration, and API documentation with Swagger.",
    technologies: ["Node.js", "Express", "JavaScript", "MongoDB", "Swagger"],
    link: "https://github.com/Fireking1996/story-vault-api",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="py-10 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          My Portfolio
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Welcome to my portfolio. Here are some of the web development
          projects I have built while developing my skills in backend and
          full-stack development.
        </p>
      </section>

      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-6 text-2xl font-bold"
        >
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}