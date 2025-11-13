import HeroSection from "@components/about/HeroSection";
import AboutUsCards from "@components/about/AboutUsCards";

import { getAboutUsPage } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUsPage();
  
  return (
    <>
      <HeroSection content={aboutUsContent.hero} />
      <AboutUsCards />
    </>
  );
}
