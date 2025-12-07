import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/products';
import { StarIcon } from '@heroicons/react/20/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Product } from '../types';

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === Number(productId));
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]?.src ?? '/1.jpg');

  if (!product) return <div className="p-8">Product not found</div>;

  const similarProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-neutral-50">
      <main className="container-xl mx-auto px-4 sm:px-6 lg:px-8 section-immersive">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Left: Image gallery */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="flex flex-col gap-6">
              <div className="card p-4 bg-white">
                <div className="w-full aspect-h-1 aspect-w-1 rounded-md overflow-hidden">
                  <img
                    src={selectedImage}
                    alt={product.images?.[0]?.alt ?? product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.images?.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image.src)}
                    className={classNames(
                      'relative h-20 rounded-md overflow-hidden border transition focus:outline-none',
                      selectedImage === image.src ? 'ring-2 ring-primary-300 border-transparent' : 'border-neutral-200'
                    )}
                    aria-label={image.alt}
                  >
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: Product info */}
          <section className="mt-8 px-4 sm:mt-0 sm:px-0 lg:mt-0">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">{product.name}</h1>

              <div className="mt-4 flex items-baseline gap-4">
                <p className="text-3xl font-bold tracking-tight text-neutral-900">${product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-neutral-500 line-through">${product.originalPrice}</p>
                )}
              </div>

              <p className="mt-4 text-sm text-neutral-600">{product.description}</p>
            </div>

            <form className="mt-8 max-w-md">
              <button type="submit" className="btn-primary w-full">
                Add to bag
              </button>
            </form>

            <div className="mt-10 border-t border-gray-200">
              <Disclosure as="div" defaultOpen>
                {({ open }) => (
                  <>
                    <h3 className="flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between py-6 text-left">
                        <span className="text-lg font-medium text-gray-900">Description</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500" />
                          ) : (
                            <PlusIcon className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                          )}
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel as="div" className="prose prose-sm pb-6">
                      <p>{product.description}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <h3 className="flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between py-6 text-left">
                        <span className="text-lg font-medium text-gray-900">Details</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500" />
                          ) : (
                            <PlusIcon className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                          )}
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel as="div" className="prose prose-sm pb-6">
                      <ul role="list">
                        <li>Material: {product.material}</li>
                        <li>Color: {product.color}</li>
                        <li>Weight: {product.weight}</li>
                        <li>Dimensions: {product.dimensions}</li>
                      </ul>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </section>
        </div>

        {/* Reviews section */}
        <section id="reviews" className="mt-12 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 fade-in-up">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-gray-200 pb-10">
            {product.reviews?.map((review) => (
              <div key={review.id} className="pt-10">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="ml-3 text-sm font-medium text-gray-900">{review.author}</p>
                </div>

                <p className="mt-4 space-y-6 text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Products */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Similar Products</h2>
            <Link to="/products" className="text-sm text-primary-600 hover:underline">View all</Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {similarProducts.map((p: Product) => (
              <article key={p.id} className="card p-4 hover:shadow-elevated transition">
                <div className="w-full aspect-h-1 aspect-w-1 rounded-md overflow-hidden bg-neutral-100">
                  <img src={p.images?.[0]?.src ?? '/1.jpg'} alt={p.images?.[0]?.alt ?? p.name} className="h-full w-full object-cover object-center" />
                </div>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900">
                      <Link to={`/products/${p.id}`}>{p.name}</Link>
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">{p.material}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-neutral-900">${p.price}</p>
                    <Link to={`/products/${p.id}`} className="text-xs text-primary-600 hover:underline block mt-2">View</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
