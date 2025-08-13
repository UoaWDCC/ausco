import PastConcerts from "@components/concerts/PastConcerts";
import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";

export default async function Past() {
  const headerContent = await getHeader();
  return (
    <>
      <Header content={headerContent} />
      <PastConcerts />
    </>
  );
}
