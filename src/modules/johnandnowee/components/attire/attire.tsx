import './styles/styles.scss';
import '../../styles/special.scss';
import Image from 'next/image';
import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';

type propType = {
  client: string;
};

const Attire = ({ client }: propType) => {
  return (
    <section id='attire'>
      <Image className='opacity' style={{ position: 'absolute', top: 0, left: '-15rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`} src={`/img/${client}/leaf/1.png`} alt={''} width={500} height={500} />
      <Image className='opacity' style={{ position: 'absolute', top: '20%', right: '-1rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 644))}`} src={`/img/${client}/leaf/2.png`} alt={''} width={200} height={644} />
      <Image className='opacity' style={{ position: 'absolute', top: '40%', left: '-7rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(325, 500))}`} src={`/img/${client}/leaf/3.png`} alt={''} width={325} height={500} />
      <Image className='opacity' style={{ position: 'absolute', top: '60%', right: '-1rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 400))}`} src={`/img/${client}/leaf/4.png`} alt={''} width={200} height={400} />
      {/* <Image className='opacity' style={{ position: 'absolute', bottom: 0, left: '-15rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`} src={`/img/${client}/leaf/1.png`} alt={''} width={500} height={500} /> */}
      <div className='attireLayout'>
        <div className='details'>
          <h2>Attire</h2>
          <div className='desc'>
            <p style={{ fontWeight: 700 }}>STRICTLY FORMAL</p>
            <p>
              <span style={{ fontWeight: 700 }}>MALE:</span> For the event, please wear a black suit paired with a tie that matches the given color palette. This will ensure a cohesive and elegant look for the event.
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>FEMALE:</span> For the event, please wear garden cocktail attire. This includes midi to long formal dresses. Florals or pastel pink, blue, and yellow shades from the color palette are highly encouraged. Kindly avoid wearing stilettos. Instead, opt for garden-appropriate heels, which are more suitable for outdoor terrain and will ensure your comfort throughout the celebration.
            </p>
          </div>
        </div>
        <div className='outfit'>
          <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(298, 288))}`} src={`/img/${client}/attire/1.png`} alt={''} width={298} height={288} />
          <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(298, 288))}`} src={`/img/${client}/attire/2.png`} alt={''} width={298} height={288} />
          <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(298, 288))}`} src={`/img/${client}/attire/3.png`} alt={''} width={298} height={288} />
          <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(298, 288))}`} src={`/img/${client}/attire/4.png`} alt={''} width={298} height={288} />
        </div>
      </div>
    </section>
  );
};

export default Attire;
