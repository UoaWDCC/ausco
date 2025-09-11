import React from "react";
import Header from "@components/home/Header";
import { getHeader } from "@/actions/getHeader";
import "./styles.css";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const headerContent = await getHeader();

  return (
    <html lang="en">
      <body>
        <Header content={headerContent} />
        <main>{children}</main>
      </body>
    </html>
  );
}
