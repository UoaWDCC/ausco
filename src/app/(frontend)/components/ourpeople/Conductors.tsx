"use client";

import FramedImage from "./FramedImage";
import { Media } from "@/payload-types";

import { useEffect, useRef, useState } from "react";

type ConductorsProps = {
  content?: {
    frame: Media | string | null;
    members?:
      | {
          image: Media | string | null;
          name: string;
          description: string;
        }[]
      | null;
  };
};

const MAX_COLS = 3; // Maximum number of columns per full row

const Conductors = ({ content }: ConductorsProps) => {
  const getImageUrl = (image: Media | string | null | undefined): string | null => {
    if (!image) return null; // handle undefined or null
    if (typeof image === "string") return image; // if it's already a string URL
    if (typeof image === "object" && image.url) return image.url; // if it's a Media object, extract the URL
    return null;
  };
  const frameUrl = getImageUrl(content?.frame);

  // 1. Prepare members for layout
  const members = content?.members ?? [];
  const count = members.length;
  // 2. Calculate full rows and remainder
  const fullRowsCount = Math.floor(count / MAX_COLS);
  const remainder = count % MAX_COLS;
  // 3. Split members into full rows and remainder
  const fullRowMembers = members.slice(0, fullRowsCount * MAX_COLS);
  const remainderMembers = members.slice(fullRowsCount * MAX_COLS);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const colRef = useRef<HTMLDivElement | null>(null);

  const [colWidth, setColWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!colRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setColWidth(entry.contentRect.width);
    });

    observer.observe(colRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex w-full flex-col items-center pb-8 text-(--navy) sm:pb-12 md:pb-16">
      <h2 className="shrink-0 pb-4 text-center text-xl font-medium sm:text-2xl md:pb-7 md:text-3xl">
        Conductors
      </h2>
      {/* Conductors - Full Row */}
      {/* Note: adjusting the gap will affect calculations on [Conductors - Remaining Rows], when remainder == 2 */}
      <div
        ref={gridRef}
        className="grid w-full grid-cols-3 justify-items-center gap-2 sm:gap-9 md:gap-16"
      >
        {fullRowMembers.map((member, index) => {
          const profileUrl = getImageUrl(member.image);

          return (
            <div
              key={index}
              ref={index === 0 ? colRef : null}
              className="flex w-full flex-col text-center"
            >
              {profileUrl && frameUrl && (
                <FramedImage imageUrl={profileUrl} frameUrl={frameUrl} frameType="oval" />
              )}

              <div className="flex w-full flex-col gap-1.5">
                <p className="text-sm font-bold sm:text-base">{member.name}</p>
                <p className="text-xs sm:text-sm md:text-base">{member.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conductors - Remaining Rows */}
      {remainder === 1 && (
        <div className="mt-2 grid w-full grid-cols-3 justify-items-center gap-2 sm:mt-9 sm:gap-9 md:mt-16 md:gap-16">
          <div className="col-start-2 flex w-full flex-col text-center">
            {(() => {
              const member = remainderMembers[0];
              const profileUrl = getImageUrl(member.image);

              return (
                <>
                  {profileUrl && frameUrl && (
                    <FramedImage imageUrl={profileUrl} frameUrl={frameUrl} frameType="oval" />
                  )}
                  <div className="flex flex-col gap-1.5">
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
                {profileUrl && frameUrl && (
                  <FramedImage imageUrl={profileUrl} frameUrl={frameUrl} frameType="oval" />
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
    </section>
  );
};

export default Conductors;
