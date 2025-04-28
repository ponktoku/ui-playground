import { TProject } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  slug,
  title,
  image,
  tags,
  createdAt,
}: TProject) {
  return (
    <div className="">
      <div>
        <Link href={slug}>
          <Image
            src={image}
            height={1000}
            width={1000}
            alt="UI Playground Image Card"
            className="mb-4 overflow-hidden rounded-2xl object-cover shadow transition hover:shadow-lg"
          ></Image>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </Link>
        <h3 className="mb-2 text-sm text-white/70">{createdAt}</h3>

        <div className="flex gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="hidden rounded-full border border-teal-600 bg-gradient-to-tl from-teal-950/40 to-teal-600/40 px-2 py-1 text-sm leading-snug font-semibold text-white capitalize hover:cursor-pointer hover:opacity-80 sm:block"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
