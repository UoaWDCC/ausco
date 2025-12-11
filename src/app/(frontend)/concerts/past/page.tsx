import PastConcerts from "@components/concerts/PastConcerts";

import { Youtube } from "react-bootstrap-icons";

import { getConcertsPast } from "@/actions/pageActions";
import { Button } from "@components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function Past() {
  const content = await getConcertsPast();

  return (
    <div className="bg-(--cream)">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Description */}
        <section className="w-full pt-44 pb-18 px-6 flex flex-col items-center text-center text-(--brown)">
          <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">Past Concerts</h1>
          <h3 className="text-base w-full px-30">{content.description}</h3>
        </section>

        {/* <PastConcerts /> */}
        <section className="pb-18 text-left">
          <div className="bg-(--brown) mb-18" style={{ height: "0.5px" }} />

          <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">
            {content.pastConcerts?.[0].year}
          </h1>

          <div className="flex gap-9 items-start bg-(--beige) w-full rounded-lg p-9">
            {/* Semester 1 */}
            <div className="flex w-1/2 gap-7">
              {/* Semester 1 Poster */}
              <div className="w-3/7">
                <div className="relative group overflow-hidden rounded-md w-full">
                  {typeof content.pastConcerts?.[0].semesterOne.poster === "object" &&
                    content.pastConcerts?.[0].semesterOne.poster?.url && (
                      <Image
                        src={content.pastConcerts?.[0].semesterOne.poster.url}
                        alt={
                          content.pastConcerts?.[0].semesterOne.poster.alt ||
                          "Semester One Concert Poster"
                        }
                        width={420}
                        height={594}
                        className="w-full h-auto object-cover"
                        // Next.js width/height props are used for image optimisation at build/render time.
                        // The className (w-full h-auto) overrides the rendered size for responsive layout.
                      />
                    )}

                  {/* Brown Overlay */}
                  <div className="absolute inset-0 bg-(--brown) opacity-0 group-hover:opacity-100 flex items-center justify-center text-(--cream) text-center transition-opacity duration-300">
                    {/* TODO: add link once gallery is done */}
                    <Link href="/">
                      <Button variant="link">
                        View the
                        <br />
                        photos for this
                        <br />
                        concert <ArrowUpRight size={18} className="inline-block" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Semester 1 Text */}
              <div className="w-4/7 flex flex-col text-(--brown) gap-2">
                <p>Semester 1</p>
                <h3 className="font-semibold! text-2xl! m-0! italic">
                  {content.pastConcerts?.[0].semesterOne.title}
                </h3>
                <p>{content.pastConcerts?.[0].semesterOne.description}</p>
                <a
                  href={content.pastConcerts?.[0].semesterOne.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-1.5 pb-2.5"
                >
                  <Button size="lg" variant="brown" className="text-base!">
                    <Youtube size={18} />
                    Watch the Concert Video
                  </Button>
                </a>
                <p className="italic text-sm font-normal">
                  ${content.pastConcerts?.[0].semesterOne.charity.donation} donated to{" "}
                  <a
                    href={content.pastConcerts?.[0].semesterOne.charity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="link" className="text-sm! font-normal!">
                      {content.pastConcerts?.[0].semesterOne.charity.name}
                    </Button>
                  </a>
                </p>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="flex w-1/2 gap-7">
              {/* Semester 2 Poster */}
              <div className="w-3/7">
                <div className="relative group overflow-hidden rounded-md w-full">
                  {typeof content.pastConcerts?.[0].semesterTwo.poster === "object" &&
                    content.pastConcerts?.[0].semesterTwo.poster?.url && (
                      <Image
                        src={content.pastConcerts?.[0].semesterTwo.poster.url}
                        alt={
                          content.pastConcerts?.[0].semesterTwo.poster.alt ||
                          "Semester Two Concert Poster"
                        }
                        width={420}
                        height={594}
                        className="w-full h-auto object-cover"
                        // Next.js width/height props are used for image optimisation at build/render time.
                        // The className (w-full h-auto) overrides the rendered size for responsive layout.
                      />
                    )}

                  {/* Brown Overlay */}
                  <div className="absolute inset-0 bg-(--brown) opacity-0 group-hover:opacity-100 flex items-center justify-center text-(--cream) text-center transition-opacity duration-300">
                    {/* TODO: add link once gallery is done */}
                    <Link href="/">
                      <Button variant="link">
                        View the
                        <br />
                        photos for this
                        <br />
                        concert <ArrowUpRight size={18} className="inline-block" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Semester 2 Text */}
              <div className="w-4/7 flex flex-col text-(--brown) gap-2">
                <p>Semester 2</p>
                <h3 className="font-semibold! text-2xl! m-0! italic">
                  {content.pastConcerts?.[0].semesterTwo.title}
                </h3>
                <p>{content.pastConcerts?.[0].semesterTwo.description}</p>
                <a
                  href={content.pastConcerts?.[0].semesterTwo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-1.5 pb-2.5"
                >
                  <Button size="lg" variant="brown" className="text-base!">
                    <Youtube size={18} />
                    Watch the Concert Video
                  </Button>
                </a>
                <p className="italic text-sm font-normal">
                  ${content.pastConcerts?.[0].semesterTwo.charity.donation} donated to{" "}
                  <a
                    href={content.pastConcerts?.[0].semesterTwo.charity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="link" className="text-sm! font-normal!">
                      {content.pastConcerts?.[0].semesterTwo.charity.name}
                    </Button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// export interface PastConcert {
//   id: string;
//   description: string;
//   pastConcerts: {
//     id: string;
//     year: number;
//     semesterOne: {
//       poster: string | Media; // depending on how Payload generates uploads
//       title: string;
//       description: string;
//       url: string;
//       charity: {
//         name: string;
//         url: string;
//         donation: number;
//       };
//     };
//     semesterTwo: {
//       poster: string | Media;
//       title: string;
//       description: string;
//       url: string;
//       charity: {
//         name: string;
//         url: string;
//         donation: number;
//       };
//     };
//   }[];
//   updatedAt?: string;
//   createdAt?: string;
// }
