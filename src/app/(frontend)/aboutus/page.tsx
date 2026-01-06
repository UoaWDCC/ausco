import Hero from "@components/aboutus/Hero";
import CardLayout from "@components/aboutus/CardLayout";

import { getAboutUs } from "@/actions/pageActions";

export default async function AboutPage() {
  const aboutUsContent = await getAboutUs();

  return (
    <section className="bg-(--cream)">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-44">
        <Hero content={aboutUsContent.hero} />
      </div>
      <div className="w-full pb-8 sm:pb-12 md:pb-16">
        <CardLayout content={aboutUsContent.cards} />
      </div>
    </section>
  );
}
