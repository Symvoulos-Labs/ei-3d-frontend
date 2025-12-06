export const products = [
  {
    id: 1,
    name: '3D Printed Vase',
    href: '/products/1',
    price: 48,
    description: 'A beautiful and unique 3D printed vase, perfect for adding a modern touch to your home decor. This vase is available in a variety of colors and materials.',
    images: [
      {
        id: 1,
        src: '1.jpg',
        alt: 'A 3D printed vase.',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?q=80&w=2070&auto=format&fit=crop',
        alt: 'Side view of the vase.',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop',
        alt: 'Top view of the vase.',
      },
    ],
    category: 'Home Decor',
    material: 'PLA',
    color: 'White',
    weight: '250g',
    dimensions: '15cm x 15cm x 25cm',
    reviews: [
      {
        id: 1,
        author: 'Emily S.',
        rating: 5,
        comment: 'Absolutely stunning! The quality is amazing and it looks perfect on my mantelpiece.',
      },
      {
        id: 2,
        author: 'John D.',
        rating: 4,
        comment: 'Great vase, but a little smaller than I expected. Still, very happy with my purchase.',
      },
    ],
  },
  {
    id: 2,
    name: 'Customizable Phone Stand',
    href: '/products/2',
    price: 28,
    originalPrice: 35,
    description: 'A sleek and practical phone stand, customizable with your name or logo. This stand is perfect for your desk or nightstand and is available in a variety of colors.',
    images: [
        { id: 1, src: '2.jpg', alt: 'A customizable phone stand.' },
    ],
    category: 'Gadgets',
    material: 'ABS',
    color: 'Black',
    weight: '150g',
    dimensions: '10cm x 8cm x 12cm',
    reviews: [
      {
        id: 1,
        author: 'Michael B.',
        rating: 5,
        comment: 'Love it! The customization is a great touch and it holds my phone perfectly.',
      },
    ],
  },
  // ... other products
];
