import HomePage from "@/modules/home/pages/home";
import { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunitosans = Nunito_Sans({
  display: 'swap',
  subsets: ["latin"], //Leave as is!
  variable: "--font-nunitosans", // 2. Name of the font to call from css
  weight: ["400", "700"], // (OPTIONAL) Sometimes you have to add this when error occurs
  preload: true,
  adjustFontFallback: false,
});


const BaseSettings = {
  baseUrl: "https://www.startswithletter.rsvp/",
  testURL: 'http://localhost:3000',
  client: "home",
};

const MetaTag = {
  title: "Starts With Letter",
  siteName: "StartsWithLetter",
  description: "September 04, 2023",
  ogDescription: "September 04, 2023",
  icon: `/favicon.ico`,
  url: `${BaseSettings.baseUrl}`,
  image: `/og-image.jpg`,
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



export default function Home() {
  return <HomePage font={nunitosans} />;
}
