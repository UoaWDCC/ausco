import Header from "@/app/(frontend)/components/home/Header";
import Footer from "@/app/(frontend)/components/home/Footer";
import { getHeader } from "@/actions/getHeader";
import type { ReactNode } from "react";

//shared content/styling for gallery pages
export default async function GalleryLayout({ children }: { children: ReactNode }) {
  const header = await getHeader();
  return (
    <div>
      <Header content={header} isHomePage={false} />
      <div style={{ backgroundColor: "var(--beige)" }}>{children}</div>
      <Footer />
    </div>
  );
}
