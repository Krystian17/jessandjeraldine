'use client';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import Navigation from './components/navigation/navigation';
import { NavList } from '@/types/navlist';

import './styles/layout.scss';
import './styles/typography.scss';
import './styles/button.scss';
import './styles/input.scss';

import { Footer } from './components/footer/footer';
import HeroSection from './components/hero-section/hero-section';
import Invitation from './components/invitation/invitation';
import Attire from './components/attire/attire';
import UnpluggedCeremony from './components/unplugged-ceremony/unplugged-ceremony';
import WeddingTimeline from './components/wedding-timeline/wedding-timeline';
import Map from './components/map/map';
import RSVP from './components/rsvp/rsvp';
import Faqs from './components/faqs/faqs';



type propType = {
  header: NextFontWithVariable;
  body: NextFontWithVariable;
  BaseSettings: {
    baseUrl: string;
    client: string;
  };
};

const RSVPMain = ({ BaseSettings, header, body }: propType) => {
  const ClientName = BaseSettings.client;

  const navlist: NavList = [
    { name: 'Home', url: `/${ClientName}#home`, id: 'home' },
    { name: 'Invitation', url: `/${ClientName}#invitation`, id: 'invitation' },
    { name: 'Attire', url: `/${ClientName}#attire`, id: 'attire' },
    { name: 'Unplugged Ceremony', url: `/${ClientName}#unpluggedceremony`, id: 'unpluggedceremony' },
    { name: 'Wedding Timeline', url: `/${ClientName}#weddingtimeline`, id: 'weddingtimeline'},
    { name: 'Map', url: `/${ClientName}#map`, id: 'map' },
    { name: 'RSVP', url: `/${ClientName}#rsvp`, id: 'rsvp' },
    { name: 'FAQs', url: `/${ClientName}#faqs`, id: 'faqs' }
  ];

  return (
    <main className={`${header.variable} ${body.variable} mainlayout`}>
      <Navigation client={ClientName} navlist={navlist} />
      <HeroSection client={ClientName} />
      <Invitation client={ClientName} />
      <Attire client={ClientName} />
      <UnpluggedCeremony client={ClientName} />
      <WeddingTimeline client={ClientName} />
      <Map client={ClientName} />
      <RSVP client={ClientName} />
      <Faqs client={ClientName} />
      <Footer />
    </main>
  );
};

export default RSVPMain;
