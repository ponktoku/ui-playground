export default function Footer() {
  return (
    <footer className="text-white py-8 bg-black rounded-t-lg mx-48 flex justify-between">
      <div className="ml-12">
        <span className="px-2 py-1 rounded-full text-sm font-semibold leading-snug bg-gradient-to-tl from-teal-950/40 to-teal-600/40 border border-teal-600">
          v1.0
        </span>
        <ul className="mt-2 leading-8">
          <li className="font-bold text-2xl">Ponktoku's UI playground</li>
          <li className="text-gray-400">
            Where I practice and enhance my UI creating skills.
          </li>
        </ul>
      </div>

      <div className="mr-12 text-right">
        <h4 className="font-bold text-lg">Links.</h4>
        <ul className="text-gray-400">
          <li>
            <a
              href="https://www.ponktoku.dev/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all hover:text-white"
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
              className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all hover:text-white"
            >
              Github
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/ponktokuDotDev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all hover:text-white"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://links.ponktoku.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy underline-offset-4 hover:underline-offset-1 transition-all hover:text-white"
            >
              My other links
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
