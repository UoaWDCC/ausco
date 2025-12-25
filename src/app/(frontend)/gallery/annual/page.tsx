import Header from "@components/gallery/Header";
import Carousel from "@components/gallery/Carousel";

import { getGalleryAnnualCamp } from "@/actions/pageActions";

export default async function AnnualCampGallery() {
  const content = await getGalleryAnnualCamp();

  const sortedAlbums = content.albums?.slice().sort((a, b) => b.year - a.year) ?? [];

  return (
    <div className="w-full max-w-6xl mx-auto pt-44 px-6 flex flex-col items-center">
      <Header title="Annual Camp Photos" align="left" />

      {/* Albums */}
      {sortedAlbums.length > 0 ? (
        sortedAlbums.map((album, index) =>
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
          <p className="text-base">No photos available at the moment. Please check back soon.</p>
        </div>
      )}
    </div>
  );
}
