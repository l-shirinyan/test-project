import { sellers } from "@/utils/top-nfts-now";
import { StaticImageData } from "next/image";
import { SwiperProps } from "swiper/react";

export type nftCart = {
  img: StaticImageData;
  name: string;
  user: StaticImageData;
  userName: string;
  price: string;
};

export type collectCart = {
  id: number;
  name: string;
  price: string;
  img: StaticImageData;
};

export interface ICoverageData {
  id: string;
  img: { en: string };
  city1: { en: string };
  city2: { en: string };
  tab: { en: string };
  content: { en: string };
}
export interface SwiperType extends SwiperProps {
  ref?: React.MutableRefObject<SwiperType | null>;
  initialize?(): void;
  swiper?: {
    slideNext: () => void;
    slidePrev: () => void;
    slideTo: (to: number) => void;
    activeIndex: number;
    isBeginning: boolean;
    isEnd: boolean;
  };
}

export interface Seller {
  id: number;
  name: string;
  position: string;
  img: StaticImageData;
  time: string;
}

export interface Sellers {
  day: Seller[];
  month: Seller[];
  year: Seller[];
}
