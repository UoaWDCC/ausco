import Hero from "@components/about/Hero";
import CardsSection from "@components/about/CardsSection";

import { getAboutUsPage } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUsPage();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-16 px-6 flex flex-col items-center">
        <Hero content={aboutUsContent.hero} />
        <CardsSection content={aboutUsContent.cards} />
      </div>
    </section>
  );
}
