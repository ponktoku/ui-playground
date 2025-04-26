import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-500 text-lg">
        Hello world! This is a project in Zed. Welcome to the UI playground!
      </div>
      <h1>Navigate to your desired UI playground</h1>

      <Link href="/snack-landing">Snack Landing Page</Link>
    </main>
  );
}
