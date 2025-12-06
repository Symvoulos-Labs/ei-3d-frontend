import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { products } from '../../lib/products';

const Filters = ({ setSearchTerm, setCategory, setMaterial, setColor, setPrice, price }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const categories = ['all', ...new Set(products.map((p) => p.category))];
  const materials = ['all', ...new Set(products.map((p) => p.material))];
  const colors = ['all', ...new Set(products.map((p) => p.color))];

  const filterSections = [
    {
      id: 'category',
      name: 'Category',
      options: categories,
      setter: setCategory,
    },
    {
      id: 'material',
      name: 'Material',
      options: materials,
      setter: setMaterial,
    },
    {
      id: 'color',
      name: 'Color',
      options: colors,
      setter: setColor,
    },
  ];

  const filterContent = (
    <form className="mt-4 border-t border-gray-200">
      <h3 className="sr-only">Categories</h3>
      <ul role="list" className="px-2 py-3 font-medium text-gray-900">
        <li>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </li>
      </ul>

      {filterSections.map((section) => (
        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
          {({ open }) => (
            <>
              <h3 className="-mx-2 -my-3 flow-root">
                <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                <div className="space-y-6">
                  {section.options.map((option, optionIdx) => (
                    <div key={option} className="flex items-center">
                      <input
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option}
                        type="radio"
                        defaultChecked={option === 'all'}
                        onChange={(e) => section.setter(e.target.value)}
                        className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
       <div className="border-t border-gray-200 px-4 py-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-900">
            Max Price: <span className="font-bold">${price}</span>
          </label>
          <input
            id="price"
            name="price"
            type="range"
            min="0"
            max="500"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
          />
        </div>
    </form>
  );

  return (
    <>
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      
      {/* Mobile filter dialog */}
      <Transition show={mobileFiltersOpen}>
        <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {filterContent}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
      
      {/* Desktop filters */}
      <div className="hidden lg:block">
        {filterContent}
      </div>
    </>
  )
}

export default Filters;
