import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import auscoLogo from "../../assets/ausco-logo-1.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around items-center h-48">
        <div className="flex items-center">
          <div>
            <Image src={auscoLogo} alt="AUSCO logo" width={130} height={200} />
          </div>
          <div className="flex flex-col h-24 justify-evenly">
            <div className="w-36 font-bold">Auckland University Chamber Orchestra Inc.</div>
            <div className="flex justify-between">
              <Facebook />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">Documents</div>
          <p>Proof of Registration</p>
          <p>Constitution</p>
        </div>
        <div>
          <div className="font-bold">Join us</div>
          <p>Sign up form</p>
        </div>
        <div>
          <div className="font-bold">Reach out to us</div>
          <p>chamberorchestra.ausa@gmail.com</p>
          <p>Feedback form</p>
          <p>Engage Page</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
