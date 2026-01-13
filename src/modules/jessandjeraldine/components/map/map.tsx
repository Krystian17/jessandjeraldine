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
    <section id='map'>
      <div className='attireLayout'>
        <div className='details'>
          <h2>The Road to Happily Ever After</h2>
        </div>
        <div className='outfit'>
            <Image
            src={`/img/${client}/map.png`}
            width={2120}
            height={1831}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(233, 292))}`}
            style={{ width: '100%', maxHeight: '100%', height: '100%' }}
            alt=''
            />
        </div>
      </div>
    </section>
  );
};

export default Attire;
