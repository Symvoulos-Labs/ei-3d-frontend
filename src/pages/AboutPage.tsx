import { CheckCircleIcon } from '@heroicons/react/20/solid';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Our team"
          />
          <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We are a passionate team of designers, engineers, and 3D printing enthusiasts dedicated to bringing your ideas to life. Our mission is to provide high-quality, affordable, and accessible 3D printing services to everyone.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-600">Our Story</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From a small workshop to a leading provider of 3D printing services.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our journey began in a small workshop with a single 3D printer and a passion for innovation. We wanted to make the power of 3D printing accessible to everyone, from hobbyists to entrepreneurs. Today, we are proud to have grown into a leading provider of 3D printing services, with a state-of-the-art facility and a team of experts dedicated to helping you bring your ideas to life.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-600">Meet the Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The people behind the prints.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">John Doe</h3>
              <p className="text-base leading-7 text-gray-600">Founder & CEO</p>
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Jane Smith</h3>
              <p className="text-base leading-7 text-gray-600">Head of Design</p>
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Michael Johnson</h3>
              <p className="text-base leading-7 text-gray-600">Lead Engineer</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The principles that guide our work.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-cyan-600" />
                  Quality
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We are committed to delivering the highest quality 3D prints, using the best materials and state-of-the-art technology.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-cyan-600" />
                  Innovation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We are constantly pushing the boundaries of what's possible with 3D printing, exploring new materials, techniques, and applications.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-cyan-600" />
                  Customer Satisfaction
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Your satisfaction is our top priority. We work closely with you to ensure that your vision is brought to life, exactly as you imagined it.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
