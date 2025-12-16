//reusable galery hero component
//accepts title prop
type GalleryHeroProps = { title: string };

export default function GalleryHero({ title }: GalleryHeroProps) {
  return (
    <div className="w-full pt-36 sm:pt-40 md:pt-46">
      <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold text-[var(--navy)] tracking-tight mb-8 sm:mb-10 md:mb-14 lg:mb-16">
        {title}
      </h2>
      <hr className="border-t-[2px] border-[var(--navy)] hidden sm:block" />
    </div>
  );
}
