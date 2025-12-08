import { Open_Sans, Playfair_Display } from "next/font/google";
import RSVPMain from "@/modules/openform/main";
import { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"], //Leave as is!
  variable: "--font-playfair", // 2. Name of the font to call from css
  preload: true,
});

const opensans = Open_Sans({
  subsets: ["latin"], //Leave as is!
  variable: "--font-opensans", // 2. Name of the font to call from css
  preload: true,
});

const BaseSettings = {
  baseUrl: "https://www.startswithletter.rsvp/",
  client: "krysandshar",
};

const MetaTag = {
  title: "Krystian and Shar – Wedding Website",
  siteName: "StartsWithLetter",
  description: "September 04, 2023",
  ogDescription: "September 04, 2023",
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
  return (
    <RSVPMain BaseSettings={BaseSettings} header={playfair} body={opensans} />
  );
}
