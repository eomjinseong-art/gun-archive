import type { MetadataRoute } from "next";
import { films } from "@/data/films";
import { guns } from "@/data/guns";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/guns", "/films", "/scenes", "/credits", ...guns.map((g) => `/guns/${g.slug}`), ...films.map((f) => `/films/${f.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
