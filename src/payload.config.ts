import { s3Storage } from "@payloadcms/storage-s3";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Albums } from "./collections/Albums";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

import SiteSetting from "./collections/global/SiteSetting";
import Header from "./collections/global/Header";
import Footer from "./collections/global/Footer";
import Home from "./collections/global/Home";
import AboutUs from "./collections/global/AboutUs";
import OurStory from "./collections/global/OurStory";
import OurPeople from "./collections/global/OurPeople";
import Concerts from "./collections/global/Concerts";
import ConcertsUpcoming from "./collections/global/ConcertsUpcoming";
import ConcertsPast from "./collections/global/ConcertsPast";
import Gallery from "./collections/global/Gallery";
import GalleryConcert from "./collections/global/GalleryConcert";
import GalleryAnnualCamp from "./collections/global/GalleryAnnualCamp";
import GalleryExecutiveCamp from "./collections/global/GalleryExecutiveCamp";
import GalleryOther from "./collections/global/GalleryOther";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Payload Admin UI displays globals in the same order they are defined in this config
  globals: [
    SiteSetting,
    Header,
    Footer,
    Home,
    AboutUs,
    OurStory,
    OurPeople,
    Concerts,
    ConcertsUpcoming,
    ConcertsPast,
    Gallery,
    GalleryConcert,
    GalleryAnnualCamp,
    GalleryExecutiveCamp,
    GalleryOther,
  ],
  collections: [Albums, Media, Users],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        albums: true,
        media: true, // your collection slug
      },
      bucket: process.env.S3_BUCKET || " ",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "", // default to empty string
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "", // default to empty string
        },
        region: process.env.S3_REGION || "", // default to empty string
      },
    }),
  ],
});
