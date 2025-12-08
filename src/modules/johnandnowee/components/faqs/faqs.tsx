import Accordion from '@/components/accordion/accordion';
import './styles/styles.scss';
import { FaqList } from '../../lib/faqs';

type propType = {
  client: string;
};

const Faqs = ({ client }: propType) => {
  return (
    <section id='faqs'>
      <div className='faqsLayout'>
        <h2>Frequently Asked Questions</h2>
        <div className='accordionContainer'>
          {/* {FaqList.map((item, index) => (
            <Accordion
              key={index}
              title={<p style={{ fontWeight:700 }}>{item.title}</p>}
              description={
                <p>
                  {item.description}
                  <br />
                  {item.description2}
                  <br />
                  {item.description3}
                </p>
              }
            />
          ))} */}
          <Accordion
            title={<p style={{ fontWeight: 700 }}>When and where is the wedding?</p>}
            description={
              <p>
                Our wedding will be held on Tuesday, December 17th, 2024. The ceremony will begin at
                3:00 PM, followed by a cocktail hour and reception. The wedding ceremony and
                reception will both be held at Jardin De Miramar, located at 279 Buliran Road,
                Antipolo, Rizal, Philippines. We ask that you use the main entrance of the venue for
                easy access.
              </p>
            }
          />
          <Accordion
            title={
              <p style={{ fontWeight: 700 }}>What time should I arrive at your wedding ceremony?</p>
            }
            description={
              <p>
                We kindly suggest arriving 15–20 minutes before the ceremony begins to ensure a
                smooth start. If you happen to arrive after the ceremony has started, we ask that
                you quietly make your way to the cocktail hour or reception area to avoid any
                disruptions. We appreciate your understanding and cooperation!
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Is there parking available?</p>}
            description={
              <p>
                Yes, there is ample parking available at the venue. There will be signs and
                attendants to guide you to the parking area.
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>What is the wedding dress code?</p>}
            description={
              <p>
                Our wedding dress code is strictly formal. Kindly follow the following guidelines:
                <br />
                <br />
                <span style={{ fontWeight: 700 }}>Men: </span>For the event, please wear a black
                suit paired with a tie that matches the given color palette. This will ensure a
                cohesive and elegant look for the event.
                <br />
                <br />
                <span style={{ fontWeight: 700 }}>Women: </span> For the event, please wear garden
                cocktail attire. This includes midi to long formal dresses. Florals or pastel pink,
                blue, and yellow shades from the color palette are highly encouraged. Kindly avoid
                wearing stilettos. Instead, opt for garden-appropriate heels, which are more
                suitable for outdoor terrain and will ensure your comfort throughout the
                celebration.
                <br />
                <br />
                We kindly request that guests avoid wearing colors traditionally reserved for the
                bride. These colors include white, ivory or cream.
              </p>
            }
          />
          <Accordion
            title={
              <p style={{ fontWeight: 700 }}>
                Is the wedding indoor or outdoor? What’s the weather like at that time of year?
              </p>
            }
            description={
              <p>
                Both the ceremony and the cocktail hour will be held outdoors, while the reception
                will take place indoors. December in Antipolo is typically a bit cool, but as
                weather can be unpredictable, we suggest preparing for both possibilities. Portable
                air-conditioning units will be available outside, but we recommend bringing a fan
                just in case it gets warmer than expected.
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Are children welcome?</p>}
            description={
              <p>
                While we love your little ones (specifically Mr. C), we have decided to keep our
                wedding an adults-only event. We hope this will allow everyone to relax and enjoy
                the evening. Enjoy the night off!
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Am I allowed to bring a plus one?</p>}
            description={
              <p>
                Our wedding is strictly invitation only. If you have a plus one indicated on your
                formal invitation, you are more than welcome to bring a plus one! Unfortunately, we
                cannot accommodate other extra guests due to venue capacity.
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Am I allowed to take photos at your wedding?</p>}
            description={
              <p>
                Of course! However, we kindly request that guests refrain from taking photos during
                the ceremony so that our professional photographers and videographers can capture
                these moments, and to ensure that all our guests are attuned to the program. Feel
                free to take photos during the reception!
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Is there a gift registry?</p>}
            description={
              <p>
                Your presence is the greatest gift we could ask for! However, if you desire to bless
                us with a gift, kindly refer to the gift guide found on your formal or digital
                invitation.
              </p>
            }
          />
          <Accordion
            title={
              <p style={{ fontWeight: 700 }}>
                Are there any local accommodations for out-of-town guests?
              </p>
            }
            description={
              <p>
                {`Please visit the "Accommodations" tab on our wedding website for a complete list of
                recommended hotels and places to stay for our traveling guests.`}
              </p>
            }
          />

          <Accordion
            title={
              <p style={{ fontWeight: 700 }}>
                I have more questions about your wedding, who can I contact?
              </p>
            }
            description={
              <p>
                We would be happy to help! You may connect with us using the following information:
                <br />
                <br />
                Email: jn.wed1224@gmail.com
                <br />
                Philippine-based guests: 0917 824-4153 (Nowee)
                <br />
                US-based guests: (909) 732-3988 (John)
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
