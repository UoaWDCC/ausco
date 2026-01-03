import Image from "next/image";

type FrameType = "oval" | "rectangle";

type FramedImageProps = {
  imageUrl: string;
  frameUrl: string;
  frameType: FrameType;
};

const FramedImage = ({ imageUrl, frameUrl, frameType }: FramedImageProps) => {
  const maskClass =
    frameType === "oval"
      ? "absolute inset-[11%] overflow-hidden rounded-[50%/40%] z-10"
      : "absolute inset-[10%] overflow-hidden z-10";

  return (
    <div className="relative w-full aspect-239/272 mb-6">
      {/* Profile Picture */}
      <div className={maskClass}>
        <Image
          src={imageUrl}
          alt={`Profile Picture for ${imageUrl}`}
          fill
          className="object-cover"
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
