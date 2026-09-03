import type { ReactNode } from "react";

export function PageIntro({ title, children, relaxedTitle = false }: { title: string; children: ReactNode; relaxedTitle?: boolean }) {
  return (
    <section className="page-intro">
      <div className="site-shell text-center">
        <h1 className="display-title mx-auto max-w-5xl text-balance" style={relaxedTitle ? { lineHeight: 1.08 } : undefined}>{title}</h1>
        <div className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#52666d]">{children}</div>
      </div>
    </section>
  );
}
