import Header from "@components/gallery/Header";
import Carousel from "@components/gallery/Carousel";

import { getGalleryAnnualCamp } from "@/actions/pageActions";

export default async function AnnualCampGallery() {
  const content = await getGalleryAnnualCamp();
  const sortedAlbums = content.albums?.slice().sort((a, b) => b.year - a.year) ?? [];

  return (
    <>
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
        <div className="w-full">
          <div className="w-full bg-(--navy) mb-16" style={{ height: "0.5px" }} />
          <p className="text-base">No photos available at the moment. Please check back soon.</p>
        </div>
      )}
    </>
  );
}
