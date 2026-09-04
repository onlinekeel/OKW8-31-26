import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ProjectForm } from "@/components/project-form";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Start a project", description: "Tell Online Keel about your author, expert, or business website project." };

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Tell us what you are building toward."><p>A few thoughtful details are enough to start. We will review the fit, suggest a sensible next step, and keep the first conversation straightforward.</p></PageIntro>
      <section className="pb-20 sm:pb-32"><div className="site-shell grid gap-8 sm:gap-10 lg:grid-cols-[0.66fr_1.34fr] lg:items-start">
        <aside className="lg:sticky lg:top-28"><p className="eyebrow">What happens next</p>
          <ol className="mt-7 grid gap-6">{[["01", "We review your note"], ["02", "We schedule a short fit call"], ["03", "You receive a clear scope and proposal"]].map(([number, label]) => <li key={number} className="flex items-center gap-4 border-t border-[#0b2530]/12 pt-4"><span className="font-serif text-lg text-[#b08f54]">{number}</span><span className="text-sm font-medium text-[#29434b]">{label}</span></li>)}</ol>
          <div className="mt-9 rounded-3xl bg-[#dce9e4] p-6 sm:mt-10"><Mail className="size-5 text-[#4e7c73]" /><p className="mt-5 text-base leading-7 text-[#4c646a]">Prefer a plain email?</p><a href={`mailto:${site.email}`} className="mt-1 inline-block max-w-full break-all font-serif text-lg text-[#0b2530] underline decoration-[#0b2530]/25 underline-offset-4 sm:text-xl">{site.email}</a></div>
        </aside>
        <ProjectForm />
      </div></section>
    </>
  );
}
