import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";

export default function OtherGallery() {
  return (
    <>
      <GalleryHero title="Other Photos" />
      <GalleryCarousel title="2025 Other" images={[]} />
    </>
  );
}
