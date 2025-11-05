import Header from "@components/global/Header";
import HeroSection from "@components/about/HeroSection";
import AboutUsCards from "@components/about/AboutUsCards";
import { getHeader } from "@/actions/getHeader";
import Footer from "@components/global/Footer";

const headerContent = await getHeader();

export default async function AboutPage() {
  return (
    <>
      <Header content={headerContent} />
      <HeroSection />
      <AboutUsCards />
      <Footer />
    </>
  );
}
