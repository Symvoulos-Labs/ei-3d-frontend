export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  href: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: ProductImage[];
  category: string;
  material: string;
  color: string;
  weight: string;
  dimensions: string;
  reviews?: Review[];
}
