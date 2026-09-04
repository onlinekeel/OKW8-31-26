import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/process", "/about", "/contact"];
  return paths.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8 }));
}
