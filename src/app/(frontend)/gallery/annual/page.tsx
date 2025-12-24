// import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";
import { getAnnualCampGallery } from "@/actions/galleryActions";
import type { Media } from "@/payload-types";
import Header from "@components/gallery/Header";

export default async function AnnualCampGallery() {
  const gallery = await getAnnualCampGallery();
  const albums = gallery?.albums || [];

  return (
    <div className="w-full max-w-6xl mx-auto pt-44 pb-16 px-6 flex flex-col items-center">
      <Header title="Annual Camp Photos" align="left" />
      {/* Albums */}
      {/* Divider */}
      <div className="bg-(--navy) mb-16" style={{ height: "0.5px" }} />

      {/* Year */}
      <h1 className="font-semibold! text-4xl! m-0! text-(--navy) pb-7">2023</h1>

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
    </div>
  );
}
