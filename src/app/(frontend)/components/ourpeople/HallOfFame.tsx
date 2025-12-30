"use client";

import { useEffect, useRef, useState } from "react";

import FramedImage from "./FramedImage";
import { Media } from "@/payload-types";

type HallOfFameProps = {
  content: {
    pastPresidents?: {
      frame: Media | string | null;
      members?:
        | {
            image: Media | string | null;
            name: string;
            description: string;
          }[]
        | null;
    } | null;
    founders?: {
      frame: Media | string | null;
      members?:
        | {
            image: Media | string | null;
            name: string;
            description: string;
          }[]
        | null;
    } | null;
  };
};

const MAX_COLS = 3; // Maximum number of columns per full row

const HallOfFame = ({ content }: HallOfFameProps) => {
  const getImageUrl = (image: Media | string | null | undefined): string | null => {
    if (!image) return null; // handle undefined or null
    if (typeof image === "string") return image; // if it's already a string URL
    if (typeof image === "object" && image.url) return image.url; // if it's a Media object, extract the URL
    return null;
  };
  const pastPresidentsFrameUrl = getImageUrl(content?.pastPresidents?.frame);
  const foundersFrameUrl = getImageUrl(content?.founders?.frame);

  // 1. Prepare members for layout
  const members = content?.pastPresidents?.members ?? [];
  const count = members.length;
  // 2. Calculate full rows and remainder
  const fullRowsCount = Math.floor(count / MAX_COLS);
  const remainder = count % MAX_COLS;
  // 3. Split members into full rows and remainder
  const fullRowMembers = members.slice(0, fullRowsCount * MAX_COLS);
  const remainderMembers = members.slice(fullRowsCount * MAX_COLS);

  // Measuring column width for remainder == 2 case
  const gridRef = useRef<HTMLDivElement | null>(null);
  const colRef = useRef<HTMLDivElement | null>(null);
  const [colWidth, setColWidth] = useState<number | null>(null);
  // Set up ResizeObserver to track column width - responsive to viewport changes
  useEffect(() => {
    if (!colRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setColWidth(entry.contentRect.width);
    });

    observer.observe(colRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="text-center text-(--navy)">
      <h2 className="shrink-0 pb-5 text-xl font-medium sm:pb-9 sm:text-2xl md:pb-13 md:text-3xl">
        Hall Of Fame
      </h2>
      <div className="w-full bg-(--navy)" style={{ height: "1px" }} />

      <h3 className="pt-5 pb-3 text-base font-semibold sm:pt-9 sm:pb-6 sm:text-lg md:pt-13 md:pb-9 md:text-xl">
        Past Presidents
      </h3>

      {/* Past Presidents - Full Row */}
      <div
        ref={gridRef}
        className="mb-5 grid w-full grid-cols-3 justify-items-center gap-2 sm:mb-9 sm:gap-9 md:mb-13 md:gap-16"
      >
        {fullRowMembers.map((member, index) => {
          const profileUrl = getImageUrl(member.image);

          return (
            <div
              key={index}
              ref={index === 0 ? colRef : null}
              className="flex w-full flex-col text-center"
            >
              {profileUrl && pastPresidentsFrameUrl && (
                <FramedImage
                  imageUrl={profileUrl}
                  frameUrl={pastPresidentsFrameUrl}
                  frameType="oval"
                />
              )}
              <div className="flex w-full flex-col gap-1.5">
                <p className="text-sm font-bold sm:text-base">{member.name}</p>
                <p className="text-xs sm:text-sm md:text-base">{member.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Past Presidents - Remaining Row */}
      {remainder === 1 && (
        <div className="mt-2 grid w-full grid-cols-3 justify-items-center gap-2 sm:mt-9 sm:gap-9 md:mt-16 md:gap-16">
          <div className="col-start-2 flex w-full flex-col text-center">
            {(() => {
              const member = remainderMembers[0];
              const profileUrl = getImageUrl(member.image);

              return (
                <>
                  {profileUrl && pastPresidentsFrameUrl && (
                    <FramedImage
                      imageUrl={profileUrl}
                      frameUrl={pastPresidentsFrameUrl}
                      frameType="oval"
                    />
                  )}
                  <div className="flex w-full flex-col gap-1.5">
                    <p className="text-sm font-bold sm:text-base">{member.name}</p>
                    <p className="text-xs sm:text-sm md:text-base">{member.description}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
      {remainder === 2 && colWidth && (
        <div data-remainder-two className="mt-2 flex w-full justify-evenly sm:mt-9 md:mt-16">
          {remainderMembers.map((member, index) => {
            const profileUrl = getImageUrl(member.image);

            return (
              <div
                key={index}
                className="flex w-full flex-col text-center"
                style={{
                  width: colWidth,
                  maxWidth: colWidth,
                }}
              >
                {profileUrl && pastPresidentsFrameUrl && (
                  <FramedImage
                    imageUrl={profileUrl}
                    frameUrl={pastPresidentsFrameUrl}
                    frameType="oval"
                  />
                )}
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm font-bold sm:text-base">{member.name}</p>
                  <p className="text-xs sm:text-sm md:text-base">{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="w-full bg-(--navy)" style={{ height: "1px" }} />

      <h3 className="pt-5 pb-3 text-base font-semibold sm:pt-9 sm:pb-6 sm:text-lg md:pt-13 md:pb-9 md:text-xl">
        Founders
      </h3>

      <div className="mx-auto grid w-1/2 grid-cols-2 gap-16">
        {content?.founders?.members?.map((member, index) => {
          const profileUrl = getImageUrl(member.image);

          return (
            <div key={index} className="flex flex-1 flex-col">
              {profileUrl && foundersFrameUrl && (
                <FramedImage
                  imageUrl={profileUrl}
                  frameUrl={foundersFrameUrl}
                  frameType="rectangle"
                />
              )}
              <div className="flex w-full flex-col gap-1.5">
                <p className="text-sm font-bold sm:text-base">{member.name}</p>
                <p className="text-xs sm:text-sm md:text-base">{member.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HallOfFame;
