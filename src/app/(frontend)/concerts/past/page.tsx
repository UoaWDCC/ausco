import PastConcerts from "@components/concerts/PastConcerts";

import { getConcertsPast } from "@/actions/pageActions";

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

        <div className="bg-(--brown)" style={{ height: "0.5px" }} />

        {/* <PastConcerts /> */}
        <section className="py-18 text-left">
          <h1 className="font-semibold! text-4xl! m-0! text-(--brown) pb-5">2024</h1>

          <div className="flex gap-2 items-start bg-(--beige) w-full rounded-lg p-5">
            {/* Pair 1 */}
            <div className="flex w-1/2 gap-4">
              <div className="w-1/2 bg-gray-200 p-2">Image 1</div>
              <div className="w-1/2 bg-gray-100 p-2">Text 1</div>
            </div>

            {/* Pair 2 */}
            <div className="flex w-1/2 gap-6 ml-8">
              <div className="w-1/2 bg-gray-200 p-2">Image 2</div>
              <div className="w-1/2 bg-gray-100 p-2">Text 2</div>
            </div>
          </div>

          <div className="bg-(--brown) mt-18" style={{ height: "0.5px" }} />
        </section>
      </div>
    </div>
  );
}
