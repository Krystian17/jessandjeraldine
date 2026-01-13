export const Timeline:TimelineType[] = [
  {
    time: "2:00 PM",
    description: "Gather around the Church Garden",
    image: "/t1.png",
    position: "right"
  },
  {
    time: "3:00 PM",
    description: "Wedding Ceremony (All doors shall be closed)",
    image: "/t2.png",
    position: "left"
  },
  {
    time: "4:00 PM",
    description: "Photo Session",
    image: "/t3.png",
    position: "right"
  },
  {
    time: "4:30 PM",
    description: "Cocktail Hour",
    image: "/t4.png",
    position: "left"
  },
  {
    time: "6:00 PM",
    description: "Reception & Wedding Banquet",
    image: "/t5.png",
    position: "right"
  },
  {
    time: "9:00 PM",
    description: "After Party",
    image: "/t6.png",
    position: "left"
  },
]


export type TimelineType = {
  time: string;
  description: string;
  image: string;
  position: 'left'| 'right'
}