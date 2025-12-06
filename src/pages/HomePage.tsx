import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CubeTransparentIcon, CloudArrowUpIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';
import ProductPreviewModal from '../components/ProductPreviewModal';
import { useInView } from '../hooks/useInView';
import { useCartStore } from '../store/cartStore';

const HomePage = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { addToCart } = useCartStore();

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });

  const handlePreview = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const categories = useMemo(() => {
    if (!products) return [];
    return ['all', ...new Set(products.map(p => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (selectedCategory === 'all') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll(320); // Scroll by the width of one card + margin
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="bg-gray-100">
      {/* Hero section */}
      <div ref={heroRef} className={`relative isolate overflow-hidden bg-gray-900 h-[90vh] ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0.3,
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-8xl">
              Create. Print. Innovate.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              High-quality 3D printing services for prototypes, products, and everything in between.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-transform duration-200 hover:scale-105"
              >
                Explore Products <ArrowRightIcon className="inline h-5 w-5 ml-2" />
              </Link>
              <Link to="/services" className="text-base font-semibold leading-6 text-white">
                Custom Order <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured products section */}
      <div ref={featuredRef} className={`bg-white py-16 sm:py-24 ${featuredInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
            <div className="mt-8 flex space-x-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {isLoading && <p>Loading products...</p>}
          {isError && <p>Error fetching products.</p>}
          <div
            className="mt-10 relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <button onClick={() => scroll(-320)} className="p-2 rounded-full bg-white/60 text-gray-800 shadow-lg hover:bg-white">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              className="flex space-x-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-4"
              style={{ scrollbarWidth: 'none' }}
            >
              {filteredProducts?.map((product: Product) => (
                <div key={product.id} className="group relative flex-shrink-0 w-80 snap-center bg-white rounded-lg shadow-lg overflow-hidden">
                  <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden cursor-pointer"
                    onClick={() => handlePreview(product)}
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <EyeIcon className="h-8 w-8 text-white" />
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a href={product.href} onClick={(e) => { e.preventDefault(); handlePreview(product); }}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <div className="mt-2 flex items-baseline">
                      <p className="text-lg font-bold text-gray-900">${product.price}</p>
                      {product.originalPrice && (
                        <p className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</p>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="mt-4 w-full flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 z-10 relative"
                    >
                      <ShoppingCartIcon className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <button onClick={() => scroll(320)} className="p-2 rounded-full bg-white/60 text-gray-800 shadow-lg hover:bg-white">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-block rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-transform duration-200 hover:scale-105"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Services overview section */}
      <div ref={servicesRef} className={`bg-gray-50 py-16 sm:py-24 ${servicesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-600">Our Services</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to bring your ideas to life
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you have a design ready to print or need a custom model created from scratch, we have a service for you.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col p-8 bg-white rounded-2xl shadow-xl">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CubeTransparentIcon className="h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                  Design on Demand
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Don't have a 3D model? No problem. Our expert designers can create a custom model based on your requirements. We'll work with you to create the perfect design.</p>
                  <p className="mt-6">
                    <Link to="/services" className="text-sm font-semibold leading-6 text-cyan-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col p-8 bg-white rounded-2xl shadow-xl">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CloudArrowUpIcon className="h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                  Print on Demand
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Have a 3D model ready to print? Upload your file, choose your material and settings, and we'll print it for you. We offer a wide range of materials and colors.</p>
                  <p className="mt-6">
                    <Link to="/services" className="text-sm font-semibold leading-6 text-cyan-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* Testimonials section */}
      <div ref={testimonialsRef} className={`relative isolate bg-white py-16 sm:py-24 ${testimonialsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-cyan-600">Testimonials</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                <div className="space-y-8">
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                        <blockquote className="text-gray-900">
                        <p>“The quality of the prints is amazing. I'm so happy with the final product. I will definitely be coming back for more.”</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                        <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <div>
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <div className="text-gray-600">@judithblack</div>
                        </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="space-y-8">
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                        <blockquote className="text-gray-900">
                        <p>“I needed a custom design for a prototype and the team was so helpful. They took my idea and turned it into a reality. I'm so grateful for their help.”</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                        <img className="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <div>
                            <div className="font-semibold text-gray-900">Joseph Gray</div>
                            <div className="text-gray-600">@josephgray</div>
                        </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ProductPreviewModal product={selectedProduct} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default HomePage;
