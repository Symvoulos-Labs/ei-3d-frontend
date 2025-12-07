import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { products } from '../../lib/products';
import { useCartStore } from '../../store/cartStore';

const navigation = {
  categories: [
    {
      id: 'products',
      name: 'Products',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Bestsellers',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'categories',
          name: 'Categories',
          items: [...new Set(products.map(p => p.category))].map(c => ({ name: c, href: `/products?category=${c}` })),
        },
        {
          id: 'materials',
          name: 'Materials',
          items: [...new Set(products.map(p => p.material))].map(m => ({ name: m, href: `/products?material=${m}` })),
        },
      ],
    },
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

const Layout = () => {
  const { isAuthenticated, signOut } = useAuth();
  const { items } = useCartStore();
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 bg-gray-800/90 backdrop-blur-md">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-700">
            <div className="flex h-16 items-center">
              <div className="flex flex-1 items-center">
                <Link to="/" className="flex items-center">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=400" alt="" />
                  <span className="ml-3 text-xl font-bold text-white">3D Prints</span>
                </Link>
              </div>

              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    to="/"
                    className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
                  >
                    Home
                  </Link>
                  <Popover className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <PopoverButton
                            className={classNames(
                              open
                                ? 'border-cyan-400 text-cyan-400'
                                : 'border-transparent text-gray-300 hover:text-white',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            )}
                          >
                            Products
                          </PopoverButton>
                        </div>

                        <PopoverPanel
                          transition
                          className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  {navigation.categories[0].featured.map((item) => (
                                    <div key={item.name} className="group relative text-base sm:text-sm">
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                      <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  {navigation.categories[0].sections.map((section) => (
                                    <div key={section.name}>
                                      <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                        {section.name}
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a href={item.href} className="hover:text-gray-800">
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </Popover>
                  {navigation.pages.slice(1).map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-6">
                  <PopoverButton className="group -m-2 flex items-center p-2">
                    <ShoppingCartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-300"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white">{items.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
                  >
                    <div className="mx-auto max-w-2xl px-4">
                      <h2 className="sr-only">Shopping Cart</h2>
                      <ul role="list" className="divide-y divide-gray-200">
                        {items.map((item) => (
                          <li key={item.id} className="flex items-center py-6">
                            <img
                              src={item.images[0].src}
                              alt={item.images[0].alt}
                              className="h-16 w-16 flex-none rounded-md border border-gray-200"
                            />
                            <div className="ml-4 flex-auto">
                              <h3 className="font-medium text-gray-900">
                                <Link to={item.href}>{item.name}</Link>
                              </h3>
                              <p className="text-gray-500">Qty {item.quantity}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <Link
                            to="/cart"
                            className="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700"
                          >
                            View cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
                <div className="hidden lg:flex lg:items-center lg:space-x-6 ml-6">
                  {isAuthenticated ? (
                    <Menu as="div" className="relative">
                      <div>
                        <MenuButton className="p-2 text-gray-400 hover:text-gray-300">
                          <UserCircleIcon className="h-6 w-6" />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            Your Profile
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <button
                            onClick={signOut}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            Sign out
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white">
                      Sign in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=500"
                alt="Company name"
              />
              <p className="text-sm text-gray-300">
                Bringing your ideas to life with high-quality 3D printing.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link to="/products" className="text-sm leading-6 text-gray-300 hover:text-white">Products</Link></li>
                    <li><Link to="/services" className="text-sm leading-6 text-gray-300 hover:text-white">Services</Link></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</Link></li>
                    <li><Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white">About</Link></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white">About</Link></li>
                    <li><Link to="/blog" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
