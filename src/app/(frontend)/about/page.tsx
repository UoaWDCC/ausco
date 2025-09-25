import Header from "@components/home/Header";
import HeroSection from "@components/about/HeroSection";
import AboutUsCard from "@components/about/AboutUsCards";
import { getHeader } from "@/actions/getHeader";
import Footer from "@components/home/Footer";

const headerContent = await getHeader();

export default async function AboutPage() {
  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <AboutUsCard />
      <Footer />
    </>
  );
}
