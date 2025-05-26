import UpcomingConcertPoster from "../../assets/upcoming-concert.jpg";
import { getLandingPage } from "@/actions/getLandingPage";

const UpcomingConcert = async () => {

    const [content] = await Promise.all([
      getLandingPage(),
    ]);

    return (
      <section className="bg-[#eee5d8] text-[#602c0f] mx-auto">

        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <p className="inline-block mr-4">Our Upcoming Concert,</p> 
          <p className="inline-block italic"> Till Death Do Us 'Part</p>
        </div>

        <div className="flex flex-row gap-16 justify-center item-start mt-4">
          <img 
          src={ UpcomingConcertPoster.src } 
          alt="Till Death Do Us Apart Concert Poster" 
          className="w-80 h-auto mr-4 border-2 border-[#602c0f] rounded-md mt-0" />
          <div className="w-96 text-xs text-left mt-0 pt-0">
            <p className="mt-0 pt-0">Love, Passion, and Loss. Our Semester 1 concert delves into the trials and the tribulations of romance and its all-encompassing nature - as well as the grief we feel in its absence</p>
            <p className="mb-4 ">That's why we partnered with Tōtara Hospice, in support of providing accessible, quality, and compassionate palliative care in their last moments. All concert proceeds will go towards this cause. Join us at one of our two concerts!</p>
            <hr className="border-t-[1.5px] border-[#602c0f] mt-12" />
          </div>
        </div>
        
      </section>
    );
  };
  
export default UpcomingConcert;