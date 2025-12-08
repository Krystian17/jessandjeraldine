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
    <section id='accommodation'>
      <Image
        className='opacity'
        style={{ position: 'absolute', top: 0, left: '-15rem', zIndex: '-10' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
        src={`/img/${client}/leaf/1.png`}
        alt={''}
        width={500}
        height={500}
      />
      <Image
        className='opacity'
        style={{ position: 'absolute', top: '20%', right: '-1rem', zIndex: '-10' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 644))}`}
        src={`/img/${client}/leaf/2.png`}
        alt={''}
        width={200}
        height={644}
      />
      <Image
        className='opacity'
        style={{ position: 'absolute', top: '40%', left: '-7rem', zIndex: '-10' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(325, 500))}`}
        src={`/img/${client}/leaf/3.png`}
        alt={''}
        width={325}
        height={500}
      />
      <Image
        className='opacity'
        style={{ position: 'absolute', top: '60%', right: '-1rem', zIndex: '-10' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 400))}`}
        src={`/img/${client}/leaf/4.png`}
        alt={''}
        width={200}
        height={400}
      />
      <Image
        className='opacity'
        style={{ position: 'absolute', bottom: 0, left: '-15rem', zIndex: '-10' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
        src={`/img/${client}/leaf/1.png`}
        alt={''}
        width={500}
        height={500}
      />
      <div className='accommodationLayout'>
        <h2>Accommodation</h2>

        <div className='info'>
          <div className='desc'>
            <p>
              To make your stay as comfortable and hassle-free as possible, we highly recommend
              booking your accommodations at the
              <span style={{ fontWeight: 700 }}> Eugenio Lopez Center.</span>
            </p>
            <p>
              To secure your room, please mention that your reservation is for the
              <span style={{ fontWeight: 700 }}> Carreon-Ronquillo Wedding. </span>
              This will help the hotel staff make the appropriate arrangements and ensure that you
              are placed within our wedding block. We kindly encourage you to book as early as
              possible to guarantee availability and to make your experience as smooth as possible.
            </p>
          </div>

          <div className='hotelinfo'>
            <p className='head'>Hotel Information</p>
            <div className='descInfo'>
              <p style={{ fontWeight: 700 }}>Eugenio Lopez Center</p>
              <p>
                Address: Sumulong Hi-way, Antipolo, Philippines 1870
                <br />
                Reservations: 09175156218
                <br />
                Email Address: elcsales@fprc.com.ph
              </p>
            </div>
            <div className='descInfo'>
              <p style={{ fontWeight: 700 }}>Room Categories</p>
              <p>
                Peak Season Rates (Nov 1- Dec 29)
                <br />
                Weekday rates:
                <br />
                Deluxe Room: PHP 5,300.00 (good for 2 pax)
                <br />
                Executive Room: PHP 6,575.00 (good for 3 pax)
                <br />
                Extra Bed: PHP 1,275.00
              </p>
            </div>
            <div className='reserveInfo'>
              <div className='inclusions'>
                <p style={{ fontWeight: 700 }}>Inclusions</p>
                <div className='inclusionDesc'>
                  <p>
                    Rooms are inclusive of breakfast
                    <br />
                    Extra person will be charged at PHP 1,275.00 per night inclusive of breakfast
                    <br />
                    Rates are inclusive of service charge and applicable fees.
                  </p>
                  <p>
                    <span style={{ fontWeight: 700 }}>For reservations,</span> kindly send the
                    following details to 09175156218 (Viber) and to elcsales@frpc.com.ph
                  </p>
                </div>
              </div>
              <p>
                Full Name:
                <br />
                Full name of your room companions:
                <br />
                Contact Number:
                <br />
                Email Address:
                <br />
                Type of Room:
                <br />
                Check in Date:
                <br />
                Check out Date:
                <br />
                Complete Address:
              </p>
            </div>
            <div className='alternative'>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Alternative Accommodations for Guests (Near the Wedding Venue):
              </p>
              <div className='alternativeInfo'>
                <Link href={'https://www.altaroca.com.ph/'} style={{textDecorationColor:'#2C5A44' }}>
                  <p style={{ fontWeight: 700 }}>Alta Roca Mountain Resort Antipolo </p>
                </Link>
                <p>
                  Address: Taktak Road, Bankers Village, Brgy. Sta. Cruz, Antipolo City, Philippines
                  <br />
                  Email Address: reservations@altaroca.com.ph
                  <br />
                  Contact numbers: +63 917 541 2626 / +63 917 704 2636
                </p>
              </div>

              <div className='resort'>
                <div className='resortInfo'>
                  <Link href={'https://www.leblanc.com.ph/'} style={{textDecorationColor:'#2C5A44' }}>
                    <p style={{ fontWeight: 700 }}>Le Blanc Hotel and Resort</p>
                  </Link>
                  <p>
                    Address: 3 Taktak Rd, Antipolo, 1870 Rizal
                    <br />
                    Room Reservations (24/7): (02) 8518 9303 / 09171509011
                  </p>
                </div>
                <p>
                  For the alternative accommodations listed, please be aware that no reserved room
                  blocks have been arranged. As such, guests are encouraged to book their rooms
                  individually at their convenience. We recommend securing your accommodations as
                  soon as possible to ensure availability during this special time.
                  <br /> <br />
                  Should you have any questions or need assistance, feel free to reach out to us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
