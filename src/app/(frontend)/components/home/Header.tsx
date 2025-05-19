"use client";
import Image from "next/image";
import auscologo from "../../assets/ausco-logo-1.png";
const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-6 pr-12 pl-12">
        <div className="flex items-center space-x-4">
          <Image src={auscologo} alt="AUSCO logo" width={60} height={60} />
          <span className="text-lg font-medium">
            Auckland University <br />
            Student Chamber Orchestra Inc.
          </span>
        </div>
        <div className="flex items-center gap-12">
          <button className="text-sm">About Us</button>
          <button className="text-sm">Our People</button>
          <button className="text-sm">Concerts</button>
          <button className="text-sm">Gallery</button>
          <button className="text-sm">Contact Us</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
