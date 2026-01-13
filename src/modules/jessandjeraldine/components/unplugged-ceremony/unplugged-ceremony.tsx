import './styles/styles.scss';

import '../../styles/special.scss';
import Image from 'next/image';
import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';
import Link from 'next/link';

type propType = {
  client: string;
};

const Accommodation = ({ client }: propType) => {
  return (
    <section id='unpluggedceremony'>
      <Image
        className='opacity'
        style={{ position: 'absolute', top: 10, left: '-1rem', zIndex: '1' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
        src={`/img/${client}/elem/left.png`}
        alt={''}
        width={231}
        height={444}
      />
      <Image
        className='opacity'
        style={{ position: 'absolute', top: '30%', right: '-1rem', zIndex: '1' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 644))}`}
        src={`/img/${client}/elem/right.png`}
        alt={''}
        width={209}
        height={462}
      />
      <div className='accommodationLayout'>
        <h2>!Unplugged Ceremony</h2>

        <div className='info'>
          <div className='desc'>
            <p> To preserve the intimacy and solemnity of our wedding, we kindly ask for all guests to keep
            their phones on silent and refrain from taking photos during the processional and ceremony.
            Your presence in the moment is the most cherished gift of all. <br/><br/>

            <b>Please keep the aisle clear during the bridal entrance.</b> <br/><br/>

            Once we are officially joined as husband and wife, you are welcome to capture and
            share the joy of our first magical moments together. <br/><br/>

            Please help us capture our special day by using the hashtag <br/>
            <b>#JERALDINEmadetherightJESSision</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
