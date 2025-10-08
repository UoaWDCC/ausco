import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";

export default function ConcertGallery() {
  return (
    <>
      <GalleryHero title="Concert Photos" />
      <GalleryCarousel title="2025 Concerts" images={[]} />
    </>
  );
}
