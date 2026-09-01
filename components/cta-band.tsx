import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-[#dce9e4] py-18 sm:py-24">
      <div className="site-shell grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#0b2530] sm:text-6xl">Give your work an online home that feels like yours.</h2>
        </div>
        <div className="lg:justify-self-end">
          <Link href="/contact" className="button-primary">Tell us about your project <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}
