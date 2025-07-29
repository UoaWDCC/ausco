import Header from "@components/home/Header";
import LandingPage from "@components/concerts/LandingPage";
import { getHeader } from "@/actions/getHeader";

const headerContent = await getHeader();

export default async function Concerts() {
  return (
    <>
      <Header content={headerContent} />
      <LandingPage />
    </>
  );
}
