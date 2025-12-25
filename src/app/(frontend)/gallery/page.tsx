import Header from "@components/gallery/Header";
import Card from "@components/gallery/Card";

import { getGallery } from "@/actions/pageActions";

export default async function Gallery() {
  const content = await getGallery();

  return (
    <section className="bg-(--cream)">
      <div className="w-full max-w-6xl mx-auto pt-44 pb-16 px-6 flex flex-col items-center">
        <Header title="Gallery" align="center" />

        <div className="flex flex-row justify-between items-center gap-6 w-full pb-6">
          <Card title="Concert Photos" background={content.concert} />

          <Card title="Annual Camp Photos" background={content.annual} />
        </div>

        <div className="flex flex-row justify-between items-center gap-6 w-full">
          <Card title="Executive Camp Photos" background={content.executive} />

          <Card title="Other Photos" background={content.other} />
        </div>
      </div>
    </section>
  );
}
