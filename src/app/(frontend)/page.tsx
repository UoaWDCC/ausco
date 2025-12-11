import Hero from "@components/home/Hero";
import UpcomingConcert1 from "@components/concerts/upcoming/UpcomingConcert";
import InfoCards from "@components/home/InfoCards";
import FeatureVideo from "@components/home/FeatureVideo";

import { getHomePage } from "@/actions/pageActions";
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
      <div className="pt-7 pb-14 bg-(--beige)">
        <UpcomingConcert1 content={homeContent.upcomingConcert} headingVariant="homePage" />
      </div>
      <InfoCards content={infoCardsContent} />
      <FeatureVideo content={homeContent.featureVideoUrl} />
    </>
  );
}
