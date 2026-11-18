import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { GunPhoto } from "@/components/GunPhoto";
import { TypeBadge } from "@/components/ui";
import { films } from "@/data/films";
import { guns } from "@/data/guns";
import { scenes } from "@/data/scenes";
import { pageMetadata } from "@/lib/seo";
import { SAFETY_NOTE, SISTER, SITE_NAME, SITE_SUB, SITE_TAGLINE, sisterUrl } from "@/lib/site";

export const metadata = pageMetadata({ title: SITE_NAME, description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

export default function Home() {
  const heroes = guns.filter((g) => g.hero);
  const autos = guns.filter((g) => g.type === "자동권총").length;
  const revolvers = guns.length - autos;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-2xl border border-line bg-[radial-gradient(ellipse_at_top,#2a0f0f,transparent_60%)] px-6 py-12 sm:px-10">
        <p className="text-xs tracking-[0.3em] text-blood">MOVIE GUN ARCHIVE</p>
        <h1 className="mt-3 font-serif text-4xl text-gold sm:text-5xl">{SITE_NAME}</h1>
        <p className="mt-4 text-lg text-paper">{SITE_TAGLINE}</p>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <Link href="/guns" className="rounded-full bg-gold px-4 py-2 font-semibold text-bg hover:bg-gold/90">권총 {guns.length}종</Link>
          <Link href="/films" className="rounded-full border border-gold/60 px-4 py-2 text-gold hover:bg-gold/10">영화 {films.length}편</Link>
          <Link href="/scenes" className="rounded-full border border-line px-4 py-2 text-paper hover:border-gold/60">명장면 {scenes.length}개</Link>
        </div>
        <p className="mt-5 text-xs text-muted">자동권총 {autos}종 · 리볼버 {revolvers}종 · {SAFETY_NOTE}</p>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">대표 권총</h2>
          <Link href="/guns" className="text-sm text-muted hover:text-gold">전체 {guns.length}종 →</Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {heroes.map((g) => (
            <Link key={g.slug} href={`/guns/${g.slug}`} className="block rounded-lg border border-line bg-card p-4 transition hover:border-gold/70">
              <GunPhoto slug={g.slug} alt={`${g.nameEn} (참고 사진)`} />
              <div className="mt-3 flex items-center gap-2"><TypeBadge type={g.type} /><span className="text-[11px] text-muted">{g.country} · {g.year}</span></div>
              <h3 className="mt-1 font-semibold text-paper">{g.nameKo}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{g.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <CoupangCard />

      <section className="mt-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">명장면</h2>
          <Link href="/scenes" className="text-sm text-muted hover:text-gold">전체 보기 →</Link>
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {scenes.slice(0, 4).map((s) => (
            <li key={s.slug}>
              <Link href={`/scenes#${s.slug}`} className="block h-full rounded-lg border border-line bg-card p-4 hover:border-gold/70">
                <p className="font-semibold text-gold">{s.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{s.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-gold/40 bg-card p-6">
        <p className="text-xs tracking-[0.2em] text-blood">ARCHIVE NETWORK</p>
        <h2 className="mt-2 font-serif text-2xl text-gold">영화 아카이브에서 이어 보기</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">존 윅·007·미션 임파서블 시리즈의 작품과 차량 이야기는 자매 사이트에, 본 영화 기록은 영화 체크리스트에 남겨 보세요.</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm">
          {Object.values(SISTER).map((s) => (
            <li key={s.url}><a href={sisterUrl(s.url, "home")} className="rounded-full border border-line px-3 py-1 text-muted hover:border-gold/60 hover:text-gold">{s.label}</a></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
