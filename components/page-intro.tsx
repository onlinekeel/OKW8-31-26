import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.82fr_1.55fr] lg:items-end">
        <p className="eyebrow lg:pb-2">{eyebrow}</p>
        <div>
          <h1 className="display-title max-w-4xl">{title}</h1>
          <div className="mt-7 max-w-2xl text-lg leading-8 text-[#52666d]">{children}</div>
        </div>
      </div>
    </section>
  );
}
