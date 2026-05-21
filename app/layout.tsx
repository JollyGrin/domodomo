import type { Metadata } from "next";
import "./globals.css";
import VersionSwitcher from "@/components/VersionSwitcher";

export const metadata: Metadata = {
  title: "Domo Domo — Karaage. Fries. Coleslaw. Eindhoven.",
  description:
    "Domo Domo is a Japanese fast-casual popup in Eindhoven serving karaage, hand-cut fries and Japanese coleslaw. Friday, Saturday & Sunday only.",
};

const fontLinks = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Bowlby+One&family=Caveat:wght@500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,800;1,9..144,400&family=JetBrains+Mono:wght@400;500;700&family=Manrope:wght@300;400;500;700;800&family=Shippori+Antique&family=Big+Shoulders+Display:wght@700;900&family=Inter+Tight:wght@400;500;700&family=DM+Mono:wght@400;500&family=Anton&display=swap"
      rel="stylesheet"
    />
  </>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{fontLinks}</head>
      <body>
        <VersionSwitcher />
        {children}
      </body>
    </html>
  );
}
