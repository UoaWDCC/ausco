import { getLandingPage } from "@/actions/getLandingPage";
import { getAllTest } from "@/actions/getTest";
import config from "@/payload.config";

import Header from "@components/home/Header";
import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";
import Footer from "@components/home/Footer";

export default async function HomePage() {
  const [payloadConfig, content, testItems] = await Promise.all([
    config,
    getLandingPage(),
    getAllTest(),
  ]);

  return (
    <>
      <Header />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
      <Footer />
    </>
  );
}
