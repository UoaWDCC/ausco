import React from "react";
import { Fraunces } from "next/font/google";
import { getHeader, getFooter } from "@/actions/globalActions";
import Header from "@components/global/Header";
import Footer from "@components/global/Footer";
import "./styles.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Auckland University Student Chamber Orchestra",
  description: "A blank template using Payload in a Next.js app.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [headerContent, footerContent] = await Promise.all([getHeader(), getFooter()]);

  return (
    <html lang="en" className={fraunces.variable}>
      <body className={fraunces.className}>
        <Header content={headerContent} />
        <main>{children}</main>
        {/* <Footer content={footerContent} /> */}
        <Footer />
      </body>
    </html>
  );
}
