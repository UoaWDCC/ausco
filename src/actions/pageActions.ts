"use server";

import { cache } from "react";
import { getPayload } from "@libs/payload";

import {
  Home,
  AboutUs,
  OurStory,
  OurPerson,
  Concert,
  ConcertsUpcoming,
  ConcertsPast,
  Gallery,
  GalleryConcert,
  GalleryAnnualcamp,
  GalleryExecutivecamp,
  GalleryOther,
} from "@/payload-types";

export const getHome = cache(async (): Promise<Home> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "home", depth: 1 });
});

export const getAboutUs = cache(async (): Promise<AboutUs> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "about-us", depth: 1 });
});

export const getOurStory = cache(async (): Promise<OurStory> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "our-story", depth: 1 });
});

// Payload Globals are single documents, so the generated TS type is singular (OurPerson) even if the slug is plural (our-people).
// See src\collections\global\OurPeople.ts docs for more information.
export const getOurPeople = cache(async (): Promise<OurPerson> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "our-people", depth: 1 });
});

// Concert Pages
export const getConcerts = cache(async (): Promise<Concert> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "concerts", depth: 1 });
});

export const getConcertsUpcoming = cache(async (): Promise<ConcertsUpcoming> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "concerts-upcoming", depth: 1 });
});

export const getConcertsPast = cache(async (): Promise<ConcertsPast> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "concerts-past", depth: 1 });
});

// Gallery Pages
export const getGallery = cache(async (): Promise<Gallery> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "gallery", depth: 1 });
});

export const getGalleryConcerts = async (): Promise<GalleryConcert> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-concert" });
};

export const getGalleryAnnualCamp = cache(async (): Promise<GalleryAnnualcamp> => {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "gallery-annualcamp", depth: 1 });
});

export const getGalleryExecutiveCamp = async (): Promise<GalleryExecutivecamp> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-executivecamp" });
};

export const getGalleryOther = async (): Promise<GalleryOther> => {
  const payload = await getPayload();
  return await payload.findGlobal({ slug: "gallery-other" });
};
