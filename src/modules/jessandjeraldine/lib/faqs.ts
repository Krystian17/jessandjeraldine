export type FaqType = {
  title: string;
  description: string;
  description2?: string;
  description3?: string;
};

export const FaqList: FaqType[] = [
  {
    title: 'When and where is the wedding?',
    description: 'Our wedding will be held on Tuesday, December 17th, 2024. The ceremony will begin at 3:00 PM, followed by a cocktail hour and reception. The wedding ceremony and reception will both be held at Jardin De Miramar, located at 279 Buliran Road, Antipolo, Rizal, Philippines. We ask that you use the main entrance of the venue for easy access.'
  },
  {
    title: 'Can I bring plus one?',
    description: 'Our wedding is strictly invitation only. If you have a plus one indicated on your formal invitation, then you are welcome to bring a plus one! Unfortunately, we cannot accommodate other extra guests due to venue capacity.'
  },
  {
    title: 'Are kids invited?',
    description: 'Although we adore your little ones, we have decided to keep our wedding an adults-only event. The only exception will be the little ones in our bridal party/immediate family. We hope you understand and enjoy the night off!'
  },
  {
    title: 'Is there a dress code?',
    description: `Black Suit paired with a tie for the Gentlemen`,
    description2: 'Long Gown for the Ladies ',
    description3: 'We kindly encourage our favorite people to dress in our color palette on our special day.'
  }
];
