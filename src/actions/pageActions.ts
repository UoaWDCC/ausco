"use server";

import { cache } from "react";
import payload from "payload";

import {
  Home,
  AboutUs,
  OurStory,
  OurPerson,
  Concert,
  ConcertsUpcoming,
  ConcertsPast,
  Gallery,
} from "@/payload-types";

export const getHome = cache(async (): Promise<Home> => {
  return payload.findGlobal({ slug: "home", depth: 1 });
});

export const getAboutUs = cache(async (): Promise<AboutUs> => {
  return payload.findGlobal({ slug: "about-us", depth: 1 });
});

export const getOurStory = cache(async (): Promise<OurStory> => {
  return payload.findGlobal({ slug: "our-story", depth: 1 });
});

// Payload Globals are single documents, so the generated TS type is singular (OurPerson) even if the slug is plural (our-people).
// See src\collections\global\OurPeople.ts docs for more information.
export const getOurPeople = cache(async (): Promise<OurPerson> => {
  return payload.findGlobal({ slug: "our-people", depth: 1 });
});

export const getConcerts = cache(async (): Promise<Concert> => {
  return payload.findGlobal({ slug: "concerts", depth: 1 });
});

export const getConcertsUpcoming = cache(async (): Promise<ConcertsUpcoming> => {
  return payload.findGlobal({ slug: "concerts-upcoming", depth: 1 });
});

export const getConcertsPast = cache(async (): Promise<ConcertsPast> => {
  return payload.findGlobal({ slug: "concerts-past", depth: 1 });
});

export const getGallery = cache(async (): Promise<Gallery> => {
  return payload.findGlobal({ slug: "gallery", depth: 1 });
});
