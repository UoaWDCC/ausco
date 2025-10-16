import Footer from "@/app/(frontend)/components/home/Footer";
import type { ReactNode } from "react";

//shared content/styling for gallery pages
export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-screen-2xl mx-auto px-6 py-10">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
