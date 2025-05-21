import UpcomingConcertPoster from "../../assets/upcoming-concert.jpg";

const UpcomingConcert = () => {
    return (
      <section className="bg-[#eee5d8]">
        <div className="items-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <h1 className="inline-block mr-4">Our Upcoming Concert,</h1> 
          <h1 className="inline-block italic"> Till Death Do Us Apart</h1>
        </div>
        <img src="{ UpcomingConcertPoster }" alt="Till Death Do Us Apart Concert Poster" />
      </section>
    );
  };
  
export default UpcomingConcert;