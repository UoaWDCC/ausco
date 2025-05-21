import { getLandingPage } from "@/actions/getLandingPage";
import { getAllTest } from "@/actions/getTest";
import config from "@/payload.config";

import { Button } from "../ui/button";

const HeroSection = async () => {
  const [payloadConfig, content, testItems] = await Promise.all([
    config,
    getLandingPage(),
    getAllTest(),
  ]);

  return (
    <div className="home ">
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
  );
};

export default HeroSection;
