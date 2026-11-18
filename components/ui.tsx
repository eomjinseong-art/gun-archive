import Link from "next/link";
import { filmBySlug } from "@/data/films";
import { gunBySlug } from "@/data/guns";

export function PageTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <header className="mb-8">
      {kicker ? <p className="text-xs tracking-[0.22em] text-blood">{kicker}</p> : null}
      <h1 className="mt-2 font-serif text-3xl text-gold sm:text-4xl">{title}</h1>
      {sub ? <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{sub}</p> : null}
    </header>
  );
}

export function FilmChip({ slug }: { slug: string }) {
  const film = filmBySlug(slug);
  if (!film) return null;
  return (
    <Link href={`/films/${film.slug}`} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted hover:border-gold/60 hover:text-gold">
      {film.titleKo} ({film.year})
    </Link>
  );
}

export function GunChip({ slug }: { slug: string }) {
  const gun = gunBySlug(slug);
  if (!gun) return null;
  return (
    <Link href={`/guns/${gun.slug}`} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted hover:border-gold/60 hover:text-gold">
      {gun.nameKo}
    </Link>
  );
}

export function TypeBadge({ type }: { type: string }) {
  return <span className={`rounded-sm border px-1.5 py-0.5 text-[10px] tracking-wider ${type === "리볼버" ? "border-gold/50 text-gold" : "border-blood/60 text-[#e07a72]"}`}>{type}</span>;
}
