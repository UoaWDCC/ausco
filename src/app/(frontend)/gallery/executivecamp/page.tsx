import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";

export default function ExecutiveCampGallery() {
  return (
    <>
      <GalleryHero title="Executive Camp Photos" />
      <GalleryCarousel title="2025 Executive Camp" images={[]} />
    </>
  );
}
