"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#0b2530]/10 bg-[#f7f4ec]/90 backdrop-blur-xl">
      <div className="site-shell flex h-[76px] items-center justify-between">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#29404a] transition-colors hover:bg-white/70 hover:text-[#0b2530] aria-[current=page]:bg-white aria-[current=page]:text-[#0b2530]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button-primary ml-3">Start a project</Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="grid size-11 place-items-center rounded-full border border-[#0b2530]/15 text-[#0b2530] md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="site-shell grid gap-1 border-t border-[#0b2530]/10 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-[#173640] hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="button-primary mt-2 w-full">
            Start a project
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
