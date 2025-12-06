import { useQuery } from '@tanstack/react-query';

const products = [
  {
    id: 1,
    name: '3D Printed Vase',
    href: '/products/1',
    imageSrc: '1.jpg',
    imageAlt: 'A 3D printed vase.',
    price: '$48',
  },
  {
    id: 2,
    name: 'Customizable Phone Stand',
    href: '/products/2',
    imageSrc: '2.jpg',
    imageAlt: 'A customizable phone stand.',
    price: '$35',
  },
  {
    id: 3,
    name: 'Miniature Figurines',
    href: '/products/3',
    imageSrc: '3.jpg',
    imageAlt: 'A collection of miniature figurines.',
    price: '$89',
  },
  {
    id: 4,
    name: 'Architectural Model',
    href: '/products/4',
    imageSrc: '4.jpg',
    imageAlt: 'An architectural model of a building.',
    price: '$250',
  },
];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};


export const useProducts = () => {
  return useQuery({ queryKey: ['products'], queryFn: getProducts });
};
