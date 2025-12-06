import { useState } from 'react';
import { PhotoIcon, CubeTransparentIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';

const tabs = [
  { name: 'Design on Demand', icon: CubeTransparentIcon },
  { name: 'Print on Demand', icon: CloudArrowUpIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ServicesPage = () => {
  const [currentTab, setCurrentTab] = useState('Design on Demand');

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
            Whether you have a design ready to print or need a custom model created from scratch, we have a service for you.
          </p>
        </div>
        <div className="mt-12">
          <div className="hidden sm:block">
            <div className="flex justify-center">
              <nav className="flex space-x-4 rounded-lg bg-gray-200 p-2" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setCurrentTab(tab.name)}
                    className={classNames(
                      tab.name === currentTab
                        ? 'bg-white text-gray-900 shadow-md'
                        : 'text-gray-600 hover:bg-white/50',
                      'flex items-center rounded-md py-2 px-4 text-sm font-medium'
                    )}
                    aria-current={tab.name === currentTab ? 'page' : undefined}
                  >
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {currentTab === 'Design on Demand' && (
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Custom Design Request</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Have an idea for a custom 3D model? Fill out the form below and our expert designers will get back to you with a quote.
                </p>
              </div>
              <form className="bg-white p-8 shadow-xl rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
                    <textarea id="description" name="description" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Reference Files</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 hover:text-cyan-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="submit" className="rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-transform duration-200 hover:scale-105">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          )}
          {currentTab === 'Print on Demand' && (
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Upload and Print</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Have a 3D model ready to print? Upload your file, choose your material and settings, and we'll print it for you.
                </p>
              </div>
              <form className="bg-white p-8 shadow-xl rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">3D Model</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label htmlFor="file-upload-print" className="relative cursor-pointer rounded-md bg-white font-semibold text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 hover:text-cyan-500">
                            <span>Upload a file</span>
                            <input id="file-upload-print" name="file-upload-print" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">STL, OBJ, or 3MF up to 25MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
                      <select id="material" name="material" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500">
                        <option>PLA</option>
                        <option>ABS</option>
                        <option>PETG</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                      <select id="color" name="color" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500">
                        <option>Black</option>
                        <option>White</option>
                        <option>Red</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="submit" className="rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-transform duration-200 hover:scale-105">
                    Get Quote
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
