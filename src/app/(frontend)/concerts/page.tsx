import LandingPage from "@components/concerts/LandingPage";
import Header from "@components/home/Header"; 
import { getHeader } from "@/actions/getHeader";

export default async function Concerts() {
  return (
    <>
      <Header content={headerContent} />
      <LandingPage />
    </>
  );
}
