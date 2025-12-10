import Hero from "@components/about/Hero";
import CardsSection from "@components/about/CardsSection";

import { getAboutUsPage } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUsPage();

  return (
    <div className="bg-(--cream)">
      <Hero content={aboutUsContent.hero} />
      <CardsSection content={aboutUsContent.cards} />
    </div>
  );
}
