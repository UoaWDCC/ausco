import HeroSection from "@components/home/HeroSection";
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
  // TODO: sort imports for this file and layout.tsx
  return (
    <>
      <HeroSection content={heroContent} />
      <UpcomingConcert />
      <InfoCards />
      <PastConcert />
    </>
  );
}
