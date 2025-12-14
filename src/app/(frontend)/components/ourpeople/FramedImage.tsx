import Image from "next/image";

type FramedImageProps = {
  imageUrl: string;
  frameUrl: string;
};

const FramedImage = ({ imageUrl, frameUrl }: FramedImageProps) => {
  return (
    <div className="relative w-full aspect-239/272 mb-6">
      {/* Profile Picture */}
      <div className="absolute inset-[11%] overflow-hidden rounded-[50%/40%] z-10">
        <Image
          src={imageUrl}
          alt={`Profile Picture for ${imageUrl}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* Frame */}
      <Image
        src={frameUrl}
        alt={`Frame for ${imageUrl}`}
        fill
        className="pointer-events-none object-contain z-20"
        aria-hidden
      />
    </div>
  );
};

export default FramedImage;
