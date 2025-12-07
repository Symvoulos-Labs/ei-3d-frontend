import { useQuery } from '@tanstack/react-query';

// Mock products in the same shape as `Product` so consumers (HomePage, ProductPreviewModal)
// receive `images: ProductImage[]` and numeric `price` as expected.
const products = [
  {
    id: 1,
    name: '3D Printed Vase',
    href: '/products/1',
    price: 48,
    description: 'A beautiful and unique 3D printed vase.',
    images: [ { id: 1, src: '/1.jpg', alt: 'A 3D printed vase.' } ],
    category: 'Home Decor',
    material: 'PLA',
    color: 'White',
    weight: '250g',
    dimensions: '15cm x 15cm x 25cm',
  },
  {
    id: 2,
    name: 'Customizable Phone Stand',
    href: '/products/2',
    price: 35,
    description: 'A sleek and practical phone stand.',
    images: [ { id: 1, src: '/2.jpg', alt: 'A customizable phone stand.' } ],
    category: 'Gadgets',
    material: 'ABS',
    color: 'Black',
    weight: '150g',
    dimensions: '10cm x 8cm x 12cm',
  },
  {
    id: 3,
    name: 'Miniature Figurines',
    href: '/products/3',
    price: 89,
    description: 'A collection of detailed miniature figurines.',
    images: [ { id: 1, src: '/3.jpg', alt: 'A collection of miniature figurines.' } ],
    category: 'Hobbies',
    material: 'Resin',
    color: 'Gray',
    weight: '50g',
    dimensions: '5cm x 5cm x 8cm',
  },
  {
    id: 4,
    name: 'Architectural Model',
    href: '/products/4',
    price: 250,
    description: 'A detailed architectural model of a building.',
    images: [ { id: 1, src: '/4.jpg', alt: 'An architectural model of a building.' } ],
    category: 'Professional',
    material: 'PLA',
    color: 'White',
    weight: '1.5kg',
    dimensions: '30cm x 30cm x 20cm',
  },
];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
};

export const useProducts = () => {
  return useQuery({ queryKey: ['products'], queryFn: getProducts });
};
