import PastConcerts from "@components/concerts/past/PastConcerts";

import { Youtube } from "react-bootstrap-icons";

import { getConcertsPast } from "@/actions/pageActions";
import { Button } from "@components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Header from "@components/concerts/Header";

export default async function Past() {
  const content = await getConcertsPast();

  return (
    <div className="bg-(--cream)">
      <div className="max-w-6xl mx-auto">
        <Header title="Past Concerts" description={content.description} />

        {/* <PastConcerts /> */}
        <section className="text-left">
          {content.pastConcerts?.map((concert, index) => (
            <div key={concert.id} className="pb-18">
              {/* Divider */}
              <div className="bg-(--brown) mb-18" style={{ height: "0.5px" }} />

              {/* Year */}
              <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-7">{concert.year}</h1>

              <div className="flex gap-9 items-start bg-(--beige) w-full rounded-lg p-9">
                {/* Semester 1 */}
                <div className="flex w-1/2 gap-7">
                  {/* Poster */}
                  <div className="w-3/7">
                    <div className="relative group overflow-hidden rounded-md w-full">
                      {typeof concert.semesterOne.poster === "object" &&
                        concert.semesterOne.poster?.url && (
                          <Image
                            src={concert.semesterOne.poster.url}
                            alt={concert.semesterOne.poster.alt || "Semester One Concert Poster"}
                            width={420}
                            height={594}
                            className="w-full h-auto object-cover"
                          />
                        )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-(--brown) opacity-0 group-hover:opacity-100 flex items-center justify-center text-(--cream) text-center transition-opacity duration-300">
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

                  {/* Text */}
                  <div className="w-4/7 flex flex-col text-(--brown) gap-2">
                    <p>Semester 1</p>
                    <h3 className="font-semibold! text-2xl! m-0! italic">
                      {concert.semesterOne.title}
                    </h3>
                    <p>{concert.semesterOne.description}</p>
                    <a
                      href={concert.semesterOne.url}
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
                      ${concert.semesterOne.charity.donation} donated to{" "}
                      <a
                        href={concert.semesterOne.charity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="link" className="text-sm! font-normal!">
                          {concert.semesterOne.charity.name}
                        </Button>
                      </a>
                    </p>
                  </div>
                </div>

                {/* Semester 2 */}
                <div className="flex w-1/2 gap-7">
                  {/* Poster */}
                  <div className="w-3/7">
                    <div className="relative group overflow-hidden rounded-md w-full">
                      {typeof concert.semesterTwo.poster === "object" &&
                        concert.semesterTwo.poster?.url && (
                          <Image
                            src={concert.semesterTwo.poster.url}
                            alt={concert.semesterTwo.poster.alt || "Semester Two Concert Poster"}
                            width={420}
                            height={594}
                            className="w-full h-auto object-cover"
                          />
                        )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-(--brown) opacity-0 group-hover:opacity-100 flex items-center justify-center text-(--cream) text-center transition-opacity duration-300">
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

                  {/* Text */}
                  <div className="w-4/7 flex flex-col text-(--brown) gap-2">
                    <p>Semester 2</p>
                    <h3 className="font-semibold! text-2xl! m-0! italic">
                      {concert.semesterTwo.title}
                    </h3>
                    <p>{concert.semesterTwo.description}</p>
                    <a
                      href={concert.semesterTwo.url}
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
                      ${concert.semesterTwo.charity.donation} donated to{" "}
                      <a
                        href={concert.semesterTwo.charity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="link" className="text-sm! font-normal!">
                          {concert.semesterTwo.charity.name}
                        </Button>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
