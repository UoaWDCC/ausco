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
      <div className="relative w-full md:w-2/3 lg:w-2/3 aspect-video rounded-lg overflow-hidden shadow-sm">
          {content.visionCard && content.visionCard['background-image'] && (
            <img
            src={getImageUrl(content.visionCard['background-image'])}
            alt={typeof content.visionCard['background-image'] === 'object' ? content.visionCard['background-image'].alt : 'Vision Background'}
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
        )}

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#602C0F] p-6">
          <Eye size={40} color="#602c0f"/> <h3 className="text-5xl font-serif mb-4">{content.visionCard.title}</h3>
          <p className="text-base">{content.visionCard["short-desc"]}</p>
        </div>
      </div>

    <div className="relative w-full md:w-1/3 lg:w-1/3 aspect-video rounded-lg overflow-hidden shadow-sm">
          {content.historyCard && content.historyCard['background-image'] && (
            <img
            src={getImageUrl(content.historyCard['background-image'])}
            alt={typeof content.historyCard['background-image'] === 'object' ? content.historyCard['background-image'].alt : 'History Background'}
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
        )}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#264C84] p-6">
        <History size={35} color="#264c84"/> <h3 className="text-5xl font-serif mb-4">{content.historyCard.title}</h3>
        <p className="text-base">{content.historyCard["short-desc"]}</p>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default FirstTwoCard;
