import istanbul from '../assets/images/istanbul.png';
import antalya from '../assets/images/antalya.png';
import kapadokya from '../assets/images/kapadokya.png';
import alanya from '../assets/images/alanya.png';
import bodrum from '../assets/images/bordum.png';

const cityData = [
  {
    id: 1,
    name: 'Istanbul',
    image: istanbul,
    avgPrice: '120$',
    widthClass: 'w50', 
  },
  {
    id: 3,
    name: 'antalya',
    image: antalya,
    avgPrice: '90$',
    widthClass: 'w50',
  },
  {
    id: 2,
    name: 'Kapadokya',
    image: kapadokya,
    avgPrice: '140$',
    widthClass: 'w33',
  },
  {
    id: 4,
    name: 'alanya',
    image: alanya,
    avgPrice: '140$',
    widthClass: 'w33',
    size:'xl'
  },
  {
    id: 5,
    name: 'bodrum',
    image: bodrum,
    avgPrice: '120$',
    widthClass: 'w33',
  },
];

export default cityData;
