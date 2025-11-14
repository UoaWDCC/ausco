import Hero from "@components/about/Hero";
import AboutUsCards from "@components/about/CardSection";

import { getAboutUsPage } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUsPage();

  return (
    <div className="bg-(--cream)">
      <Hero content={aboutUsContent.hero} />
      <AboutUsCards content={aboutUsContent.cards} />
    </div>
  );
}
