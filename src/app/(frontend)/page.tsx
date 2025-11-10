import Hero from "@components/home/Hero";
import UpcomingConcert from "@components/home/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import PastConcert from "@components/home/PastConcert";

import { getHomePage } from "@/actions/homeActions";
import { getSiteSetting } from "@/actions/globalActions";

export default async function HomePage() {
  const [homeContent, siteSettingContent] = await Promise.all([getHomePage(), getSiteSetting()]);

  const heroContent = {
    secondaryLogo: siteSettingContent.secondaryLogo,
    ...homeContent.hero,
  };

  const infoCardsContent = {
    ...homeContent.infoCards,
    links: siteSettingContent.links,
  };

  return (
    <>
      <Hero content={heroContent} />
      <UpcomingConcert content={homeContent.upcomingConcert} />
      <InfoCards content={infoCardsContent} />
      <PastConcert />
    </>
  );
}
