// import GalleryHero from "@/app/(frontend)/components/gallery/GalleryHero";
import { getAnnualCampGallery } from "@/actions/pageActions";
import Carousel from "@components/gallery/Carousel";
import Header from "@components/gallery/Header";

export default async function AnnualCampGallery() {
  const content = await getAnnualCampGallery();

  return (
    <div className="w-full max-w-6xl mx-auto pt-44 px-6 flex flex-col items-center">
      <Header title="Annual Camp Photos" align="left" />

      {/* Albums */}
      {content.albums && content.albums.length > 0 ? (
        content.albums?.map((album, index) =>
          album ? (
            <div className="w-full" key={index}>
              {/* Divider */}
              <div className="w-full bg-(--navy) mb-16" style={{ height: "0.5px" }} />

              {/* Album */}
              <Carousel album={album} />
            </div>
          ) : null,
        )
      ) : (
        <div className="pt-8 sm:pt-18 px-4 sm:px-8 md:px-12 text-center">
          <p className="text-base text-(--navy)">
            No photos available at the moment. Please check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
