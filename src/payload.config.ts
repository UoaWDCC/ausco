import { s3Storage } from "@payloadcms/storage-s3";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Item } from "./collections/Test";
import { Header } from "./collections/global/Header";
import { Footer } from "./collections/global/Footer";
import { SiteSetting } from "./collections/global/SiteSetting";

import { Home } from "./collections/global/Home";

import { AboutUs } from "./collections/global/AboutUs";

import { OurPeople } from "./collections/global/OurPeople";

import { Concerts } from "./collections/global/Concerts";
import { ConcertsUpcoming } from "./collections/global/ConcertsUpcoming";
import { ConcertsPast } from "./collections/global/ConcertsPast";

import { ConcertsGallery } from "./collections/global/GalleryConcert";
import { AnnualCampGallery } from "./collections/global/GalleryAnnualCamp";
import { ExecutiveCampGallery } from "./collections/global/GalleryExecutiveCamp";
import { OtherGallery } from "./collections/global/GalleryOther";
import { Gallery } from "./collections/global/Gallery";

import { OurStory } from "./collections/global/OurStory";

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
    OurStory,
    AboutUs,
    OurPeople,
    Concerts,
    ConcertsUpcoming,
    ConcertsPast,
    Gallery,
    ConcertsGallery,
    AnnualCampGallery,
    ExecutiveCampGallery,
    OtherGallery,
  ],
  collections: [Users, Media, Item],
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
