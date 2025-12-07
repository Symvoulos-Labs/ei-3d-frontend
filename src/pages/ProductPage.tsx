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

  if (!product) {
    return <div>Product not found</div>;
  }

  const averageRating = product.reviews?.length > 0
    ? product.reviews.reduce((acc: number, review) => acc + review.rating, 0) / product.reviews.length
    : 0;
    
  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Image gallery */}
            <div className="lg:sticky lg:top-20 self-start">
              <div className="flex flex-col-reverse">
                <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                  <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal">
                    {product.images.map((image) => (
                      <button
                        key={image.id}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                        onClick={() => setSelectedImage(image.src)}
                      >
                        <span className="sr-only">{image.alt}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                        </span>
                        <span
                          className={classNames(
                            selectedImage === image.src ? 'ring-cyan-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full aspect-h-1 aspect-w-1 rounded-lg overflow-hidden">
                  <img
                    src={selectedImage}
                    alt={product.images?.[0]?.alt ?? product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          averageRating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{averageRating} out of 5 stars</p>
                  <a href="#reviews" className="ml-3 text-sm font-medium text-cyan-600 hover:text-cyan-500">
                    {product.reviews?.length || 0} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
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
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
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
        </div>
        
        {/* Similar Products */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Similar Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {similarProducts.map((p: Product) => (
              <div key={p.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <img
                    src={p.images?.[0]?.src ?? '/1.jpg'}
                    alt={p.images?.[0]?.alt ?? p.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/products/${p.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{p.material}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
