import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Work", description: "Explore the kinds of author, expert, and small-business website challenges Online Keel is built to solve." };

const directions = [
  { number: "01", label: "Author platform direction", title: "From a stack of book links to a world readers can enter.", copy: "For an author, the website should connect every title to a larger story: who wrote it, why it matters, and where a reader should go next.", result: "Clear book discovery · stronger author identity · reader connection", tone: "bg-[#cdded8]" },
  { number: "02", label: "Expert brand direction", title: "From impressive experience to an offer people understand.", copy: "For a speaker or consultant, the site turns credentials into a useful narrative and gives organizers, clients, and media a direct next step.", result: "Sharper positioning · useful proof · focused inquiries", tone: "bg-[#e7dcc8]" },
  { number: "03", label: "Local business direction", title: "From service list to a reason to choose you.", copy: "For a growing business, the site makes the difference tangible—then removes friction between a good prospect and a real conversation.", result: "More confidence · easier navigation · better-fit leads", tone: "bg-[#d8e3e7]" },
];

export default function WorkPage() {
  return (
    <>
      <PageIntro title="Distinct problems deserve distinct websites."><p>Online Keel is a new studio built on a simple belief: good design begins with the real job the website needs to do. These are the kinds of directions we shape with clients.</p></PageIntro>
      <section className="pb-24 sm:pb-32"><div className="site-shell grid gap-7">
        {directions.map((item, index) => (
          <article key={item.number} className={`overflow-hidden rounded-[2rem] ${item.tone}`}>
            <div className="grid min-h-[31rem] lg:grid-cols-[0.85fr_1.15fr]">
              <div className={`relative flex min-h-72 items-end overflow-hidden p-7 sm:p-10 ${index === 0 ? "bg-[#173742]" : index === 1 ? "bg-[#927451]" : "bg-[#476d77]"}`}>
                <span className="absolute -right-16 -top-16 size-64 rounded-full border border-white/20" /><span className="absolute right-12 top-12 size-28 rounded-full border border-white/24" />
                <div className="relative z-10"><p className="font-serif text-8xl leading-none text-white/18 sm:text-9xl">{item.number}</p><p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">{item.label}</p></div>
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14"><div><h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#0b2530] sm:text-5xl">{item.title}</h2><p className="mt-7 max-w-xl text-base leading-7 text-[#4f646b]">{item.copy}</p></div><div className="mt-12 border-t border-[#0b2530]/14 pt-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#52696f]">Designed to create</p><p className="mt-3 font-serif text-xl text-[#0b2530]">{item.result}</p></div></div>
            </div>
          </article>
        ))}
      </div></section>
      <section className="section-space bg-white"><div className="site-shell grid gap-8 border-y border-[#0b2530]/12 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div><p className="eyebrow">A note on the portfolio</p><h2 className="mt-4 max-w-3xl font-serif text-3xl tracking-[-0.025em] text-[#0b2530] sm:text-4xl">We would rather show honest thinking than invent a wall of client logos.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#64767b]">As the studio’s launched work grows, detailed case studies will live here. Until then, ask us for the most relevant working examples for your project.</p></div>
        <Link href="/contact" className="button-secondary">Ask for examples <ArrowRight className="size-4" /></Link>
      </div></section>
      <CtaBand />
    </>
  );
}
