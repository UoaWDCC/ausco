import type { ReactNode } from "react";

// Shared content/styling for gallery pages
export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-(--cream) min-h-screen text-(--navy)">
      <main className="w-full max-w-6xl mx-auto pt-44 px-6 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
