import UpcomingConcertPoster from "../../assets/upcoming-concert.jpg";

const UpcomingConcert = () => {
    return (
      <section className="bg-[#eee5d8] text-[#602c0f]">
        <div className="items-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <h1 className="inline-block mr-4">Our Upcoming Concert,</h1> 
          <h1 className="inline-block italic"> Till Death Do Us Apart</h1>
        </div>
        <div className="justify-center">
          <img 
          src={ UpcomingConcertPoster.src } 
          alt="Till Death Do Us Apart Concert Poster" 
          className="w-64 h-auto inline-block mr-4" />
        </div>
        
      </section>
    );
  };
  
export default UpcomingConcert;