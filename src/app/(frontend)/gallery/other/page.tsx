import Header from "@components/gallery/Header";
import PhotoCarousel from "@components/gallery/PhotoCarousel";

import { getGalleryOther } from "@/actions/pageActions";

export default async function OtherGallery() {
  const content = await getGalleryOther();
  const sortedAlbums = content.albums?.slice().sort((a, b) => b.year - a.year) ?? []; // newest year first

  return (
    <>
      <Header title="Other Photos" align="left" />

      {/* Albums */}
      {sortedAlbums.length > 0 ? (
        sortedAlbums.map((album, index) =>
          album ? (
            <div className="w-full" key={index}>
              {/* Divider */}
              <div
                className="hidden w-full bg-(--navy) sm:mb-12 sm:block md:mb-16"
                style={{ height: "0.5px" }}
              />

              {/* Album */}
              <PhotoCarousel album={album} />
            </div>
          ) : null,
        )
      ) : (
        <div className="w-full">
          <div className="mb-8 w-full bg-(--navy) sm:mb-12 md:mb-16" style={{ height: "0.5px" }} />
          <p className="text-base">No photos available at the moment. Please check back soon.</p>
        </div>
      )}
    </>
  );
}
