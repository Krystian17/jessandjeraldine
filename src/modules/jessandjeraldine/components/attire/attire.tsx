import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';
import Image from 'next/image';

import './style/style.scss';

import '../../styles/special.scss';

type propType = {
  client: string;
};

const Attire = ({ client }: propType) => {
  const fontsize = '1rem';

  return (
    <section
      id={'attire'}
      style={{
        position: 'relative',
        padding: '7rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
      }}>

      <div className={'weddingLayout'}>
        <div className='attire'>
          <h2>1An Evening of Enchantment</h2>

            <p> To complete the magic of this enchanted evening, we invite our guests to dress in a style that reflects grace, beauty, and celebration. <br/><br/> <b>Wardrobe of Wonders: Strictly Formal Attire</b></p>
            <Image
            src={`/img/${client}/attire/ps.png`}
            width={463}
            height={522}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(233, 292))}`}
            style={{ width: 'auto', maxHeight: '20rem', height: '110%' }}
            alt=''
            />

           <p> <b>Principal Sponsors:</b> <br/>Ninong: Black Suit paired with champagne-colored tie <br/> Ninang: Formal Long Gown (Champagne Color) </p>
            <Image
            src={`/img/${client}/attire/g.png`}
            width={363}
            height={422}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(233, 292))}`}
            style={{ width: 'auto', maxHeight: '18.25rem', height: '100%' }}
            alt=''
            />

            <p> <b>Wedding Guests:</b> <br/>Gentlemen: Collared Long-sleeves and Slacks <br/> Ladies: Formal Long Gown <br/><br/> We encourage you to dress according to our chosen palette Strictly no black or white</p>

            <div className='palette'>
            <Image
              src={`/img/${client}/attire/1.png`}
              width={68}
              height={39}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(58, 29))}`}
              style={{ width: '4rem', height: '2.2rem' }}
              alt=''
            />
            <Image
              src={`/img/${client}/attire/2.png`}
              width={58}
              height={29}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(58, 29))}`}
              style={{ width: '4rem', height: '2.2rem' }}
              alt=''
            />
            <Image
              src={`/img/${client}/attire/3.png`}
              width={58}
              height={29}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(58, 29))}`}
              style={{ width: '4rem', height: '2.2rem' }}
              alt=''
            />
            <Image
              src={`/img/${client}/attire/4.png`}
              width={58}
              height={29}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(58, 29))}`}
              style={{ width: '4rem', height: '2.2rem' }}
              alt=''
            />
             <Image
              src={`/img/${client}/attire/5.png`}
              width={58}
              height={29}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(58, 29))}`}
              style={{ width: '4rem', height: '2.2rem' }}
              alt=''
            />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Attire;
