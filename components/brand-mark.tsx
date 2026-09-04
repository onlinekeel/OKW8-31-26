import Link from "next/link";
import { Sailboat } from "lucide-react";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Online Keel home"
      className={`group inline-flex min-w-0 items-center gap-2.5 ${light ? "text-[#f6f2e8]" : "text-[#0b2530]"}`}
    >
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:-rotate-6 sm:size-10 ${light ? "border-white/25" : "border-[#0b2530]/20"}`}
      >
        <Sailboat aria-hidden="true" className="size-[1.125rem] sm:size-5" strokeWidth={1.6} />
      </span>
      <span className="truncate font-serif text-[1.12rem] font-semibold tracking-[-0.02em] sm:text-[1.22rem]">
        Online Keel
      </span>
    </Link>
  );
}
