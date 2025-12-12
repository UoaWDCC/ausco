import Hero from "@components/home/Hero";
import UpcomingConcert from "@components/concerts/upcoming/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import FeatureVideo from "@components/home/FeatureVideo";

import { getHomePage } from "@/actions/pageActions";
import { getConcertsUpcoming } from "@/actions/pageActions";
import { getSiteSetting } from "@/actions/globalActions";

export default async function HomePage() {
  const [homeContent, concertsUpcomingContent, siteSettingContent] = await Promise.all([
    getHomePage(),
    getConcertsUpcoming(),
    getSiteSetting(),
  ]);

  const heroContent = {
    secondaryLogo: siteSettingContent.secondaryLogo,
    ...homeContent.hero,
  };

  const semester = homeContent.homePageUpcomingConcert.select === "concertSemesterOne" ? "1" : "2";
  const concert =
    semester === "1"
      ? concertsUpcomingContent.concertsUpcoming1
      : concertsUpcomingContent.concertsUpcoming2;

  const infoCardsContent = {
    ...homeContent.infoCards,
    links: siteSettingContent.links,
  };

  return (
    <>
      <Hero content={heroContent} />
      <div className="pt-7 pb-14 bg-(--beige)">
        <UpcomingConcert content={concert} headingVariant="homePage" semester={semester} />
      </div>
      <InfoCards content={infoCardsContent} />
      <FeatureVideo content={homeContent.featureVideoUrl} />
    </>
  );
}
