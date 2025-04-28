import { projects } from "@/data/projects";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex flex-grow justify-center px-4 sm:px-8">
        <div className="w-full max-w-7xl px-16">
          <section className="my-12">
            <h1 className="mb-4 text-4xl font-bold text-teal-400">
              Ponktoku's UI Playground
            </h1>
            <h2 className="text-lg font-semibold text-white/90 italic">
              A space for experimenting and practising with UIs
            </h2>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

      <Footer />
    </div>
  );
}
