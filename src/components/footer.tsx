export default function Footer() {
  return (
    <footer className="mx-48 flex justify-between rounded-t-lg bg-black py-8 text-white">
      <div className="ml-12">
        <span className="rounded-full border border-teal-600 bg-gradient-to-tl from-teal-950/40 to-teal-600/40 px-2 py-1 text-sm leading-snug font-semibold">
          v1.0
        </span>
        <ul className="mt-2 leading-8">
          <li className="text-2xl font-bold">Ponktoku's UI playground</li>
          <li className="text-gray-400">
            Where I practice and enhance my UI creating skills.
          </li>
        </ul>
      </div>

      <div className="mr-12 text-right">
        <h4 className="text-lg font-bold">Links.</h4>
        <ul className="text-gray-400">
          <li>
            <a
              href="https://www.ponktoku.dev/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy underline-offset-4 transition-all hover:text-white hover:underline-offset-1"
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
              className="underline decoration-wavy underline-offset-4 transition-all hover:text-white hover:underline-offset-1"
            >
              Github
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/ponktokuDotDev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy underline-offset-4 transition-all hover:text-white hover:underline-offset-1"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://links.ponktoku.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy underline-offset-4 transition-all hover:text-white hover:underline-offset-1"
            >
              My other links
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
