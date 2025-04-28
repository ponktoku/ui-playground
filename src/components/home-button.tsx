import { House } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <aside className="absolute bottom-8 right-8">
      <Link href="/">
        <div className="bg-black rounded-full p-4 hover:bg-black/80 hover:cursor-pointer">
          <House color="#ffffff" />
        </div>
      </Link>
    </aside>
  );
}
