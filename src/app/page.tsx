import { projects } from "@/data/projects";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <main className="min-h-dvh flex justify-center px-4 sm:px-8 ">
        <div className="max-w-7xl w-full px-16">
          <section className="my-8">
            <h1 className="text-4xl font-bold mb-4 text-teal-400">
              Ponktoku's UI Playground
            </h1>
            <h2 className="text-lg font-semibold italic text-white/90 mb-12">
              Featuring challenges from WebDevDaily, and more
            </h2>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.slug}
                title={project.title}
                slug={project.slug}
                image={project.image}
                tags={project.tags}
                createdAt={project.createdAt}
              />
            ))}
          </section>
        </div>
      </main>

      <footer className="text-white max-w-7xl w-full flex justify-center border border-white items-center">
        <div>
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
}
