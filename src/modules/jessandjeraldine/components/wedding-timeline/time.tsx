import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

type propType = {
  client: string;
};

const Time = ({ client }: propType) => {
  return (
    <VerticalTimeline animate={false} className='timelineLineCustom'>
      <VerticalTimelineElement
        position={'right'}
        visible
        className='vertical-timeline-element--work timeline-content'
        contentStyle={{ background: 'transparent', boxShadow: 'none' }}
        contentArrowStyle={{ borderRight: '0px solid  #C06218' }}
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          height: '1rem',
          width: '1rem',
          boxShadow: 'none',
          margin: 0,
          color: '#fff'
        }}>
        <Image className='timeline-pic' src={`/img/jessandjeraldine/1.png`} alt='flower' width={300} height={300} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(204, 204))}`} />
        <div className='timeline-desc' style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#ffffff'
            }}>
            12:00 NN
          </p>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',

              color: '#ffffff'
            }}>
            Ceremony
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        position={'left'}
        visible
        className='vertical-timeline-element--work timeline-content'
        contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#000' }}
        contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          height: '1rem',
          width: '1rem',
          boxShadow: 'none',
          margin: 0,
          color: '#fff'
        }}>
        <Image className='timeline-pic' src={`/img/${client}/2.png`} alt='flower' width={204} height={204} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(204, 204))}`} />
        <div className='timeline-desc' style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#ffffff'
            }}>
            2:30 PM
          </p>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',

              color: '#ffffff'
            }}>
            Pictorial
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        position={'right'}
        visible
        className='vertical-timeline-element--work timeline-content'
        contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#000' }}
        contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          height: '1rem',
          width: '1rem',
          boxShadow: 'none',
          margin: 0,
          color: '#fff'
        }}>
        <Image className='timeline-pic' src={`/img/${client}/3.png`} alt='flower' width={204} height={204} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(204, 204))}`} />
        <div className='timeline-desc' style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#ffffff'
            }}>
            3:30 PM
          </p>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',

              color: '#ffffff'
            }}>
            Cocktail Hour
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        position={'left'}
        visible
        className='vertical-timeline-element--work timeline-content'
        contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#000' }}
        contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          height: '1rem',
          width: '1rem',
          boxShadow: 'none',
          margin: 0,
          color: '#fff'
        }}>
        <Image className='timeline-pic' src={`/img/${client}/4.png`} alt='flower' width={204} height={204} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(204, 204))}`} />
        <div className='timeline-desc' style={{ display: 'flex', flexDirection: 'column' }}>
        <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#ffffff'
            }}>
            5:00 PM
          </p>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',

              color: '#ffffff'
            }}>
           Grand Entrance
          </p>
        </div>
      </VerticalTimelineElement>
            <VerticalTimelineElement
        position={'right'}
        visible
        className='vertical-timeline-element--work timeline-content'
        contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#000' }}
        contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          height: '1rem',
          width: '1rem',
          boxShadow: 'none',
          margin: 0,
          color: '#fff'
        }}>
        <Image className='timeline-pic' src={`/img/${client}/5.png`} alt='flower' width={204} height={204} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(204, 204))}`} />
        <div className='timeline-desc' style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#ffffff'
            }}>
            6:00 PM
          </p>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',

              color: '#ffffff'
            }}>
            Dinner
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        position={'left'}
        visible
        className='vertical-timeline-element--work timeline-content'
        contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#000' }}
        contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
        iconStyle={{
          background: 'rgb(0, 0, 0)',
          height: '1rem',
          width: '1rem',
          boxShadow: 'none',
          margin: 0,
          color: '#fff'
        }}>
        <Image className='timeline-pic' src={`/img/${client}/6.png`} alt='flower' width={204} height={204} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(204, 204))}`} />
        <div className='timeline-desc' style={{ display: 'flex', flexDirection: 'column' }}>
        <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#ffffff'
            }}>
            8:30 PM
          </p>
          <p
            style={{
              margin: 0,
              width: '100%',
              textWrap: 'nowrap',
              fontStyle: 'italic',

              color: '#ffffff'
            }}>
           After Party
          </p>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Time;
