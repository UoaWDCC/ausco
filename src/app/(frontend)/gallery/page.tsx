import Header from "@components/gallery/Header";
import Card from "@components/gallery/Card";

import { getGallery } from "@/actions/pageActions";

export default async function Gallery() {
  const content = await getGallery();

  return (
    <>
      <Header title="Gallery" align="center" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 w-full pb-6">
        <Card title="Concert Photos" background={content.concert} />

        <Card title="Annual Camp Photos" background={content.annual} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 w-full pb-8 sm:pb-12 md:pb-16">
        <Card title="Executive Camp Photos" background={content.executive} />

        <Card title="Other Photos" background={content.other} />
      </div>
    </>
  );
}
