import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#0b2530] text-[#f6f2e8]">
      <div className="site-shell py-14 sm:py-18">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <BrandMark light />
            <p className="mt-5 max-w-md text-base leading-7 text-white/67">Thoughtful websites for people building a body of work, a business, or both.</p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => <Link key={item.href} href={item.href} className="footer-link">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="footer-label">Start a conversation</p>
            <a href={`mailto:${site.email}`} className="footer-link mt-4 inline-flex items-center gap-2">{site.email} <ArrowUpRight className="size-4" /></a>
            <p className="mt-4 text-sm leading-6 text-white/55">Serving Orlando and working with clients wherever their work takes them.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Online Keel. All rights reserved.</p>
          <p>Steady thinking. Distinctive work.</p>
        </div>
      </div>
    </footer>
  );
}
