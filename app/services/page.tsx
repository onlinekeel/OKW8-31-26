import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Services", description: "Custom websites for authors, experts, speakers, and growing businesses, with clear pricing and practical post-launch support." };

const offers = [
  { id: "authors", number: "01", label: "For authors", title: "Author Platform", price: "From $1,995", copy: "A confident home for your books and your wider body of work—designed to serve both loyal readers and people discovering you for the first time.", items: ["Up to five core pages", "Book pages and purchase links", "Author bio, press, and events", "Reader contact or newsletter pathway", "Mobile design and basic SEO", "Two rounds of refinements"] },
  { id: "experts", number: "02", label: "For speakers & experts", title: "Expert Platform", price: "From $2,750", copy: "A strategic site that turns your expertise into a clear story and makes it easy to understand, trust, and hire you.", items: ["Messaging and page strategy", "Speaking, consulting, or media pages", "Lead-focused contact pathways", "Proof, credentials, and featured work", "Mobile design and basic SEO", "Two rounds of refinements"] },
  { id: "businesses", number: "03", label: "For growing businesses", title: "Business Website", price: "From $3,500", copy: "A custom marketing site for a business that has outgrown its starter presence and needs its website to earn more confidence.", items: ["Custom site architecture", "Service and conversion pages", "Focused calls to action", "Contact and inquiry pathways", "Mobile design and basic SEO", "Launch support and handoff"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="A website built around the work you want more of."><p>We bring strategy, writing support, design, and development into one focused process—so the finished site is cohesive from the first headline to the final click.</p></PageIntro>
      <section className="pb-24 sm:pb-32"><div className="site-shell grid gap-5">
        {offers.map((offer) => (
          <article id={offer.id} key={offer.id} className="scroll-mt-28 rounded-[2rem] border border-[#0b2530]/12 bg-white p-7 sm:p-10 lg:p-12">
            <div className="grid gap-9 lg:grid-cols-[0.62fr_1.05fr_0.9fr]">
              <div><p className="font-serif text-xl text-[#b08f54]">{offer.number}</p><p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d7d81]">{offer.label}</p></div>
              <div><h2 className="font-serif text-4xl tracking-[-0.035em] text-[#0b2530] sm:text-5xl">{offer.title}</h2><p className="mt-4 font-medium text-[#5d8981]">{offer.price}</p><p className="mt-6 max-w-xl text-base leading-7 text-[#617278]">{offer.copy}</p><Link href="/contact" className="text-link mt-7">Talk about this package <ArrowRight className="size-4" /></Link></div>
              <ul className="grid content-start gap-3 border-t border-[#0b2530]/10 pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">{offer.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#405860]"><Check className="mt-0.5 size-4 shrink-0 text-[#6b9a91]" /> {item}</li>)}</ul>
            </div>
          </article>
        ))}
      </div></section>

      <section className="section-space bg-[#0b2530] text-[#f7f4ec]"><div className="site-shell grid gap-12 lg:grid-cols-2">
        <div><p className="eyebrow text-[#a9cec5]">Included in every build</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">The unglamorous details are handled, too.</h2></div>
        <div className="grid gap-7 sm:grid-cols-2">{[["Responsive by default", "Every page is tuned for phones, tablets, and larger screens."], ["SEO foundations", "Page titles, descriptions, heading structure, sitemap, and search-friendly markup."], ["License-conscious assets", "We use commercial-safe fonts and keep third-party asset choices intentional."], ["Clean ownership", "Your domain and essential accounts stay in your name, with direct access."]].map(([title, copy]) => <div key={title} className="border-t border-white/17 pt-5"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/58">{copy}</p></div>)}</div>
      </div></section>

      <section className="section-space bg-white"><div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="eyebrow">After launch</p><h2 className="section-title mt-5">Support when you need it. No empty retainer.</h2></div>
        <div className="rounded-[2rem] bg-[#eef1ec] p-7 sm:p-10"><p className="font-serif text-4xl text-[#0b2530]">$95 <span className="font-sans text-base text-[#64767b]">/ hour</span></p><p className="mt-5 max-w-2xl text-base leading-7 text-[#5d7076]">Post-launch content changes and small improvements are billed only when you use them, with a 30-minute minimum. Larger additions are quoted before work begins.</p><p className="mt-5 text-sm leading-6 text-[#5d7076]">Hosting and domain costs are paid directly by you, so your site never depends on a proprietary maintenance plan to stay online.</p></div>
      </div></section>
      <CtaBand />
    </>
  );
}
