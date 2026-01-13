import toBase64 from '@/components/base64';
import shimmer from '@/components/shimmer';
import { PeopleType } from '@/modules/johnandnowee/lib/entourage';
import Image from 'next/image';

type propType = {
  client: string;
  details: PeopleType;
};

const People = ({ client, details }: propType) => {
  return (
    <div className='people'>
      <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} className='imagePeople' src={`/img/${client}/entourage/${details.imagePath}`} alt={`${client}`} width={160} height={160} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.625rem',
          flex: '1 0 0'
        }}>
        <div className='posName'>
          <p style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{details.position}</p>
          <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>{details.name}</p>
        </div>
        <p style={{ fontSize: '1.125rem', fontWeight: 400 }}>{details.description}</p>
      </div>
    </div>
  );
};

export default People;
