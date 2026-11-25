import { NadooAd } from "@/components/NadooAd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CoupangCard } from "@/components/CoupangCard";
import { GunPhoto } from "@/components/GunPhoto";
import { TypeBadge } from "@/components/ui";
import { filmBySlug } from "@/data/films";
import { gunBySlug, guns } from "@/data/guns";
import { scenes } from "@/data/scenes";
import { pageMetadata } from "@/lib/seo";
import { SISTER, sisterUrl } from "@/lib/site";

export function generateStaticParams() {
  return guns.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gun = gunBySlug(slug);
  if (!gun) return {};
  return pageMetadata({ title: `${gun.nameKo} — 영화 속 권총`, description: `${gun.tagline}. ${gun.summary}`, path: `/guns/${gun.slug}` });
}

export default async function GunPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gun = gunBySlug(slug);
  if (!gun) notFound();
  const filmLinks = new Map<string, { site: keyof typeof SISTER; path: string; label: string }>();
  for (const a of gun.appearances) {
    const f = filmBySlug(a.film);
    if (f?.sister) filmLinks.set(f.sister.site + f.sister.path, { ...f.sister, label: f.titleKo });
  }
  for (const s of gun.sister ?? []) filmLinks.set(s.site + s.path, s);
  const related = Array.from(filmLinks.values());
  const sceneList = scenes.filter((s) => s.gun === gun.slug);
  const sameType = guns.filter((g) => g.slug !== gun.slug && g.type === gun.type).slice(0, 8);
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/guns" className="text-xs text-muted hover:text-gold">← 권총 목록</Link>
      <div className="mt-4 flex flex-wrap items-center gap-2"><TypeBadge type={gun.type} /><span className="text-xs tracking-[0.16em] text-blood">{gun.maker}</span></div>
      <h1 className="mt-2 font-serif text-3xl text-gold sm:text-4xl">{gun.nameKo}</h1>
      <p className="mt-1 text-sm text-muted">{gun.nameEn}</p>
      <p className="mt-3 text-paper">{gun.tagline}</p>
      <GunPhoto slug={gun.slug} alt={`${gun.nameEn} (참고 사진)`} variant="hero" />

      <dl className="mt-6 grid grid-cols-2 gap-3 rounded-lg border border-line bg-card p-4 text-sm sm:grid-cols-4">
        <div><dt className="text-[11px] text-muted">종류</dt><dd>{gun.type}</dd></div>
        <div><dt className="text-[11px] text-muted">나라</dt><dd>{gun.country}</dd></div>
        <div><dt className="text-[11px] text-muted">등장</dt><dd>{gun.year}</dd></div>
        <div><dt className="text-[11px] text-muted">구경</dt><dd>{gun.caliber}</dd></div>
      </dl>

      <p className="mt-6 text-lg leading-8">{gun.summary}</p>

      <section className="mt-10">
        <h2 className="font-serif text-xl">역사</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-paper/90">{gun.history.map((h, i) => <li key={i}>{h}</li>)}</ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl">한눈에 보는 특징</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">{gun.features.map((f) => <li key={f} className="rounded-full border border-line px-3 py-1 text-muted">{f}</li>)}</ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">대표 등장 영화</h2>
        <ol className="mt-3 space-y-3">
          {gun.appearances.map((a) => {
            const f = filmBySlug(a.film);
            return (
              <li key={a.film + a.who} className="rounded-lg border border-line bg-card p-4">
                <Link href={`/films/${a.film}`} className="font-semibold text-gold hover:underline">{f?.titleKo} ({f?.year}{f?.kind === "TV" ? " · TV" : ""})</Link>
                <p className="mt-0.5 text-xs text-muted">{a.who}</p>
                <p className="mt-1 text-sm leading-7 text-paper/90">{a.text}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {gun.notes?.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl">알아 두면 좋은 점</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">{gun.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </section>
      ) : null}

      {sceneList.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl">명장면</h2>
          <ul className="mt-3 space-y-2 text-sm">{sceneList.map((s) => <li key={s.slug}><Link href={`/scenes#${s.slug}`} className="text-gold underline">{s.title}</Link></li>)}</ul>
        </section>
      ) : null}

      <CoupangCard />

      <NadooAd inline />
      <section>
        <h2 className="font-serif text-xl">자매 사이트에서 더 보기</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {related.map((s) => (
            <li key={s.site + s.path}>
              <a href={sisterUrl(SISTER[s.site].url, "gun-page", s.path)} className="inline-block rounded-full border border-gold/50 px-3 py-1 text-gold hover:bg-gold/10">{SISTER[s.site].label} · {s.label} →</a>
            </li>
          ))}
          <li><a href={sisterUrl(SISTER.checklist.url, "gun-page")} className="inline-block rounded-full border border-line px-3 py-1 text-muted hover:text-gold">영화 체크리스트에 본 영화 기록하기</a></li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">출처</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted">
          {gun.sources.map((s) => <li key={s.url}><a href={s.url} className="underline" target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        </ul>
      </section>

      <section className="mt-10 border-t border-line pt-6">
        <h2 className="font-serif text-lg">다른 {gun.type}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {sameType.map((o) => <Link key={o.slug} href={`/guns/${o.slug}`} className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:text-gold">{o.nameKo}</Link>)}
        </div>
      </section>
    </article>
  );
}
