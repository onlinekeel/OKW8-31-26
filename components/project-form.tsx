"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function ProjectForm() {
  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const projectType = String(data.get("projectType") || "");
    const timeline = String(data.get("timeline") || "");
    const details = String(data.get("details") || "");
    const subject = `Website inquiry from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Project type: ${projectType}`, `Ideal timeline: ${timeline}`, "", "Project notes:", details].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={openDraft} className="rounded-[1.5rem] border border-[#0b2530]/12 bg-white p-5 shadow-[0_20px_55px_rgba(11,37,48,0.07)] sm:rounded-[2rem] sm:p-9 sm:shadow-[0_24px_70px_rgba(11,37,48,0.08)]">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">Your name<input className="form-control" name="name" autoComplete="name" required /></label>
        <label className="form-label">Email<input className="form-control" name="email" type="email" autoComplete="email" required /></label>
        <label className="form-label">What are we building?
          <select className="form-control" name="projectType" defaultValue="" required>
            <option value="" disabled>Select one</option><option>Author website</option><option>Speaker or expert website</option><option>Business website</option><option>Refresh of an existing site</option><option>Something else</option>
          </select>
        </label>
        <label className="form-label">Ideal timeline
          <select className="form-control" name="timeline" defaultValue=""><option value="">Flexible</option><option>Within 4–6 weeks</option><option>Within 2–3 months</option><option>I have a launch date</option></select>
        </label>
        <label className="form-label sm:col-span-2">Tell us about the project
          <textarea className="form-control min-h-36 resize-y" name="details" placeholder="What do you do, who is the site for, and what should it help you accomplish?" required />
        </label>
      </div>
      <button type="submit" className="button-primary mt-7 w-full sm:w-auto">Open email draft <ArrowUpRight className="size-4" /></button>
      <p className="mt-4 max-w-lg text-sm leading-6 text-[#6b7b80]">This opens your email app with the details filled in. Nothing is submitted or stored on this page.</p>
    </form>
  );
}
