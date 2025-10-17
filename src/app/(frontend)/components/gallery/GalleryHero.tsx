//reusable galery hero component
//accepts title prop
type GalleryHeroProps = { title: string };

export default function GalleryHero({ title }: GalleryHeroProps) {
  return (
    <div className="w-full pt-24 sm:pt-28 md:pt-36 lg:pt-45">
      <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-[var(--navy)] mb-8 sm:mb-10 md:mb-14 lg:mb-16 text-center sm:text-left">
        {title}
      </h2>
      <hr className="border-t-[2px] border-[var(--navy)] hidden sm:block" />
    </div>
  );
}
