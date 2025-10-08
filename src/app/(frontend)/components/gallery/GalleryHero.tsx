//reusable galery hero component
//accepts title prop
type GalleryHeroProps = { title: string };

export default function GalleryHero({ title }: GalleryHeroProps) {
  return (
    <div className="w-full pt-40 md:pt-45">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-12">
          {title}
        </h2>
        <hr className="border-t-[2px] border-[var(--navy)]" />
      </div>
    </div>
  );
}
