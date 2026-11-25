import { NadooAd } from "@/components/NadooAd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CoupangCard } from "@/components/CoupangCard";
import { GunPhoto } from "@/components/GunPhoto";
import { TypeBadge } from "@/components/ui";
import { filmBySlug, films } from "@/data/films";
import { gunsForFilm } from "@/data/guns";
import { scenes } from "@/data/scenes";
import { pageMetadata } from "@/lib/seo";
import { SISTER, sisterUrl } from "@/lib/site";

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = filmBySlug(slug);
  if (!film) return {};
  const names = gunsForFilm(film.slug).map((g) => g.nameKo).join(", ");
  return pageMetadata({ title: `${film.titleKo}(${film.year}) 속 권총`, description: `${film.titleKo}(${film.titleEn}, ${film.year})에 나온 권총: ${names}.`, path: `/films/${film.slug}` });
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = filmBySlug(slug);
  if (!film) notFound();
  const list = gunsForFilm(film.slug);
  const sceneList = scenes.filter((s) => s.film === film.slug);
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/films" className="text-xs text-muted hover:text-gold">← 영화별 보기</Link>
      <p className="mt-4 text-xs tracking-[0.22em] text-blood">{film.year}{film.kind === "TV" ? " · TV 시리즈" : ""}</p>
      <h1 className="mt-2 font-serif text-3xl text-gold sm:text-4xl">{film.titleKo}</h1>
      <p className="mt-1 text-sm text-muted">{film.titleEn}</p>

      <section className="mt-8">
        <h2 className="font-serif text-xl">등장 권총 {list.length}종</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {list.map((g) => {
            const apps = g.appearances.filter((a) => a.film === film.slug);
            return (
              <li key={g.slug}>
                <Link href={`/guns/${g.slug}`} className="block h-full rounded-lg border border-line bg-card p-4 hover:border-gold/70">
                  <GunPhoto slug={g.slug} alt={`${g.nameEn} (참고 사진)`} />
                  <div className="mt-3 flex items-center gap-2"><TypeBadge type={g.type} /><span className="font-semibold">{g.nameKo}</span></div>
                  {apps.map((a) => (
                    <div key={a.who} className="mt-2">
                      <p className="text-xs text-gold">{a.who}</p>
                      <p className="mt-0.5 text-sm leading-6 text-muted">{a.text}</p>
                    </div>
                  ))}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {sceneList.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl">명장면</h2>
          <ul className="mt-3 space-y-2 text-sm">{sceneList.map((s) => <li key={s.slug}><Link href={`/scenes#${s.slug}`} className="text-gold underline">{s.title}</Link></li>)}</ul>
        </section>
      ) : null}

      <CoupangCard />

      <NadooAd inline />
      <section>
        <h2 className="font-serif text-xl">이어 보기</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {film.sister ? (
            <li><a href={sisterUrl(SISTER[film.sister.site].url, "film-page", film.sister.path)} className="inline-block rounded-full border border-gold/50 px-3 py-1 text-gold hover:bg-gold/10">{SISTER[film.sister.site].label}에서 {film.titleKo} 보기 →</a></li>
          ) : null}
          <li><a href={sisterUrl(SISTER.checklist.url, "film-page")} className="inline-block rounded-full border border-line px-3 py-1 text-muted hover:text-gold">영화 체크리스트에 기록하기</a></li>
        </ul>
      </section>
    </article>
  );
}
