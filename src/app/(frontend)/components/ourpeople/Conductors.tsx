"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getOurPeople } from "@/actions/ourPeopleActions";

interface PayloadImage {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  filename?: string;
}

interface Conductor {
  name?: string;
  description?: string;
  image?: PayloadImage;
}

const Conductors = () => {
  const [frameImg, setFrameImg] = useState<PayloadImage | null>(null);
  const [conductors, setConductors] = useState<Conductor[]>([]);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOurPeople();
        const section = data?.conductorsSection;
        
        if (section) {
          // Set frame image
          if (section.conductorFrame && 
              typeof section.conductorFrame === 'object' && 
              section.conductorFrame !== null && 
              'url' in section.conductorFrame) {
            setFrameImg(section.conductorFrame as PayloadImage);
          }
          
          // Set conductors
          const conductorList: Conductor[] = [];
          
          // Conductor 1
          if (section.conductor1 && 
              section.conductor1.image && 
              typeof section.conductor1.image === 'object' && 
              section.conductor1.image !== null && 
              'url' in section.conductor1.image) {
            conductorList.push({
              name: section.conductor1.name || "Conductor 1",
              description: section.conductor1.description || "No description available",
              image: section.conductor1.image as PayloadImage
            });
          }
          
          // Conductor 2
          if (section.conductor2 && 
              section.conductor2.image && 
              typeof section.conductor2.image === 'object' && 
              section.conductor2.image !== null && 
              'url' in section.conductor2.image) {
            conductorList.push({
              name: section.conductor2.name || "Conductor 2",
              description: section.conductor2.description || "No description available",
              image: section.conductor2.image as PayloadImage
            });
          }
          
          // Conductor 3
          if (section.conductor3 && 
              section.conductor3.image && 
              typeof section.conductor3.image === 'object' && 
              section.conductor3.image !== null && 
              'url' in section.conductor3.image) {
            conductorList.push({
              name: section.conductor3.name || "Conductor 3",
              description: section.conductor3.description || "No description available",
              image: section.conductor3.image as PayloadImage
            });
          }
          
          setConductors(conductorList);
        }
      } catch (error) {
        console.error("Error fetching conductor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F6F4EC]">
        <h1 className="text-[#264C84] font-bold text-center text-2xl md:text-5xl mt-10 mb-4">
          Conductors
        </h1>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F6F4EC]">
      <h1 className="text-[#264C84] font-bold text-center text-2xl md:text-5xl mt-10 mb-4">
        Conductors
      </h1>
      
      <div className="flex flex-row items-center justify-center gap-2 md:gap-5 mt-2">
        {/* Always show 3 slots */}
        {[0, 1, 2].map((index) => {
          const conductor = conductors[index];
          
          return (
            <div
              key={index}
              className="w-50 h-62 md:w-82 md:h-82 flex items-center justify-center rounded-full relative cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Frame background */}
              {frameImg && (
                <Image
                  src={frameImg.url}
                  alt="Frame"
                  width={450}
                  height={250}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-1/2.5 w-full h-full rounded-full object-cover pointer-events-none"
                  style={{ zIndex: 0 }}
                />
              )}
              
              {/* Conductor content */}
              {conductor ? (
                hovered === index ? (
                  <div className="absolute left-1/2 top-1/2 w-33 h-39 md:w-52 md:h-60 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center justify-center bg-[#EEE5D8] z-20 pointer-events-none px-4 rounded-[50%/50%]">
                    <span className="text-center text-m md:text-xl font-bold text-[#602C0F]">
                      {conductor.name}
                    </span>
                    <span className="text-center text-s md:text-lg font-medium text-[#602C0F]">
                      {conductor.description}
                    </span>
                  </div>
                ) : (
                  conductor.image && (
                    <Image
                      src={conductor.image.url}
                      alt={conductor.name || "Conductor"}
                      width={160}
                      height={200}
                      className="absolute left-1/2 top-1/2 w-30 h-40 md:w-52 md:h-66 -translate-x-1/2 -translate-y-1/3 rounded-[50%/50%] object-cover z-10"
                    />
                  )
                )
              ) : (
                hovered === index && (
                  <div className="absolute left-1/2 top-1/2 w-33 h-39 md:w-52 md:h-60 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center justify-center bg-[#EEE5D8] z-20 pointer-events-none px-4 rounded-[50%/50%]">
                    <span className="text-center text-m md:text-xl font-bold text-[#602C0F]">
                      Conductor doesn&apos;t exist
                    </span>
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Conductors;