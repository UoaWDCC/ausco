import Hero from "@components/gallery/Hero";
import Card from "@components/gallery/Card";

import { getGallery } from "@/actions/pageActions";

export default async function Gallery() {
  const content = await getGallery();

  return (
    <>
      <Hero title="Gallery" align="center" />

      <div className="flex w-full flex-col items-center justify-between gap-6 pb-6 sm:flex-row">
        <Card title="Concert Photos" background={content.concert} />

        <Card title="Annual Camp Photos" background={content.annual} />
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-6 pb-8 sm:flex-row sm:pb-12 md:pb-16">
        <Card title="Executive Camp Photos" background={content.executive} />

        <Card title="Other Photos" background={content.other} />
      </div>
    </>
  );
}
