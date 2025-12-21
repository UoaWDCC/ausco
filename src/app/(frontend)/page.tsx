import Hero from "@components/home/Hero";
import UpcomingConcert from "@components/concerts/upcoming/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import FeatureVideo from "@components/home/FeatureVideo";

import { getConcertsUpcoming, getHome } from "@/actions/pageActions";
import { getSiteSetting } from "@/actions/globalActions";

export default async function HomePage() {
  const [homeContent, concertsUpcomingContent, siteSettingContent] = await Promise.all([
    getHome(),
    getConcertsUpcoming(),
    getSiteSetting(),
  ]);

  const heroContent = {
    secondaryLogo: siteSettingContent.secondaryLogo,
    ...homeContent.hero,
  };

  const isConcertSemesterOne =
    homeContent.homePageUpcomingConcert.select === "concertSemesterOne" ? true : false;

  const infoCardsContent = {
    ...homeContent.infoCards,
    links: siteSettingContent.links,
  };

  return (
    <>
      <Hero content={heroContent} />
      <div className="pt-7 pb-14 bg-(--beige)">
        <UpcomingConcert
          content={
            isConcertSemesterOne
              ? concertsUpcomingContent.concertsUpcoming1
              : concertsUpcomingContent.concertsUpcoming2
          }
          headingVariant="homePage"
          semester={isConcertSemesterOne ? "1" : "2"}
        />
      </div>
      <InfoCards content={infoCardsContent} />
      <FeatureVideo content={homeContent.featureVideoUrl} />
    </>
  );
}
