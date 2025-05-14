import React from "react";
import "./styles.css";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";

export const fraunces = Fraunces({ subsets: ["latin"] });
export const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
