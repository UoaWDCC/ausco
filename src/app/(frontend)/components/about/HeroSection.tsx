import Image from "next/image";

const circleImages = [
  // 1 o'clock
  { src: "/assets/about-us-01.jpg", style: "top-1/8 right-1/4 w-40 h-40", width: 160, height: 160 },
  // 2 o'clock
  { src: "/assets/about-us-01.jpg", style: "top-1/4 right-1/5 w-25 h-16", width: 100, height: 64 },
  // 4 o'clock
  { src: "/assets/about-us-01.jpg", style: "bottom-1/4 right-1/6 w-25 h-20", width: 100, height: 80 },
  // 5 o'clock
  { src: "/assets/about-us-01.jpg", style: "bottom-1/8 right-1/4 w-40 h-16", width: 160, height: 64 },
  // 7 o'clock (normal)
  { src: "/assets/about-us-01.jpg", style: "bottom-1/6 left-1/4 w-40 h-25", width: 160, height: 100 },
  // 7 o'clock (corner)
  { src: "/assets/about-us-01.jpg", style: "bottom-1/9 left-1/6 w-20 h-16", width: 80, height: 64 },
  // 8 o'clock
  { src: "/assets/about-us-01.jpg", style: "bottom-1/4 left-1/8 w-25 h-20", width: 100, height: 80 },
  // 9.5 o'clock
  { src: "/assets/about-us-01.jpg", style: "top-1/3 left-1/8 w-30 h-20", width: 120, height: 80 },
  // 10 o'clock
  { src: "/assets/about-us-01.jpg", style: "top-1/4 left-1/5 w-40 h-60", width: 160, height: 240 },
  // 11 o'clock
  { src: "/assets/about-us-01.jpg", style: "top-1/5 left-1/3 w-25 h-16", width: 100, height: 64 },
];

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-[#F6F4EC]" style={{ height: "100vh", minHeight: "400px" }}>
      {/* Circle Images */}
      <div className="absolute inset-0 pointer-events-none">
        {circleImages.map((img, i) => (
          <div
            key={i}
            className={`rounded-md absolute ${img.style}`}
            style={{ position: "absolute" }}
          >
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              className="rounded-md"
              priority={i === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-20">
        <h1 className="text-[#264C84] font-extrabold text-center text-2xl md:text-4xl" style={{ margin: 0 }}>
          About Us
        </h1>
        <p>&quot; &quot;</p>
        <p className="text-[#264C84] text-center leading-relaxed max-w-2xl text-sm md:text-lg" style={{ fontSize: "clamp(0.8rem,1.2vw,1.2rem)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
