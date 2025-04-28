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
            className=" rounded-2xl object-cover overflow-hidden shadow hover:shadow-lg transition mb-4"
          ></Image>
          <h2 className="font-semibold text-lg text-white">{title}</h2>
        </Link>
        <h3 className="text-sm text-white/70 mb-2">{createdAt}</h3>

        <div className="flex gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="capitalize hidden hover:opacity-80 hover:cursor-pointer text-white sm:block px-2 py-1 rounded-full text-sm font-semibold leading-snug bg-gradient-to-tl from-teal-950/40 to-teal-600/40 border border-teal-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
