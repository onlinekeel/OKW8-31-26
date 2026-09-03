import Link from "next/link";
import { ArrowRight, BookOpen, Check, Compass, LayoutTemplate, Search, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/cta-band";

const services = [
  { icon: BookOpen, title: "Author platforms", copy: "A polished home for your books, story, events, press, and the readers who want to stay connected.", href: "/services#authors" },
  { icon: Compass, title: "Expert brands", copy: "A focused site that turns expertise into a clear message—and gives speaking, consulting, or media inquiries a place to land.", href: "/services#experts" },
  { icon: LayoutTemplate, title: "Growing businesses", copy: "A distinctive, easy-to-navigate website that makes your value obvious and gives good prospects a reason to reach out.", href: "/services#businesses" },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#f7f4ec] py-18 sm:py-24 lg:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div>
            <p className="eyebrow">Independent web studio · Orlando, Florida</p>
            <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.5rem,8vw,7.4rem)] leading-[0.89] tracking-[-0.055em] text-[#0b2530]">Websites with a steady point of view.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52666d] sm:text-xl">Online Keel creates clean, custom websites for authors, experts, and growing businesses—so the quality of your online presence finally matches the quality of your work.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">Start a project <ArrowRight className="size-4" /></Link>
              <Link href="/services" className="button-secondary">Explore services</Link>
            </div>
          </div>
          <div className="relative lg:pl-10">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-[#0b2530] p-7 text-[#f7f4ec] shadow-[0_30px_100px_rgba(11,37,48,0.18)] sm:p-10">
              <div className="absolute right-[-5rem] top-[-5rem] size-52 rounded-full border border-[#99c2b9]/25" />
              <div className="absolute right-[-1.5rem] top-[-1.5rem] size-28 rounded-full border border-[#99c2b9]/30" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9cec5]">A strong site should</p>
              <div className="mt-10 grid gap-7">
                {[["01", "Sound like you", "A clear voice that is authentically you"], ["02", "Guide people", "Simple paths for your customers to see your work."], ["03", "Earn confidence", "Thoughtful details that make the work feel established."]].map(([number, title, copy]) => (
                  <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/14 pt-5">
                    <span className="font-serif text-lg text-[#c7a86f]">{number}</span>
                    <div><p className="font-serif text-2xl">{title}</p><p className="mt-1 text-sm leading-6 text-white/57">{copy}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.17em] text-white/45"><span className="h-px flex-1 bg-[#9fc8bf]/35" />Built with direction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b2530]/10 bg-white py-6">
        <div className="site-shell flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64767b] sm:justify-between">
          <span>Authors</span><span className="text-[#b99a62]">✦</span><span>Speakers</span><span className="text-[#b99a62]">✦</span><span>Consultants</span><span className="text-[#b99a62]">✦</span><span>Local brands</span><span className="text-[#b99a62]">✦</span><span>Independent experts</span>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow">What we build</p>
            <div><h2 className="section-title max-w-4xl">A useful website first. A beautiful one at the same time.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#617278]">Every project starts with what the site needs to do, then we shape the words, structure, and visual system around that goal.</p></div>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card group">
                  <span className="grid size-11 place-items-center rounded-full bg-[#dce9e4] text-[#0b2530]"><Icon className="size-5" strokeWidth={1.6} /></span>
                  <h3 className="mt-8 font-serif text-3xl tracking-[-0.025em] text-[#0b2530]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#64767b]">{service.copy}</p>
                  <Link href={service.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0b2530]">See what’s included <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#eef1ec]">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Online Keel</p><h2 className="section-title mt-5">Calm process. Clear choices. No digital drift.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#617278]">You do not need to become a web expert. We keep the process focused, explain the tradeoffs, and hand you a site you can confidently own.</p>
            <Link href="/process" className="button-secondary mt-8">See the process <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Search, title: "Strategy before screens", copy: "We clarify audience, message, and priorities before design starts." },
              { icon: Sparkles, title: "Custom, never generic", copy: "The site is shaped around your work—not stretched over a stock template." },
              { icon: Check, title: "Commercial-use safe", copy: "Fonts and design assets are selected with commercial licensing in mind." },
              { icon: Compass, title: "Ownership stays with you", copy: "Your domain, hosting, accounts, and finished website remain in your control." },
            ].map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="rounded-3xl border border-[#0b2530]/10 bg-white p-6 sm:p-7"><Icon className="size-5 text-[#5f9188]" strokeWidth={1.7} /><h3 className="mt-5 font-serif text-2xl text-[#0b2530]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#64767b]">{item.copy}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="flex flex-col gap-6 border-b border-[#0b2530]/12 pb-9 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow">From first call to launch</p><h2 className="section-title mt-5">A four-part path to a better site.</h2></div>
            <Link href="/process" className="text-link">Full process <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid lg:grid-cols-4">
            {[["01", "Discover", "Goals, audience, content, and what success should look like."], ["02", "Direct", "A clear structure and visual direction before the full build."], ["03", "Build", "Responsive pages, refined copy, and practical SEO foundations."], ["04", "Launch", "Final checks, handoff, and a clean path for future updates."]].map(([number, title, copy]) => (
              <article key={number} className="border-b border-[#0b2530]/12 py-8 lg:border-b-0 lg:border-r lg:px-7 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"><p className="font-serif text-xl text-[#b08f54]">{number}</p><h3 className="mt-5 font-serif text-3xl text-[#0b2530]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#64767b]">{copy}</p></article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
