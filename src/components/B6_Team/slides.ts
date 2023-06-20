import { svgIcons } from '../../assets/svgIcons';
import src0 from '../../assets/png/B6_Team/0.png';

export interface ISlide {
  src: string;
  name: string;
  job: string;
  description: string;
  socials: {
    icon: JSX.Element;
    href: string;
  }[];
}

export const slides: ISlide[] = [
  {
    src: src0,
    name: 'Alex SafeHaven',
    job: 'Strategy & Finance',
    description:
      'The lead developer and visionary of DHF, has extensive experience building on EVM-based blockchains. ',
    socials: [
      {
        icon: svgIcons.twitter_dark,
        href: '#',
      },
      {
        icon: svgIcons.instagram,
        href: '#',
      },
    ],
  },
  {
    src: src0,
    name: 'Oliver Sakov',
    job: 'Engineering',
    description:
      'Is a analyst and trader with an in-depth understanding of the financial markets.',
    socials: [
      {
        icon: svgIcons.instagram,
        href: '#',
      },
    ],
  },
  {
    src: src0,
    name: 'Ryder SafeHaven',
    job: 'Founder',
    description:
      'With years of experience, he serves as the operations manager, handling a diverse range of responsibilities.',
    socials: [
      {
        icon: svgIcons.twitter_dark,
        href: '#',
      },
      {
        icon: svgIcons.instagram,
        href: '#',
      },
    ],
  },
  {
    src: src0,
    name: 'Vitaliy Klichko',
    job: 'Business Development',
    description:
      'Crypto Designer is a talented designer with a passion for creating innovative visuals',
    socials: [
      {
        icon: svgIcons.twitter_dark,
        href: '#',
      },
      {
        icon: svgIcons.instagram,
        href: '#',
      },
      {
        icon: svgIcons.medium_dark,
        href: '#',
      },
    ],
  },
];
