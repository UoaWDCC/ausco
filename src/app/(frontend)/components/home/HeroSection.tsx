import { getLandingPage } from "@/actions/getLandingPage";
import { getAllTest } from "@/actions/getTest";
import config from "@/payload.config";

import {Button} from "../ui/button";
/*import logo from "../../assets/ausco-logo-1.png";*/
import heroImage from "../../assets/hero.jpg";

const HeroSection = async () => {
    const [payloadConfig, content, testItems] = await Promise.all([
        config,
        getLandingPage(),
        getAllTest(),
    ]);

    return (
      <div className="relative bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat bg-bottom bg-center overflow-hidden h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] z-10">
      <div className="relative z-20 home">
      <div className="content gap-8">
        {content && (
          <>
            <h1>{content.header.title}</h1>
            <h3>{content.header.content}</h3>
          </>
        )}
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
        </div>
        <div className="flex gap-4">
          {testItems.map((item, i) => (
            <div key={i} className="bg-white text-black p-2 rounded px-4">
              <h3>{item.title}</h3>
              <hr />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Button>Click me</Button>
      </div>
    </div>
    </div>
    </div>
    );
  };
  
export default HeroSection;