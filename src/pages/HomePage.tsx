import { Link } from 'react-router-dom';
import { ArrowRightIcon, CubeTransparentIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

const featuredProducts = [
  {
    id: 1,
    name: '3D Printed Vase',
    href: '/products/1',
    imageSrc: 'https://images.unsplash.com/photo-1593941707882-6e482a893165?q=80&w=1935&auto=format&fit=crop',
    imageAlt: 'A 3D printed vase.',
    price: '$48',
  },
  {
    id: 2,
    name: 'Customizable Phone Stand',
    href: '/products/2',
    imageSrc: 'https://images.unsplash.com/photo-1534599951508-72b6a18451b6?q=80&w=1974&auto=format&fit=crop',
    imageAlt: 'A customizable phone stand.',
    price: '$35',
  },
  {
    id: 3,
    name: 'Miniature Figurines',
    href: '/products/3',
    imageSrc: 'https://images.unsplash.com/photo-1541533810237-93e54b6f1295?q=80&w=1974&auto=format&fit=crop',
    imageAlt: 'A collection of miniature figurines.',
    price: '$89',
  },
  {
    id: 4,
    name: 'Architectural Model',
    href: '/products/4',
    imageSrc: 'https://images.unsplash.com/photo-1598440947619-2c35fc93c9ad?q=80&w=1974&auto=format&fit=crop',
    imageAlt: 'An architectural model of a building.',
    price: '$250',
  },
];


const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop')",
            opacity: 0.5,
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Bring Your Ideas to Life with 3D Printing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From prototypes to final products, we offer high-quality 3D printing services to meet your needs. Explore our products or bring your own designs.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Explore Products <ArrowRightIcon className="inline h-4 w-4 ml-2" />
              </Link>
              <Link to="/custom-design" className="text-sm font-semibold leading-6 text-white">
                Custom Order <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured products section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
            <Link to="/products" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services overview section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to bring your ideas to life
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you have a design ready to print or need a custom model created from scratch, we have a service for you.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CubeTransparentIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Design on Demand
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Don't have a 3D model? No problem. Our expert designers can create a custom model based on your requirements. We'll work with you to create the perfect design.</p>
                  <p className="mt-6">
                    <Link to="/custom-design" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CloudArrowUpIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Print on Demand
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Have a 3D model ready to print? Upload your file, choose your material and settings, and we'll print it for you. We offer a wide range of materials and colors.</p>
                  <p className="mt-6">
                    <Link to="/upload-print" className="text-sm font-semibold leading-6 text-indigo-600">
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
      <div className="relative isolate bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
    </div>
  );
};

export default HomePage;
