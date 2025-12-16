import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";
import { getAnnualCampGallery } from "@/actions/galleryActions";
import type { Media } from "@/payload-types";

export default async function AnnualCampGallery() {
  const gallery = await getAnnualCampGallery();
  const albums = gallery?.albums || [];

  return (
    <>
      <GalleryHero title="Annual Camp Photos" />
      {albums.length === 0 ? (
        <div className="pt-8 sm:pt-18 px-4 sm:px-8 md:px-12 text-center">
          <p className="text-xl text-[var(--navy)] opacity-75">
            No photos to show right now, check back later!
          </p>
        </div>
      ) : (
        albums.map((c, i) => (
          <GalleryCarousel
            key={`${c.title}-${i}`}
            title={c.title}
            images={(c.images || []).map(({ image, alt }) => {
              const img = image as Media;
              return { src: img?.url || "", alt: alt || img?.alt };
            })}
          />
        ))
      )}
    </>
  );
}
