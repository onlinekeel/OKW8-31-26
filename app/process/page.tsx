import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Process", description: "A clear, collaborative website design process from discovery and direction through build, launch, and ongoing support." };

const phases = [
  { number: "01", title: "Discover", copy: "We clarify who the site is for, what you want it to accomplish, and what material already exists. We create an actionable plan based on your priorities.", deliverable: "Goals, audience, content inventory, project roadmap" },
  { number: "02", title: "Direct", copy: "We map the page structure and establish a visual direction. This is where the site finds its voice, rhythm, and reason for every page.", deliverable: "Sitemap, page plan, creative direction" },
  { number: "03", title: "Build", copy: "The approved direction becomes a responsive working website. We refine copy, interactions, page details, and search foundations as one system.", deliverable: "Working site, mobile layouts, SEO setup" },
  { number: "04", title: "Refine", copy: "You review the real site in context. Two focused rounds of refinements keep feedback useful and the project moving toward a decisive finish.", deliverable: "Revisions, content polish, quality checks" },
  { number: "05", title: "Launch", copy: "We connect the domain, check the important paths, and hand over the finished site with the access and guidance you need to own it.", deliverable: "Launch, account handoff, support plan" },
];

export default function ProcessPage() {
  return (
    <>
      <PageIntro title="A clear course from idea to launch."><p>You will always know what is happening, what we need from you, and what decision comes next.</p></PageIntro>
      <section className="pb-24 sm:pb-32"><div className="site-shell">
        {phases.map((phase) => (
          <article key={phase.number} className="grid gap-5 border-t border-[#0b2530]/13 py-9 lg:grid-cols-[0.28fr_0.7fr_1.1fr_0.8fr] lg:gap-10 lg:py-12">
            <p className="font-serif text-2xl text-[#b08f54]">{phase.number}</p>
            <div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#0b2530]">{phase.title}</h2></div>
            <p className="max-w-2xl text-base leading-7 text-[#566b72]">{phase.copy}</p>
            <div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#79908f]">You can expect</p><p className="mt-3 text-sm leading-6 text-[#3f5860]">{phase.deliverable}</p></div>
          </article>
        ))}
      </div></section>
      <section className="section-space bg-[#eef1ec]"><div className="site-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div><p className="eyebrow">What keeps it moving</p><h2 className="section-title mt-5">A good collaboration has a few simple rules.</h2></div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[["One point of contact", "Clear ownership keeps feedback coherent and decisions timely."], ["Real content early", "The sooner we work with your actual words and images, the better the design becomes."], ["Focused feedback", "Specific reactions tied to the project goals produce stronger refinements."], ["No mystery handoff", "You receive direct account access and a site designed to remain yours."]].map(([title, copy]) => <article key={title} className="rounded-3xl bg-white p-7"><h3 className="font-serif text-2xl text-[#0b2530]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#64767b]">{copy}</p></article>)}
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
