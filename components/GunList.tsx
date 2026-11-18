"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Gun } from "@/data/guns";
import { gunImage } from "@/lib/gun-images";

type Item = Pick<Gun, "slug" | "nameKo" | "nameEn" | "type" | "country" | "year" | "tagline"> & { films: number };

export function GunList({ items, countries }: { items: Item[]; countries: string[] }) {
  const [type, setType] = useState<"전체" | "자동권총" | "리볼버">("전체");
  const [country, setCountry] = useState("전체");
  const list = useMemo(() => items.filter((g) => (type === "전체" || g.type === type) && (country === "전체" || g.country === country)), [items, type, country]);
  const btn = (active: boolean) => `rounded-full border px-3 py-1 text-xs ${active ? "border-gold bg-gold/15 text-gold" : "border-line text-muted hover:text-paper"}`;
  return (
    <div>
      <div className="space-y-3 rounded-lg border border-line bg-card p-4">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="종류">
          <span className="w-10 text-xs text-muted">종류</span>
          {(["전체", "자동권총", "리볼버"] as const).map((t) => (
            <button key={t} type="button" className={btn(type === t)} aria-pressed={type === t} onClick={() => setType(t)}>{t}</button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="나라">
          <span className="w-10 text-xs text-muted">나라</span>
          {["전체", ...countries].map((c) => (
            <button key={c} type="button" className={btn(country === c)} aria-pressed={country === c} onClick={() => setCountry(c)}>{c}</button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs text-muted" aria-live="polite">{list.length}종</p>
      <ul className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((g) => {
          const img = gunImage(g.slug);
          return (
            <li key={g.slug}>
              <Link href={`/guns/${g.slug}`} className="block h-full rounded-lg border border-line bg-card p-4 hover:border-gold/70">
                {img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.src} alt={`${g.nameEn} (참고 사진)`} width={img.w} height={img.h} loading="lazy" className="aspect-[16/10] w-full rounded-md border border-line bg-white object-contain" />
                ) : null}
                <p className="mt-3 text-[11px] tracking-wider text-blood">{g.type} · {g.country} · {g.year}</p>
                <p className="mt-1 font-semibold">{g.nameKo}</p>
                <p className="text-xs text-muted">{g.nameEn}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{g.tagline}</p>
                <p className="mt-2 text-[11px] text-muted">등장 작품 {g.films}편</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
