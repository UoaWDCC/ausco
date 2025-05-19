import { getLandingPage } from "@/actions/getLandingPage";
import { getAllTest } from "@/actions/getTest";
import config from "@/payload.config";
import Header from "@components/home/Header";

import {Button} from "../ui/button";
import logo from "../../assets/ausco-logo-1.png";
import { ArrowUpRight } from 'lucide-react';

const HeroSection = async () => {
    const [payloadConfig, content, testItems] = await Promise.all([
        config,
        getLandingPage(),
        getAllTest(),
    ]);

    return (
      <div className="relative overflow-hidden h-screen">
        <Header />
      <div className="absolute inset-0 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] z-10"></div>
      <div className="relative z-20 home">
        <img src={logo.src} alt="AUSCO logo" className="w-1/3 h=auto"/>
      <div className="content gap-8">
        {content && (
          <>
            <h1>{content.header.title}</h1>
            <h3 className="text-center">{content.header.content}</h3>
          </>
        )}
        <Button className="w-28 py-6 bg-transparent text-[#f6f4ec] border-2 border-[#f6f4ec]">Join us<ArrowUpRight /></Button>
      </div>
    </div>
    </div>
    );
  };
  
export default HeroSection;