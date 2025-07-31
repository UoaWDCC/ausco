import { getComingSoon } from "@/actions/getComingSoon";
import ComingSoon from "@/app/(frontend)/components/concerts/ComingSoon";

export default async function Upcoming() {
  const data = await getComingSoon();
  
  return (
    <ComingSoon
      title={data.header?.title}
      description={data.header?.description}
      matineeData={data.matinee}
      concertData={data.concert}
    />
  );
}