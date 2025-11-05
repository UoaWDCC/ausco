import Header from "@components/global/Header";
import LandingPage from "@components/concerts/LandingPage";
import { getHeader } from "@/actions/getHeader";

export default async function Concerts() {
  const headerContent = await getHeader();

  return (
    <>
      <Header content={headerContent} />
      <LandingPage />
    </>
  );
}
