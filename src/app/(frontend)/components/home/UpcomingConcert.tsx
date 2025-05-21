import UpcomingConcertPoster from "../../assets/upcoming-concert.jpg";

const UpcomingConcert = () => {
    return (
      <section className="bg-[#eee5d8] text-[#602c0f] text-center mx-auto">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <p className="inline-block mr-4">Our Upcoming Concert,</p> 
          <p className="inline-block italic"> Till Death Do Us Apart</p>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <img 
          src={ UpcomingConcertPoster.src } 
          alt="Till Death Do Us Apart Concert Poster" 
          className="w-80 h-auto mr-4 border-2 border-[#602c0f] rounded-md" />
          <p className="w-120 text-sm">Love, Passion, and Loss. Our Semester 1 concert delves into the trials </p>
        </div>
        
      </section>
    );
  };
  
export default UpcomingConcert;