import Hero from "@components/about/Hero";
import AboutUsCards from "@components/about/AboutUsCards";

import { getAboutUsPage } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUsPage();
  
  return (
    <>
      <Hero content={aboutUsContent.hero} />
      <AboutUsCards />
    </>
  );
}
