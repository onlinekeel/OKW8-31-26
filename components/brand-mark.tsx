import Link from "next/link";
import { Sailboat } from "lucide-react";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Online Keel home"
      className={`group inline-flex items-center gap-2.5 ${light ? "text-[#f6f2e8]" : "text-[#0b2530]"}`}
    >
      <span
        className={`grid size-8 place-items-center rounded-full border transition-transform duration-300 group-hover:-rotate-6 ${light ? "border-white/25" : "border-[#0b2530]/20"}`}
      >
        <Sailboat aria-hidden="true" className="size-4" strokeWidth={1.6} />
      </span>
      <span className="font-serif text-[1.22rem] font-semibold tracking-[-0.02em]">
        Online Keel
      </span>
    </Link>
  );
}
