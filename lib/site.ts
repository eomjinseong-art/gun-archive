export const SITE_NAME = "건 아카이브";
export const SITE_TAGLINE = "영화 속 권총 이야기 — 더티 해리의 매그넘부터 존 윅의 핏 바이퍼까지";
export const SITE_SUB =
  "영화와 드라마에 자주 나온 권총을 자동권총과 리볼버로 나눠, 만든 나라와 역사, 생김새의 특징, 어떤 영화의 누가 들었는지를 정리했습니다.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gun-archive.vercel.app";

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

/** Abacus visitor counter. One hit per browser per local day; test traffic is excluded. */
export const ABACUS_NAMESPACE = "gun-archive";
export const ABACUS_KEY = "visits";
export const ABACUS_STORAGE_KEY = "gun-archive:visits:day";
export const PROD_HOSTS = ["gun-archive.vercel.app"];

export const FAN_SITE_DISCLAIMER =
  "건 아카이브는 영화를 좋아하는 팬이 만든 비공식 영화·문화 아카이브입니다. 총기 제조사, 영화사, 배우·제작진과 어떤 관계도 없으며, 제품명과 영화 제목·상표는 각 권리자의 것입니다.";

export const SAFETY_NOTE =
  "이 사이트는 영화 속 소품과 역사·문화 이야기만 다룹니다. 총기의 구입·제작·개조·사용 방법은 다루지 않으며, 그런 질문에도 답하지 않습니다.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/guns", label: "권총 목록" },
  { href: "/films", label: "영화별 보기" },
  { href: "/scenes", label: "명장면" },
  { href: "/credits", label: "출처" },
] as const;

function utm(base: string, path = "/", medium = "footer") {
  const url = new URL(path, base);
  url.searchParams.set("utm_source", "gun-archive");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "archive-network");
  return url.toString();
}

export const SISTER = {
  johnwick: { label: "존 윅 아카이브", url: "https://johnwick-archive.vercel.app" },
  bond: { label: "007 본드 아카이브", url: "https://bond-archive-two.vercel.app" },
  mi: { label: "미션 임파서블 아카이브", url: "https://mi-archive.vercel.app" },
  ff: { label: "분노의 질주 아카이브", url: "https://ff-archive.vercel.app" },
  transformers: { label: "트랜스포머 아카이브", url: "https://transformers-archive.vercel.app" },
  checklist: { label: "영화 체크리스트", url: "https://movie-checklist-sigma.vercel.app" },
} as const;

export type SisterKey = keyof typeof SISTER;

export const SISTER_SITES = [
  SISTER.johnwick,
  SISTER.bond,
  SISTER.mi,
  SISTER.ff,
  SISTER.transformers,
  SISTER.checklist,
  { label: "나두인물", url: "https://nadoo-people.vercel.app" },
  { label: "나두 허브", url: "https://tinalinkeom.vercel.app" },
] as const;

export function sisterUrl(url: string, medium = "footer", path = "/") {
  return utm(url, path, medium);
}
