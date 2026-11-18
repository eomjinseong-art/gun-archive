import type { SisterKey } from "@/lib/site";

export type Film = {
  slug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  kind?: "영화" | "TV";
  /** 관련 자매 사이트 페이지 */
  sister?: { site: SisterKey; path: string };
};

export const films: Film[] = [
  // 서부극
  { slug: "shane", titleKo: "셰인", titleEn: "Shane", year: 1953 },
  { slug: "rio-bravo", titleKo: "리오 브라보", titleEn: "Rio Bravo", year: 1959 },
  { slug: "a-fistful-of-dollars", titleKo: "황야의 무법자", titleEn: "A Fistful of Dollars", year: 1964 },
  { slug: "true-grit-1969", titleKo: "트루 그릿", titleEn: "True Grit", year: 1969 },
  { slug: "unforgiven", titleKo: "용서받지 못한 자", titleEn: "Unforgiven", year: 1992 },
  { slug: "tombstone", titleKo: "툼스톤", titleEn: "Tombstone", year: 1993 },
  // 전쟁·역사
  { slug: "lawrence-of-arabia", titleKo: "아라비아의 로렌스", titleEn: "Lawrence of Arabia", year: 1962 },
  { slug: "the-great-escape", titleKo: "대탈주", titleEn: "The Great Escape", year: 1963 },
  { slug: "doctor-zhivago", titleKo: "닥터 지바고", titleEn: "Doctor Zhivago", year: 1965 },
  { slug: "young-winston", titleKo: "영 윈스턴", titleEn: "Young Winston", year: 1972 },
  { slug: "schindlers-list", titleKo: "쉰들러 리스트", titleEn: "Schindler's List", year: 1993 },
  { slug: "titanic", titleKo: "타이타닉", titleEn: "Titanic", year: 1997 },
  { slug: "saving-private-ryan", titleKo: "라이언 일병 구하기", titleEn: "Saving Private Ryan", year: 1998 },
  { slug: "enemy-at-the-gates", titleKo: "에너미 앳 더 게이트", titleEn: "Enemy at the Gates", year: 2001 },
  { slug: "inglourious-basterds", titleKo: "바스터즈: 거친 녀석들", titleEn: "Inglourious Basterds", year: 2009 },
  { slug: "1917", titleKo: "1917", titleEn: "1917", year: 2019 },
  // 007
  { slug: "dr-no", titleKo: "007 살인번호", titleEn: "Dr. No", year: 1962, sister: { site: "bond", path: "/films/dr-no" } },
  { slug: "from-russia-with-love", titleKo: "007 위기일발", titleEn: "From Russia with Love", year: 1963, sister: { site: "bond", path: "/films/from-russia-with-love" } },
  { slug: "goldfinger", titleKo: "007 골드핑거", titleEn: "Goldfinger", year: 1964, sister: { site: "bond", path: "/films/goldfinger" } },
  { slug: "goldeneye", titleKo: "007 골든아이", titleEn: "GoldenEye", year: 1995, sister: { site: "bond", path: "/films/goldeneye" } },
  { slug: "tomorrow-never-dies", titleKo: "007 네버 다이", titleEn: "Tomorrow Never Dies", year: 1997, sister: { site: "bond", path: "/films/tomorrow-never-dies" } },
  { slug: "the-world-is-not-enough", titleKo: "007 언리미티드", titleEn: "The World Is Not Enough", year: 1999, sister: { site: "bond", path: "/films/the-world-is-not-enough" } },
  { slug: "die-another-day", titleKo: "007 어나더데이", titleEn: "Die Another Day", year: 2002, sister: { site: "bond", path: "/films/die-another-day" } },
  { slug: "casino-royale-2006", titleKo: "007 카지노 로얄", titleEn: "Casino Royale", year: 2006, sister: { site: "bond", path: "/films/casino-royale-2006" } },
  { slug: "skyfall", titleKo: "007 스카이폴", titleEn: "Skyfall", year: 2012, sister: { site: "bond", path: "/films/skyfall" } },
  { slug: "spectre", titleKo: "007 스펙터", titleEn: "Spectre", year: 2015, sister: { site: "bond", path: "/films/spectre" } },
  { slug: "no-time-to-die", titleKo: "007 노 타임 투 다이", titleEn: "No Time to Die", year: 2021, sister: { site: "bond", path: "/films/no-time-to-die" } },
  // 형사·범죄
  { slug: "dirty-harry", titleKo: "더티 해리", titleEn: "Dirty Harry", year: 1971 },
  { slug: "the-french-connection", titleKo: "프렌치 커넥션", titleEn: "The French Connection", year: 1971 },
  { slug: "magnum-force", titleKo: "매그넘 포스", titleEn: "Magnum Force", year: 1973 },
  { slug: "taxi-driver", titleKo: "택시 드라이버", titleEn: "Taxi Driver", year: 1976 },
  { slug: "sudden-impact", titleKo: "서든 임팩트", titleEn: "Sudden Impact", year: 1983 },
  { slug: "scarface", titleKo: "스카페이스", titleEn: "Scarface", year: 1983 },
  { slug: "year-of-the-dragon", titleKo: "이어 오브 드래곤", titleEn: "Year of the Dragon", year: 1985 },
  { slug: "a-better-tomorrow", titleKo: "영웅본색", titleEn: "A Better Tomorrow", year: 1986 },
  { slug: "lethal-weapon", titleKo: "리썰 웨폰", titleEn: "Lethal Weapon", year: 1987 },
  { slug: "lethal-weapon-3", titleKo: "리썰 웨폰 3", titleEn: "Lethal Weapon 3", year: 1992 },
  { slug: "hard-boiled", titleKo: "첩혈속집", titleEn: "Hard Boiled", year: 1992 },
  { slug: "pulp-fiction", titleKo: "펄프 픽션", titleEn: "Pulp Fiction", year: 1994 },
  { slug: "leon", titleKo: "레옹", titleEn: "Léon: The Professional", year: 1994 },
  { slug: "heat", titleKo: "히트", titleEn: "Heat", year: 1995 },
  { slug: "snatch", titleKo: "스내치", titleEn: "Snatch", year: 2000 },
  { slug: "collateral", titleKo: "콜래트럴", titleEn: "Collateral", year: 2004 },
  // 액션
  { slug: "commando", titleKo: "코만도", titleEn: "Commando", year: 1985 },
  { slug: "robocop", titleKo: "로보캅", titleEn: "RoboCop", year: 1987 },
  { slug: "die-hard", titleKo: "다이 하드", titleEn: "Die Hard", year: 1988 },
  { slug: "die-hard-2", titleKo: "다이 하드 2", titleEn: "Die Hard 2", year: 1990 },
  { slug: "la-femme-nikita", titleKo: "니키타", titleEn: "La Femme Nikita", year: 1990 },
  { slug: "terminator-2", titleKo: "터미네이터 2", titleEn: "Terminator 2: Judgment Day", year: 1991 },
  { slug: "under-siege", titleKo: "언더 씨즈", titleEn: "Under Siege", year: 1992 },
  { slug: "the-bodyguard", titleKo: "보디가드", titleEn: "The Bodyguard", year: 1992 },
  { slug: "last-action-hero", titleKo: "라스트 액션 히어로", titleEn: "Last Action Hero", year: 1993 },
  { slug: "die-hard-with-a-vengeance", titleKo: "다이 하드 3", titleEn: "Die Hard with a Vengeance", year: 1995 },
  { slug: "the-matrix", titleKo: "매트릭스", titleEn: "The Matrix", year: 1999 },
  { slug: "mission-impossible-2", titleKo: "미션 임파서블 2", titleEn: "Mission: Impossible 2", year: 2000, sister: { site: "mi", path: "/films/mission-impossible-2" } },
  { slug: "tomb-raider", titleKo: "툼 레이더", titleEn: "Lara Croft: Tomb Raider", year: 2001 },
  { slug: "the-bourne-ultimatum", titleKo: "본 얼티메이텀", titleEn: "The Bourne Ultimatum", year: 2007 },
  { slug: "punisher-war-zone", titleKo: "퍼니셔: 워 존", titleEn: "Punisher: War Zone", year: 2008 },
  { slug: "mission-impossible-ghost-protocol", titleKo: "미션 임파서블: 고스트 프로토콜", titleEn: "Mission: Impossible – Ghost Protocol", year: 2011, sister: { site: "mi", path: "/films/ghost-protocol" } },
  { slug: "looper", titleKo: "루퍼", titleEn: "Looper", year: 2012 },
  { slug: "total-recall-2012", titleKo: "토탈 리콜", titleEn: "Total Recall", year: 2012 },
  { slug: "the-last-stand", titleKo: "라스트 스탠드", titleEn: "The Last Stand", year: 2013 },
  { slug: "a-good-day-to-die-hard", titleKo: "다이 하드: 굿 데이 투 다이", titleEn: "A Good Day to Die Hard", year: 2013 },
  { slug: "mad-max-fury-road", titleKo: "매드맥스: 분노의 도로", titleEn: "Mad Max: Fury Road", year: 2015 },
  { slug: "suicide-squad", titleKo: "수어사이드 스쿼드", titleEn: "Suicide Squad", year: 2016 },
  { slug: "ghost-in-the-shell-2017", titleKo: "공각기동대: 고스트 인 더 쉘", titleEn: "Ghost in the Shell", year: 2017 },
  { slug: "terminator-dark-fate", titleKo: "터미네이터: 다크 페이트", titleEn: "Terminator: Dark Fate", year: 2019 },
  { slug: "zombieland-double-tap", titleKo: "좀비랜드: 더블 탭", titleEn: "Zombieland: Double Tap", year: 2019 },
  { slug: "uncharted", titleKo: "언차티드", titleEn: "Uncharted", year: 2022 },
  // 인디아나 존스·스타워즈
  { slug: "star-wars", titleKo: "스타워즈 에피소드 4: 새로운 희망", titleEn: "Star Wars", year: 1977 },
  { slug: "raiders-of-the-lost-ark", titleKo: "인디아나 존스: 레이더스", titleEn: "Raiders of the Lost Ark", year: 1981 },
  { slug: "indiana-jones-last-crusade", titleKo: "인디아나 존스: 최후의 성전", titleEn: "Indiana Jones and the Last Crusade", year: 1989 },
  { slug: "indiana-jones-crystal-skull", titleKo: "인디아나 존스: 크리스탈 해골의 왕국", titleEn: "Indiana Jones and the Kingdom of the Crystal Skull", year: 2008 },
  // 존 윅
  { slug: "john-wick", titleKo: "존 윅", titleEn: "John Wick", year: 2014, sister: { site: "johnwick", path: "/films/john-wick" } },
  { slug: "john-wick-chapter-2", titleKo: "존 윅 - 리로드", titleEn: "John Wick: Chapter 2", year: 2017, sister: { site: "johnwick", path: "/films/chapter-2" } },
  { slug: "john-wick-chapter-3", titleKo: "존 윅 3: 파라벨룸", titleEn: "John Wick: Chapter 3 – Parabellum", year: 2019, sister: { site: "johnwick", path: "/films/chapter-3-parabellum" } },
  { slug: "john-wick-chapter-4", titleKo: "존 윅 4", titleEn: "John Wick: Chapter 4", year: 2023, sister: { site: "johnwick", path: "/films/chapter-4" } },
  // TV
  { slug: "the-walking-dead", titleKo: "워킹 데드", titleEn: "The Walking Dead", year: 2010, kind: "TV" },
];

export function filmBySlug(slug: string) {
  return films.find((f) => f.slug === slug);
}
