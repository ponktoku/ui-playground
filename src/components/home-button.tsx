import { House } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <aside className="absolute right-8 bottom-8">
      <Link href="/">
        <div className="rounded-full bg-black p-4 hover:cursor-pointer hover:bg-black/80">
          <House color="#ffffff" />
        </div>
      </Link>
    </aside>
  );
}
