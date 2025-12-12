import { getGalleryPage } from "@/actions/pageActions";
import Card from "@components/gallery/Card";

export default async function Gallery() {
  const content = await getGalleryPage();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-18 px-6 flex flex-col items-center gap-8">
        <h1 className="font-semibold! text-4xl! m-0! text-(--navy) mb-2">Gallery</h1>

        <div className="flex flex-row justify-between items-center gap-8 w-full">
          <Card title="Concert Photos" background={content.concert} />

          <Card title="Annual Camp Photos" background={content.annual} />
        </div>

        <div className="flex flex-row justify-between items-center gap-8 w-full">
          <Card title="Executive Camp Photos" background={content.executive} />

          <Card title="Other Photos" background={content.other} />
        </div>
      </div>
    </section>
  );
}
