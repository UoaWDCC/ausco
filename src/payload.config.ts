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

import StartLayout from "./custom/StartLayout";
import EndPanel from "./custom/EndPanel";

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
import Header from "./collections/global/Header";
import Footer from "./collections/global/Footer";
import SiteSettings from "./collections/global/SiteSettings";
import Legacy from "./collections/global/Legacy";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: [StartLayout] as any,
      afterDashboard: [EndPanel] as any,
    },
  },

  // Payload Admin UI displays globals in t  he same order they are defined in this config
  globals: [
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
    Header,
    Footer,
    SiteSettings,
    Legacy,
  ],
  collections: [Media, Albums, Users],
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
