import React from "react";
import "./styles.css";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });
const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className={`${schibstedGrotesk.variable} ${fraunces.className}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
