import { ReactNode } from 'react';

type propType = {
  fill?: string;
  width?: number;
  height?: number;
};

const CircleDirectionalIcon = ({ fill,width,height }: propType): ReactNode => {
  return (
    <svg width={width ?? '50'} height={height ?? '50'} viewBox='0 0 50 50' fill={fill ?? 'none'} xmlns='http://www.w3.org/2000/svg'>
      <rect x='0.5' y='0.5' width='49' height='49' rx='24.5' stroke='white' />
      <path d='M26.1252 29.6931L32.1597 23.6586L33.7507 25.2495L25.0002 34L16.2498 25.2495L17.8408 23.6586L23.8752 29.6931V16H26.1252V29.6931Z' fill='white' />
    </svg>
  );
};

export default CircleDirectionalIcon;
