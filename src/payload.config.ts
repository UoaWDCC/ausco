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

import HomePage from "./collections/global/HomePage";

import AboutHeroSection from "./collections/global/AboutUsPage";
import AboutUsCards from "./collections/global/AboutUsCards";

import { ConcertsLanding } from "./collections/global/ConcertsLanding";

import { OurPeople } from "./collections/global/OurPeople";
import { UpcomingConcerts } from "./collections/global/UpcomingConcerts";
import { PastConcerts } from "./collections/global/PastConcerts";

import { GalleryLanding } from "./collections/global/GalleryLanding";

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

  globals: [
    HomePage,
    Footer,
    Header,
    SiteSetting,
    AboutHeroSection,
    AboutUsCards,
    OurPeople,
    ConcertsLanding,
    UpcomingConcerts,
    PastConcerts,
    GalleryLanding,
    OurStory,
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
