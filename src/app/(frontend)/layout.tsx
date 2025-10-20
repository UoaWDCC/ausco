import React from "react";
import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";
import { Fraunces } from "next/font/google";
import "./styles.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Auckland University Student Chamber Orchestra",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const headerContent = await getHeader();

  return (
    <html lang="en" className={fraunces.variable}>
      <body className={fraunces.className}>
        <Header content={headerContent} />
        <main>{children}</main>
      </body>
    </html>
  );
}
