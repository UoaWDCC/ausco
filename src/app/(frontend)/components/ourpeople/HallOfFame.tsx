"use client";

import { getOurPeople } from "@/actions/getOurPeoplePage";
import { Media } from "@/payload-types";
import Image from "next/image";
import pastPresidentsFrame from "../../assets/pastPresidentsFrame.png";
import foundersFrame from "../../assets/foundersFrame.png";
import { useEffect, useState } from "react";

// Define cards structure
type CardStructure = {
  name: string;
  image?: string | Media;
  description: string;
  index: number;
};

const PastPresidentsCard = ({ name, image, description, index }: CardStructure) => {
  const imageUrl = typeof image === "string" ? image : image?.url;
  const imageALT = typeof image == "string" ? image : image?.alt;
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center justify-center w-[220px] h-[260px] text-center text-[#042b50] rounded-[50%] shadow-sm cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Frame as background */}
      <div className="absolute w-[480px] h-[640px] z-30 pointer-events-none"> 
        <Image
          src={pastPresidentsFrame.src}
          alt="Frame"
          fill
          className="absolute rounded-[50%] w-full h-full object-cover pointer-events-none"
          priority={index === 0}
        />
      </div>

      {/* hovered state - past president's name and description */}
      {hovered === index ? (
        <div className="relative flex flex-col space-y-5 lg:space-y-6 items-center justify-center z-20 pointer-events-none px-4 w-[220px] h-[280px] rounded-[50%] bg-[#c6d5e8] transition-all duration-300">
          <span className="text-center text-md sm:text-l lg:text-xl font-serif">
            {name}
          </span>
          <span className="text-center text-xs sm:xs leading-relaxed">
            {description}
          </span>
        </div>
      ) : imageUrl ? ( 
        <div className="relative w-[220px] h-[260px] rounded-[50%]"> 
          {/* unhovered state - past president's image */}
          <Image
            src={imageUrl}
            alt={imageALT}
            fill
            className="object-cover absolute rounded-[50%] z-10 transition-all duration-300"
            priority={index === 0}
          />
        </div>
      ) : (
        // unhovered state when there's no image uploaded 
        <div className="flex flex-col w-[220px] h-[260px] items-center justify-center rounded-[50%] px-4 transition-all duration-300 z-10" > 
          <span className="text-center text-xs sm:xs leading-relaxed">
            image placeholder
          </span>
        </div>
      )}
    </div>
  );
};

const FoundersCard = ({ name, image, description, index }: CardStructure) => {
  const imageUrl = typeof image === "string" ? image : image?.url;
  const imageALT = typeof image == "string" ? image : image?.alt;
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center justify-center w-[220px] h-[280px] bg-[#EEE5D8] text-center text-[#042b50] space-y-5 lg:space-y-6 shadow-sm cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Frame as background */}
      <div className="absolute w-[320px] h-[380px] z-30 pointer-events-none"> 
        <Image
          src={foundersFrame.src}
          alt="Frame"
          fill
          className="absolute w-full h-full object-cover pointer-events-none -translate-y-[-20px]"
          priority={index === 0}
        />
      </div>

      {/* hovered state - founder's name and description */}
      {hovered === index ? (
        <div className="flex flex-col items-center justify-center z-20 pointer-events-none px-4 w-[220px] h-[280px] bg-[#EEE5D8] transition-all duration-300">
          <span className="text-center text-md sm:text-l lg:text-xl font-serif">
            {name}
          </span>
          <span className="text-center text-xs sm:xs leading-relaxed">
            {description}
          </span>
        </div>
      ) : imageUrl ? (
        <div className="relative w-[220px] h-[280px]"> 
          {/* unhovered state - founder's image */}
          <Image
            src={imageUrl}
            alt={imageALT}
            fill
            className="object-cover z-10 transition-all duration-300"
            priority={index === 0}
          />
        </div>
      ) : (
        // unhovered state when there's no image uploaded 
        <div className="flex flex-col w-[220px] h-[280px] items-center justify-center px-4 transition-all duration-300 z-10" > 
          <span className="text-center text-xs sm:xs leading-relaxed">
            image placeholder
          </span>
        </div>
      )}
    </div>
  );
};

const HallOfFame = () => {
  const [pastPresidents, setPastPresidents] = useState<CardStructure[]>([]);
  const [founders, setFounders] = useState<CardStructure[]>([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const [content] = await Promise.all([getOurPeople()]);
      const pp = content.hallOfFame?.pastPresidents || [];
      const fd = content.hallOfFame?.founders || [];

      console.log("PastPresidents:", pp);
      console.log("Founders:", fd); 

      setPastPresidents(
        pp.map((person: any, index: number) => ({
          ...person,
          index,
          image: (person.image as Media)?.url || "",
        }))
      );

      setFounders(
        fd.map((person: any, index: number) => ({
          ...person,
          index,
          image: (person.image as Media)?.url || "",
        }))
      );
    };

    fetchData();
  }, []);

  return(
    <div className="bg-[#eee5d8] text-[#042b50] justify-center text-center items-center mx-auto py-9 px-4">
      {/* Title of section is Hall of Fame */}
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif"> Hall of Fame </h2>
      <hr className="border-t-[1.5px] border-[#042b50] mt-12"/>

      {/* Past Presidents */}
      <div>
          <h5 className="text-sm sm:text-sm md:text-md lg:text-l xl:text-xl py-9"> Past Presidents </h5>
          <div className="flex flex-wrap justify-center gap-16 py-9">
              {pastPresidents.map(({ name, image, description }, i) => (
                  <PastPresidentsCard
                      key={name}
                      name={name}
                      image={image}
                      description={description}
                      index={i}
                  />
              ))}
          </div>
          
      </div>

      <hr className="border-t-[1.5px] border-[#042b50] mt-12"/>

      {/* Founders */}
      <div>
          <h5 className="text-sm sm:text-sm md:text-md lg:text-l xl:text-xl py-9"> Founders </h5>
          <div className="flex flex-wrap justify-center gap-16 py-9">
              {founders.map(({ name, image, description }, i) => (
                  <FoundersCard
                  key={name}
                  name={name}
                  image={image}
                  description={description}
                  index={i}
                  />
              ))}
          </div>
      </div>
    </div>
  );
}

export default HallOfFame;