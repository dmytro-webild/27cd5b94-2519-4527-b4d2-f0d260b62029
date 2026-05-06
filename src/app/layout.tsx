import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Fast & Affordable Phone Repair in Surrey BC | CellFix Solutions',
  description: 'Professional mobile phone repair in Surrey. Screen repair, battery replacement, and more. 500+ 5-star reviews. Fast, reliable, and affordable.',
  keywords: ["phone repair Surrey, iPhone repair near me, screen repair Surrey BC, Samsung repair, mobile repair"],
  openGraph: {
    "title": "Fast & Affordable Phone Repair in Surrey BC | CellFix Solutions",
    "description": "Get your phone repaired today. Same-day service, 4.7-star rating.",
    "siteName": "CellFix Solutions",
    "type": "website"
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
