import data from "@/data/gun-images.json";

export type GunImage = {
  src: string;
  pageUrl: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  w: number;
  h: number;
};

const images = data as Record<string, GunImage>;

export function gunImage(slug: string): GunImage | undefined {
  return images[slug];
}
