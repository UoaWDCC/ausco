import { getLandingPage } from "@/actions/getLandingPage";

const UpcomingConcert = async () => {

    const [content] = await Promise.all([
      getLandingPage(),
    ]);

    return (
      <section className="bg-[#eee5d8] text-[#602c0f] mx-auto py-4">

        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <p className="inline-block mr-4">Our Upcoming Concert,</p> 
          <p className="inline-block italic"> {content.upcomingConcert?.title} </p>
        </div>

        <div className="flex flex-row gap-16 justify-center item-start my-9">
          <img 
          src={ content.upcomingConcert?.poster?.url } 
          alt={ content.upcomingConcert?.poster?.alt }
          className="w-80 h-auto mr-4 border-2 border-[#602c0f] rounded-md mt-0" />
          <div className="w-96 text-xs text-left mt-0 pt-0">
            <p className="mt-0 pt-0"> {content.upcomingConcert?.description} </p>

            <hr className="border-t-[1.5px] border-[#602c0f] mt-12" />
          </div>
        </div>
        
      </section>
    );
  };
  
export default UpcomingConcert;