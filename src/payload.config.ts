// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Item } from "./collections/Test";
import Header from "./collections/global/Header";
import { Footer } from "./collections/global/Footer";

import LandingPage from "./collections/global/LandingPage";
import Videos from "./collections/videos";
import SecondTwoCard from "./collections/global/SecondTwoCard";

import AboutFirstCards from "./collections/global/AboutFirstCards";
import { ConcertsLanding } from "./collections/global/ConcertsLanding";

import { OurPeople } from "./collections/global/OurPeople";

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
    LandingPage,
    Footer,
    Header,
    AboutFirstCards,
    SecondTwoCard,
    OurPeople,
    ConcertsLanding,
  ],
  collections: [Users, Media, Item, Videos],
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
  ],
});
