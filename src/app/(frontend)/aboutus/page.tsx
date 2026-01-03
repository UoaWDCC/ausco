import Hero from "@components/aboutus/Hero";
import CardsSection from "@components/aboutus/CardsSection";

import { getAboutUs } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUs();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-16 px-6 flex flex-col items-center">
        <Hero content={aboutUsContent.hero} />
        <CardsSection content={aboutUsContent.cards} />
      </div>
    </section>
  );
}
