import Image from 'next/image';
import '../../styles/special.scss';
import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Suspense } from 'react';
import { Timeline } from '../../lib/timeline';

import './styles/styles.scss';
import Time from './time';

type propType = {
  client: string;
};

const Location = ({ client }: propType) => {
  const fontsize = '1.25rem';
  return (
    <section
      id='weddingtimeline'
      style={{
        position: 'relative',
        padding: '7rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '1.5rem'
          }}>
          <h2>Wedding Timeline</h2>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: '40rem',
            width: '100%',
            alignItems: 'center',
            alignSelf: 'stretch',
            margin: 'auto'
          }}>
          <Time client={client} />
        </div>
      </div>
    </section>
  );
};

export default Location;

{
  /* <VerticalTimelineElement visible className='vertical-timeline-element--work' contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
  <h3 className='vertical-timeline-element-title'>Creative Director</h3>
  <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
  <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
</VerticalTimelineElement>; */
}
