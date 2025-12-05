import React from "react";
import { Fraunces } from "next/font/google";

import Header from "@components/global/Header";
import Footer from "@components/global/Footer";

import { getHeader, getFooter, getSiteSetting } from "@/actions/globalActions";

import "./styles.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Auckland University Student Chamber Orchestra",
  description: "A blank template using Payload in a Next.js app.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [headerContent, footerContent, siteSettingContent] = await Promise.all([
    getHeader(),
    getFooter(),
    getSiteSetting(),
  ]);

  const combinedHeaderContent = {
    ...headerContent,
    primaryLogo: siteSettingContent.primaryLogo,
    secondaryLogo: siteSettingContent.secondaryLogo,
  };
  const combinedFooterContent = {
    ...footerContent,
    primaryLogo: siteSettingContent.primaryLogo,
    socialMedia: siteSettingContent.links,
  };

  return (
    <html lang="en" className={fraunces.variable}>
      <body className={fraunces.className}>
        <Header content={combinedHeaderContent} />
        <main>{children}</main>
        <Footer content={combinedFooterContent} />
      </body>
    </html>
  );
}
