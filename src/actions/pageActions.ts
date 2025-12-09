"use server";

import { getPayload } from "@libs/payload";
import { HomePage } from "@/payload-types";
import { AboutUsPage } from "@/payload-types";
import { Concert } from "@/payload-types";
import { Gallery } from "@/payload-types";
import { UpcomingConcert } from "@/payload-types";

export const getHomePage = async (): Promise<HomePage> => {
  const payload = await getPayload();
  const homePage = await payload.findGlobal({
    slug: "home-page",
  });

  return homePage;
};

export const getAboutUsPage = async (): Promise<AboutUsPage> => {
  const payload = await getPayload();
  const aboutUsPage = await payload.findGlobal({
    slug: "about-us-page",
  });

  return aboutUsPage;
};

export const getConcertsPage = async (): Promise<Concert> => {
  const payload = await getPayload();
  const concertsPage = await payload.findGlobal({
    slug: "concerts",
  });

  return concertsPage;
};

export const getConcertsUpcoming = async (): Promise<UpcomingConcert> => {
  const payload = await getPayload();
  const concertsUpcoming = await payload.findGlobal({
    slug: "upcoming-concerts",
  });

  return concertsUpcoming;
};

export const getGalleryPage = async (): Promise<Gallery> => {
  const payload = await getPayload();
  const galleryPage = await payload.findGlobal({
    slug: "gallery",
  });

  return galleryPage;
};
