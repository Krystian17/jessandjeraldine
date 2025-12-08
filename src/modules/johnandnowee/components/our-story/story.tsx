import './styles/styles.scss';
import '../../styles/special.scss';
import Image from 'next/image';
import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';

type propType = {
  client: string;
};

const OurStory = ({ client }: propType) => {
  return (
    <section id='ourstory'>
      <Image className='opacity' style={{ position: 'absolute', top: 0, left: '-15rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`} src={`/img/${client}/leaf/1.png`} alt={''} width={500} height={500} />
      <Image className='opacity' style={{ position: 'absolute', top: '20%', right: '-1rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 644))}`} src={`/img/${client}/leaf/2.png`} alt={''} width={200} height={644} />
      <Image className='opacity' style={{ position: 'absolute', top: '40%', left: '-7rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(325, 500))}`} src={`/img/${client}/leaf/3.png`} alt={''} width={325} height={500} />
      <Image className='opacity' style={{ position: 'absolute', top: '60%', right: '-1rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 400))}`} src={`/img/${client}/leaf/4.png`} alt={''} width={200} height={400} />
      <Image className='opacity' style={{ position: 'absolute', bottom: 0, left: '-15rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`} src={`/img/${client}/leaf/1.png`} alt={''} width={500} height={500} />

      <div className='ourstoryLayout'>
        <h2>A Love That Overcame Distance: John and Nowee’s Journey</h2>
        <p>
          John and Nowee’s story began in their early teenage years, rooted in their shared church community and circle of friends. In 2011, John migrated to the United States but kept in close contact with Nowee, maintaining their strong friendship. Unbeknownst to Nowee, John had been praying for her for about a year before they met again in person in mid-2014, when John flew home to Manila. From that moment on, their lives were intertwined in ways they could have never anticipated. Their bond
          deepened over months of conversations and time spent together, both in person and online. In July of 2014, after much prayer, John, with a heart full of faith and courage, expressed his feelings to Nowee, asking her to pray about entering into a Christ-centered relationship with him, grounded in God’s goodness and grace. After seeking God’s guidance and blessing, <span style={{fontWeight: 700}} >John and Nowee officially became a couple on October 7, 2014</span>.
        </p>
        <div className='embrace'>
          <p className='head'>Embracing the Challenges, Celebrating the Victories</p>
          <Image src={`/img/${client}/story/1.png`} className='imagePeople' placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(684, 457))}`} width={684} height={457} alt='' />
          <p>{`From that moment, John and Nowee both knew that their journey was far from easy. Distance was their greatest challenge, especially in the early years of their relationship. Back then, technology wasn’t as advanced as it is today. Their love story thrived back then with Yahoo! Messenger, Blackberry Messenger, and Skype, evolving through various means of communication despite the physical miles between them. John and Nowee’s journey through the years was filled with obstacles, rough patches, lockdowns, closed borders, trials, numerous plane rides, airport tears and goodbyes, and the relentless toll of being apart. Through it all, their love continually grew deeper with each challenge they faced. God's love and grace enabled John and Nowee to persevere, strive, and fight for their love, no matter the situation, cost, or distance.`}</p>
        </div>
        <div className='embrace'>
          <Image src={`/img/${client}/story/2.png`} className='imagePeople' placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(684, 457))}`} width={684} height={457} alt='' />
          <div>
            <p>
              <span style={{fontWeight:700}}>For 10 years</span>, their love persevered, withered storms, thrived and grew even stronger, making their special day even sweeter. Despite the physical miles, John and Nowee found creative ways to maintain their bond. They shared virtual dates, sent each other care packages, sent millions of text messages, and made countless audio and video calls, ensuring their connection remained strong. Every reunion at the airport was a joyous occasion, filled with laughter and buckets of happy
              tears, making every moment together all the more precious. They learned to communicate effectively, trust each other implicitly, and support one another unconditionally. Every obstacle they overcame was a testament to their resilience and dedication to each other.
            </p>
            <p style={{ fontWeight: 700, fontStyle: 'italic' }}>As John always says, “Nowee is always worth it”. </p>
          </div>
        </div>
        <div className='beginning'>
          <p className='head'>A Beautiful Beginning</p>
          <Image src={`/img/${client}/story/3.png`} className='imageBegin' placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(684, 847))}`} width={684} height={847} alt='' />

          <div className='beginningText'>
            <p>
              As John and Nowee prepare to embark on this new chapter of their lives, they both reflect on their journey both with thankfulness and with gratitude. They are grateful for the blessings and the great things that God hath done, and for the trials that strengthened their bond and the love that sustained them. Their relationship, built on a foundation of faith, trust, and unwavering commitment for each other, is a beautiful example of enduring love – a love only made possible by God’s
              goodness and grace.
            </p>
            <p style={{ fontStyle: 'italic', width: '100%' }}>
             <span style={{ fontStyle: 'normal' }}> As the lyrics of one of John and Nowee’s favorite worship songs go,</span>
             <br/>
              <br /> And all my life You have been faithful
              <br />
              And all my life You have been so, so good <br />
              With every breath that I am able
              <br /> Oh, I will sing of the goodness of God
            </p>
            <p>
              {`John and Nowee both know that they would not be here without His goodness, His strength, and His guidance, and their story is a powerful reminder of the enduring power of love, of faith, and of God. They both look forward to a future filled with endless possibilities, knowing that together, with God on their side, they can face anything. Their story is not just about surviving the distance; it's about thriving in love, growing in faith, and celebrating the incredible journey that
              brought them to this moment.`}
            </p>
            <p style={{ fontWeight: 700 }}>Their story is a testament to the power of love and faith, showing that true love can conquer any distance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
