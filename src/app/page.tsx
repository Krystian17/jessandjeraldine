import { Open_Sans, Pinyon_Script, Playfair_Display } from "next/font/google";

import { Metadata } from "next";
import RSVPMain from "@/modules/jessandjeraldine/main";

const playfair = Playfair_Display({
  subsets: ["latin"], //Leave as is!
  variable: "--font-header", // 2. Name of the font to call from css
  preload: true,
  weight: "400"
});
const opensans = Open_Sans({
  subsets: ["latin"], //Leave as is!
  variable: "--font-body", // 2. Name of the font to call from css
  preload: true,
});

const BaseSettings = {
  baseUrl: "https://www.startswithletter.rsvp/",
  client: "jessandjeraldine",
};

const MetaTag = {
  title: "Jess and Jeraldine – Wedding Website",
  siteName: "StartsWithLetter",
  description: "Febraury 14, 2026",
  ogDescription: "Febraury 14, 2026",
  icon: `/img/${BaseSettings.client}/favicon.ico`,
  url: `${BaseSettings.client}`,
  image: `https://www.jessandjeraldine.com/img/jessandjeraldine/og-image.jpg`,
  imageWidth: "1200",
  imageHeight: "600",
};

export const metadata: Metadata = {
  metadataBase: new URL(BaseSettings.baseUrl),
  title: MetaTag.title,
  description: MetaTag.description,
  icons: MetaTag.icon,
  openGraph: {
    title: MetaTag.title,
    description: MetaTag.ogDescription,
    siteName: MetaTag.siteName,
    type: "website",
    url: MetaTag.url,
    images: {
      url: MetaTag.image,
      width: MetaTag.imageWidth,
      height: MetaTag.imageHeight,
    },
  },
};


export default function Sample() {
  return <RSVPMain BaseSettings={BaseSettings} header={playfair} body={opensans} />;
}
