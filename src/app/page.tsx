import { projects } from "@/data/projects";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-grow flex justify-center px-4 sm:px-8">
        <div className="max-w-7xl w-full px-16">
          <section className="my-12">
            <h1 className="text-4xl font-bold mb-4 text-teal-400">
              Ponktoku's UI Playground
            </h1>
            <h2 className="text-lg font-semibold italic text-white/90">
              A space for experimenting and practising with UIs
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

      <footer className="text-white py-8 bg-black rounded-t-lg mx-48 flex justify-between">
        <div className="ml-12">
          <span className="px-2 py-1 rounded-full text-sm font-semibold leading-snug bg-gradient-to-tl from-teal-950/40 to-teal-600/40 border border-teal-600">
            v1.0
          </span>
          <ul className="mt-2 leading-8">
            <li className="font-bold text-2xl">Ponktoku's UI playground</li>
            <li>Where I practice and enhance my UI creating skills.</li>
          </ul>
        </div>

        <div className="mr-12 text-right">
          <h4 className="font-bold text-lg">Links.</h4>
          <ul className="">
            <li>
              <a
                href="https://www.ponktoku.dev/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all"
              >
                ponktoku.dev
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.ponktoku.dev/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all"
              >
                Github
              </a>{" "}
              /{" "}
              <a
                href="https://x.com/ponktokuDotDev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://links.ponktoku.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all"
              >
                My other links
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
