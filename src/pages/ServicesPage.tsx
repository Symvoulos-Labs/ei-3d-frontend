import { CubeTransparentIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
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
  );
};

export default ServicesPage;
