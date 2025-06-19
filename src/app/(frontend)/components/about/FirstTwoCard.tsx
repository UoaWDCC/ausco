import { Media } from "@/payload-types";
import { Eye } from 'lucide-react';
import { History } from 'lucide-react';

import { getAboutFirstCards } from "@/actions/getAboutFirstCards";

const FirstTwoCard = async () => {
  const [content] = await Promise.all([
    getAboutFirstCards(),
  ]);

  const getImageUrl = (imageField: string | Media | null | undefined) => {
    if (typeof imageField === 'object' && imageField !== null && 'url' in imageField) {
      return imageField.url;
    }
    return ''; // Or a placeholder image URL if no image is found
  };
  
  return (
    <div className="w-full bg-[#F6F4EC]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          
          <div className="group relative w-full md:w-3/5 lg:w-3/5 aspect-video rounded-lg overflow-hidden shadow-sm">
              {content.visionCard && content.visionCard['background-image'] && (
                <img
                src={getImageUrl(content.visionCard['background-image'])}
                alt={typeof content.visionCard['background-image'] === 'object' ? content.visionCard['background-image'].alt : 'Vision Background'}
                className="absolute inset-0 w-full h-full object-cover opacity-15"
                />
            )}
            <div className="absolute inset-0 group-hover:bg-[#EEE5D8] transition-colors duration-300"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#602C0F] px-2 py-4 lg:p-16">
              <Eye className="size-[40px] sm:size-[40px] text-[#602C0F] group-hover:text-[#C3B2A0] group-hover:mb-4"/> <h3 className="text-3xl lg:text-5xl font-bold my-4 group-hover:hidden ">{content.visionCard.title}</h3>
              <p className="text-sm md:text-base group-hover:hidden">{content.visionCard["short-desc"]}</p>
              <p className="hidden group-hover:flex text-sm md:text-base">{content.visionCard["full-desc"]}</p>
            </div>
          </div>

        <div className="group relative w-full md:w-2/5 lg:w-2/5 aspect-video rounded-lg overflow-hidden shadow-sm">
              {content.historyCard && content.historyCard['background-image'] && (
                <img
                src={getImageUrl(content.historyCard['background-image'])}
                alt={typeof content.historyCard['background-image'] === 'object' ? content.historyCard['background-image'].alt : 'History Background'}
                className="absolute inset-0 w-full h-full object-cover opacity-15"
                />
            )}
            <div className="absolute inset-0 group-hover:bg-[#C7D5E8] transition-colors duration-300"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#264C84] px-2 py-4 lg:p-16">
            <History className="size-[35px] sm:size-[35px] text-[#264C84] group-hover:text-[#83A0CA] group-hover:mb-4"/> <h3 className="text-3xl lg:text-5xl font-bold my-4 group-hover:hidden">{content.historyCard.title}</h3>
            <p className="text-sm md:text-base group-hover:hidden">{content.historyCard["short-desc"]}</p>
            <p className="hidden group-hover:flex text-sm md:text-base">{content.historyCard["full-desc"]}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default FirstTwoCard;
