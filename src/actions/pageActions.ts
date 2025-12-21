"use server";

import payload from "payload";
import { cache } from "react";

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

//todo: sort imports

export const getHome = cache(async (): Promise<Home> => {
  return payload.findGlobal({ slug: "home" });
});

export const getAboutUs = cache(async (): Promise<AboutUs> => {
  return payload.findGlobal({ slug: "about-us" });
});

export const getOurStory = cache(async (): Promise<OurStory> => {
  return payload.findGlobal({ slug: "our-story" });
});

// Payload Globals are single documents, so the generated TS type is singular (OurPerson) even if the slug is plural (our-people).
// See src\collections\global\OurPeople.ts docs for more information.
export const getOurPeople = async (): Promise<OurPerson> => {
  return payload.findGlobal({ slug: "our-people" });
};

export const getConcerts = cache(async (): Promise<Concert> => {
  return payload.findGlobal({ slug: "concerts" });
});

export const getConcertsUpcoming = cache(async (): Promise<ConcertsUpcoming> => {
  return payload.findGlobal({ slug: "concerts-upcoming" });
});

export const getConcertsPast = cache(async (): Promise<ConcertsPast> => {
  return payload.findGlobal({ slug: "concerts-past" });
});

export const getGallery = cache(async (): Promise<Gallery> => {
  return payload.findGlobal({ slug: "gallery" });
});
