import Hero from "@components/about-us/Hero";
import CardLayout from "@components/about-us/CardLayout";

import { getAboutUs } from "@/actions/pageActions";
import { getSiteSetting } from "@/actions/globalActions";

export default async function AboutPage() {
  const [aboutUsContent, siteSettingContent] = await Promise.all([getAboutUs(), getSiteSetting()]);

  const cardContent = {
    ...aboutUsContent.cards,
    constitutionLink: siteSettingContent.linksMap.constitution,
  };

  return (
    <section className="bg-(--cream)">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-44">
        <Hero content={aboutUsContent.hero} />
      </div>
      <div className="w-full md:pb-16">
        <CardLayout content={cardContent} />
      </div>
    </section>
  );
}
