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
      <div className="flex justify-between px-8 lg:px-16 items-center h-56">
        <div className="flex items-top">
          <div className="h-24 mb-8">
            <Image src={auscoLogo} alt="AUSCO logo" width={130} height={200} />
          </div>
          <div className="flex mt-3 flex-col h-24 justify-evenly gap-1">
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
            <div key={secId} className="w-60">
              <h3 className="font-bold mb-1.5">{section.title}</h3>
              {section.links?.map((link, linkId) => (
                <a key={linkId} href={link.url} className="text-sm mb-1 block hover:underline">
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
