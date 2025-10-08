import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";

export default function AnnualCampGallery() {
  return (
    <>
      <GalleryHero title="Annual Camp Photos" />
      <GalleryCarousel title="2025 Annual Camp" images={[]} />
    </>
  );
}
