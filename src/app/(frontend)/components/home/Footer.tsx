import { getFooter } from "@/actions/getFooter";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import spotifyLogo from "../../assets/spotify-logo.svg";
import config from "@/payload.config";
import { JSX } from "react";
import { Button } from "../ui/button";

const Footer = async () => {
  const [_payloadConfig, content] = await Promise.all([config, getFooter()]);

  const platformIconMap: Record<string, JSX.Element> = {
    facebook: <Facebook width={20} height={20} />,
    youtube: <Youtube width={20} height={20} />,
    spotify: <Image src={spotifyLogo} alt="spotifyLogo" width={20} height={20} />,
    instagram: <Instagram width={20} height={20} />,
  };

  return (
    <footer>
      <div className="flex justify-between px-8 pt-16 lg:px-16 items-top h-56">
        <div className="flex items-top gap-6">
          <div className="h-24 mt-2">
            {/* Prevents Next errors by checking image has a valid URL */}
            {typeof content.logo === "object" && typeof content.logo.url === "string" && (
              <Image src={content.logo.url} alt={content.logo.alt} width={86} height={144} />
            )}
          </div>
          <div className="flex flex-col h-24 justify-evenly gap-1">
            <div className="w-50 font-bold mb-2 text-2xl lg:text-xl">{content.title}</div>
            <div className="flex gap-3">
              {content.socials?.map((social, index) => (
                <a key={index} href={social.url}>
                  {platformIconMap[social.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-top justify-between">
          {content.sections?.map((section, secId) => (
            <div key={secId} className="w-60 flex flex-col">
              <h3 className="font-bold mb-1.5">{section.title}</h3>
              {section.links?.map((link, linkId) => (
                <Button key={linkId} variant="link" asChild>
                  <a href={link.url}>{link.label}</a>
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
