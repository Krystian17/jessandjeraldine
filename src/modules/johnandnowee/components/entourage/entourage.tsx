import { EntouragePeople } from '../../lib/entourage';
import People from './components/people';
import './styles/styles.scss';
import '../../styles/special.scss';
import Image from 'next/image';
import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';

type propType = {
  client: string;
};

const Entourage = ({ client }: propType) => {
  return (
    <section id='entourageparty'>
      <Image className='opacity' style={{ position: 'absolute', top: 0, left: '-15rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`} src={`/img/${client}/leaf/1.png`} alt={''} width={500} height={500} />
      <Image className='opacity' style={{ position: 'absolute', top: '20%', right: '-1rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 644))}`} src={`/img/${client}/leaf/2.png`} alt={''} width={200} height={644} />
      <Image className='opacity' style={{ position: 'absolute', top: '40%', left: '-7rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(325, 500))}`} src={`/img/${client}/leaf/3.png`} alt={''} width={325} height={500} />
      <Image className='opacity' style={{ position: 'absolute', top: '60%', right: '-1rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 400))}`} src={`/img/${client}/leaf/4.png`} alt={''} width={200} height={400} />
      <Image className='opacity' style={{ position: 'absolute', bottom: 0, left: '-15rem', zIndex: '-10' }} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`} src={`/img/${client}/leaf/1.png`} alt={''} width={500} height={500} />
      <div className='entourageLayout'>
        <h2>Entourage Party</h2>
        {EntouragePeople.map((details, index) => (
          <People details={details} key={index} client={client} />
        ))}
      </div>
    </section>
  );
};

export default Entourage;
