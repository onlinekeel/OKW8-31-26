import type { Metadata } from "next";
import { Anchor, Compass, Eye, Waves } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "About", description: "Online Keel is an independent web studio creating thoughtful, commercially sound websites with clear ownership and lasting value." };

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Good design gives good work the pedestal it deserves." relaxedTitle><p>Online Keel is an independent web studio for people who care deeply about what they do—and want an online presence built with the same level of intention.</p></PageIntro>
      <section className="pb-24 sm:pb-32"><div className="site-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[#0b2530] p-8 text-[#f7f4ec] sm:p-12 lg:p-14">
          <p className="eyebrow text-[#a9cec5]">The name</p><h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">A keel is mostly unseen. Its effect is not.</h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/64">It gives a sailboat stability and helps turn wind into forward motion. That is the kind of role a strong website should play for a business or body of work: a steady foundation that helps everything else move with more direction.</p>
          <div className="mt-12 flex items-center gap-4 text-[#c7a86f]"><Waves className="size-6" strokeWidth={1.4} /><span className="h-px w-24 bg-[#c7a86f]/45" /><Anchor className="size-5" strokeWidth={1.4} /></div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[2rem] bg-[#dce9e4] p-8 sm:p-10"><Compass className="size-6 text-[#4d7b73]" strokeWidth={1.5} /><h3 className="mt-8 font-serif text-3xl text-[#0b2530]">Direction over decoration</h3><p className="mt-4 text-base leading-7 text-[#51676e]">A beautiful surface matters. It matters more when every design choice supports the message, the audience, and the next action.</p></div>
          <div className="rounded-[2rem] bg-[#e9dfce] p-8 sm:p-10"><Eye className="size-6 text-[#927451]" strokeWidth={1.5} /><h3 className="mt-8 font-serif text-3xl text-[#0b2530]">Clarity without sameness</h3><p className="mt-4 text-base leading-7 text-[#5b6768]">A site can be easy to use without feeling generic. Restraint leaves more room for the parts that make your work recognizably yours.</p></div>
        </div>
      </div></section>
      <section className="section-space bg-white"><div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div><p className="eyebrow">Our working principles</p><h2 className="section-title mt-5">Built to be useful beyond launch day.</h2></div>
        <div className="grid gap-0">
          {[["01", "Be direct", "Plain language, honest recommendations, and no unnecessary complexity."], ["02", "Respect ownership", "Clients keep control of the domain, hosting, accounts, and finished work."], ["03", "Design responsibly", "Commercial-safe type and asset choices, responsive pages, and accessible foundations."], ["04", "Make it last", "A flexible system that can grow without requiring a rebuild for every new chapter."]].map(([number, title, copy]) => <article key={number} className="grid gap-3 border-t border-[#0b2530]/12 py-7 sm:grid-cols-[3rem_0.65fr_1.35fr] sm:gap-7"><span className="font-serif text-lg text-[#b08f54]">{number}</span><h3 className="font-serif text-2xl text-[#0b2530]">{title}</h3><p className="text-sm leading-6 text-[#64767b]">{copy}</p></article>)}
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
