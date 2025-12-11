import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";
import { getAnnualCampGallery } from "@/actions/galleryActions";
import type { Media } from "@/payload-types";

export default async function AnnualCampGallery() {
  const gallery = await getAnnualCampGallery();
  return (
    <>
      <GalleryHero title="Annual Camp Photos" />
      {(gallery?.albums || []).map((c, i) => (
        <GalleryCarousel
          key={`${c.title}-${i}`}
          title={c.title}
          images={(c.images || []).map(({ image, alt }) => {
            const img = image as Media;
            return { src: img?.url || "", alt: alt || img?.alt };
          })}
        />
      ))}
    </>
  );
}
