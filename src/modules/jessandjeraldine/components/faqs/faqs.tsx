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
            title={<p style={{ fontWeight: 700 }}>What time should I arrive at your wedding ceremony?</p>}
            description={
              <p>
               We kindly suggest that guests arrive at 12NN to give you an ample time to find your seat and settle in before the ceremony.
              </p>
            }
          />
          <Accordion
            title={
              <p style={{ fontWeight: 700 }}>Am I allowed to bring a plus one?</p>
            }
            description={
              <p>
              Our wedding is strictly invitation only. If you have a plus one indicated on your formal invitation, you are more than welcome to bring a plus one. Unfortunately, we cannot accommodate other extra guests
              due to venue capacity.
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Are children welcome?</p>}
            description={
              <p>
              While we love your children, we are having an adults -only reception.
              The only children in attendance will be our wedding entourage members.
              </p>
            }
          />
          <Accordion
            title={<p style={{ fontWeight: 700 }}>Is there someone I can contact if I have other questions?</p>}
            description={
              <p>
              You may directly contact the bride and groom. However, you may also contact our representatives in the Philippines in case we are not available.
              Janelle Quianzon (09190868185) | Maria Jesylou Apilado (09155770064)
              </p>
            }
          />
          <Accordion
            title={
              <p style={{ fontWeight: 700 }}>What happens if I don't RSVP?</p>
            }
            description={
              <p>
              We kindly ask guests to RSVP on or before January 14, 2026. We’d love to celebrate with you! If we do not receive your RSVP, we will assume you are unable to attend.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
