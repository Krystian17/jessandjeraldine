import { Open_Sans, Pinyon_Script, Playfair_Display } from "next/font/google";

import { Metadata } from "next";
import RSVPMain from "@/modules/johnandnowee/main";

const playfair = Pinyon_Script({
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
  client: "johnandnowee",
};

const MetaTag = {
  title: "John and Nowee – Wedding Website",
  siteName: "StartsWithLetter",
  description: "December 17, 2024",
  ogDescription: "December 17, 2024",
  icon: `/img/${BaseSettings.client}/favicon.ico`,
  url: `${BaseSettings.client}`,
  image: `/img/${BaseSettings.client}/og-image.jpg`,
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
