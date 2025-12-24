// import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import GalleryCarousel from "@/app/(frontend)/components/gallery/GalleryCarousel";
import { getAnnualCampGallery } from "@/actions/pageActions";
import type { Media } from "@/payload-types";
import Header from "@components/gallery/Header";

export default async function AnnualCampGallery() {
  const albums = await getAnnualCampGallery();

  return (
    <div className="w-full max-w-6xl mx-auto pt-44 pb-16 px-6 flex flex-col items-center">
      <Header title="Annual Camp Photos" align="left" />
      {/* Albums */}

      {/* Divider */}
      <div className="w-full bg-(--navy) mb-16" style={{ height: "0.5px" }} />

      {/* Year */}
      <h2 className="font-medium text-2xl m-0 text-(--navy) pb-7 text-left self-start">2023</h2>

      {albums ? (
        <div className="pt-8 sm:pt-18 px-4 sm:px-8 md:px-12 text-center">
          <p className="text-xl text-(--navy) opacity-75">
            No photos to show right now, check back later!
          </p>
        </div>
      ) : (
        albums.map((album, index) => <GalleryCarousel key={index} album={album} />)
      )}
    </div>
  );
}
