import { getConcertsLanding } from "@/actions/getConcertsLanding";
import { Media } from "@/payload-types";

const LandingPage = async () => {
  const [content] = await Promise.all([getConcertsLanding()]);

  const getImageUrl = (imageField: string | Media | null | undefined): string | undefined => {
    if (typeof imageField === "object" && imageField !== null && "url" in imageField) {
      return imageField.url ?? undefined;
    }
    if (typeof imageField === "string") {
      return imageField;
    }
      return undefined; // Return undefined if no image is found
    };

  return (
    <div className="min-h-screen bg-[#F6F4EC] flex flex-col items-center pt-20 md:h-[max(880px,100dvh)]">
      <h1 className="text-[#602C0F]">Concerts</h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        <div className="relative w-full md:w-3/5 lg:w-3/5 aspect-video rounded-lg overflow-hidden shadow-sm">
        </div>
        <div className="relative w-full md:w-2/5 lg:w-2/5 aspect-video rounded-lg overflow-hidden shadow-sm">
        </div>
      </div>
    </div>
  );
};

export default LandingPage;