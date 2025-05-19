import { getFooter } from "@/actions/getFooter";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import auscoLogo from "../../assets/ausco-logo-1.png";
import spotifyLogo from "../../assets/spotify-logo.svg";
import config from "@/payload.config";

const Footer = async () => {
  const [payloadConfig, content] = await Promise.all([config, getFooter()]);

  return (
    <footer>
      <div className="flex justify-between px-8 pt-16 lg:px-16 items-top h-56">
        <div className="flex items-top">
          <div className="h-24">
            <Image src={auscoLogo} alt="AUSCO logo" width={130} height={200} />
          </div>
          <div className="flex flex-col h-24 justify-evenly gap-1">
            <div className="w-50 font-bold mb-2 text-2xl lg:text-xl">{content.title}</div>
            <div className="flex gap-2">
              <Instagram width={20} height={20} />
              <Facebook width={20} height={20} />
              <Image src={spotifyLogo} alt="spotifyLogo" width={20} height={20} />
              <Youtube width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="flex items-top justify-between">
          {content.sections?.map((section, secId) => (
            <div key={secId} className="w-60 flex flex-col">
              <h3 className="font-bold mb-1.5">{section.title}</h3>
              {section.links?.map((link, linkId) => (
                <a
                  key={linkId}
                  href={link.url}
                  className="relative inline-block text-sm mb-1 w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
