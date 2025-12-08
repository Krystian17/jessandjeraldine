'use client';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import Navigation from './components/navigation/navigation';
import { NavList } from '@/types/navlist';
import Invitation from './components/invitation/invitation';
import RSVP from './components/rsvp/rsvp';

import './styles/layout.scss';
import './styles/typography.scss';
import './styles/button.scss';
import './styles/input.scss';
import { Footer } from './components/footer/footer';
import HeroSection from './components/hero-section/hero-section';
import Entourage from './components/entourage/entourage';
import OurStory from './components/our-story/story';
import Attire from './components/attire/attire';
import Accommodation from './components/accommodation/accommodation';
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
    {
      name: 'Invitation',
      url: `/${ClientName}#invitation`,
      id: 'invitation'
    },
   // { name: 'Entourage Party', url: `/${ClientName}#entourageparty`, id: 'entourageparty' },
    { name: 'Our Story', url: `/${ClientName}#ourstory`, id: 'ourstory' },
    { name: 'Attire', url: `/${ClientName}#attire`, id: 'attire' },
    { name: 'Accommodation', url: `/${ClientName}#accommodation`, id: 'accommodation' },
    { name: 'RSVP', url: `/${ClientName}#rsvp`, id: 'rsvp' },
    { name: 'FAQs', url: `/${ClientName}#faqs`, id: 'faqs' }
  ];

  return (
    <main className={`${header.variable} ${body.variable} mainlayout`}>
      <Navigation client={ClientName} navlist={navlist} />
      <HeroSection client={ClientName} />
      <Invitation client={ClientName} />
      {/* <Entourage client={ClientName} /> */}
      <OurStory client={ClientName} />
      <Attire client={ClientName} />
      <Accommodation client={ClientName} />
      <RSVP client={ClientName} />
      <Faqs client={ClientName} />
      <Footer />
    </main>
  );
};

export default RSVPMain;
