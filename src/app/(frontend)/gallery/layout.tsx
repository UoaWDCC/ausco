import type { ReactNode } from "react";

// Shared content/styling for gallery pages
export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <section className="bg-(--cream)">{children}</section>;
}
