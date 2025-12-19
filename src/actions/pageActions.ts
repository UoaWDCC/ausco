"use server";

import { getPayload } from "@libs/payload";
import { Home } from "@/payload-types";
import { AboutUs } from "@/payload-types";
import { OurStory } from "@/payload-types";
import { OurPerson } from "@/payload-types";
import { Concert } from "@/payload-types";
import { ConcertsUpcoming } from "@/payload-types";
import { ConcertsPast } from "@/payload-types";
import { Gallery } from "@/payload-types";

export const getHome = async (): Promise<Home> => {
  const payload = await getPayload();
  const home = await payload.findGlobal({
    slug: "home",
  });

  return home;
};

export const getAboutUs = async (): Promise<AboutUs> => {
  const payload = await getPayload();
  const aboutUs = await payload.findGlobal({
    slug: "about-us",
  });

  return aboutUs;
};

export const getOurStory = async (): Promise<OurStory> => {
  const payload = await getPayload();
  const ourStory = await payload.findGlobal({
    slug: "our-story",
  });

  return ourStory;
};

// Payload Globals are single documents, so the generated TS type is singular (OurPerson) even if the slug is plural (our-people).
// See src\collections\global\OurPeople.ts docs for more information.
export const getOurPeople = async (): Promise<OurPerson> => {
  const payload = await getPayload();
  const people = await payload.findGlobal({
    slug: "our-people",
  });

  return people;
};

export const getConcerts = async (): Promise<Concert> => {
  const payload = await getPayload();
  const concerts = await payload.findGlobal({
    slug: "concerts",
  });

  return concerts;
};

export const getConcertsUpcoming = async (): Promise<ConcertsUpcoming> => {
  const payload = await getPayload();
  const concertsUpcoming = await payload.findGlobal({
    slug: "concerts-upcoming",
  });

  return concertsUpcoming;
};

export const getConcertsPast = async (): Promise<ConcertsPast> => {
  const payload = await getPayload();
  const concertsPast = await payload.findGlobal({
    slug: "concerts-past",
  });

  return concertsPast;
};

export const getGallery = async (): Promise<Gallery> => {
  const payload = await getPayload();
  const gallery = await payload.findGlobal({
    slug: "gallery",
  });

  return gallery;
};
