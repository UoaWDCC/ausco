import React from "react";
import "./styles.css";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        data-new-gr-c-s-check-loaded="14.1235.0"
-       data-gr-ext-installed=""
        <main>{children}</main>
      </body>
    </html>
  );
}
