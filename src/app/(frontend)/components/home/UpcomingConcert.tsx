import UpcomingConcertPoster from "../../assets/upcoming-concert.jpg";

const UpcomingConcert = () => {
    return (
      <section className="bg-[#eee5d8] text-[#602c0f] text-center mx-auto">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <p className="inline-block mr-4">Our Upcoming Concert,</p> 
          <p className="inline-block italic"> Till Death Do Us Apart</p>
        </div>
        <div className="flex flex-row gap-17 justify-center items-center mt-4">
          <img 
          src={ UpcomingConcertPoster.src } 
          alt="Till Death Do Us Apart Concert Poster" 
          className="w-80 h-auto mr-4 border-2 border-[#602c0f] rounded-md" />
          <div className="w-120 text-sm">
            <p >Love, Passion, and Loss. Our Semester 1 concert delves into the trials and the tribulations of romance and its all-encompassing nature - as well as the grief we feel in its absence</p>
            <p>That's why we partnered with Tōtara Hospice, in support of providing accessible, quality, and compassionate palliative care in their last moments. All concert proceeds will go towards this cause. Join us at one of our two concerts!</p>
            <hr className="border-t-[1.5px] border-[#602c0f] my-4" />
          </div>
        </div>
        
      </section>
    );
  };
  
export default UpcomingConcert;