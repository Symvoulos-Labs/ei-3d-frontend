const AboutPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a passionate team of designers, engineers, and 3D printing enthusiasts dedicated to bringing your ideas to life. Our mission is to provide high-quality, affordable, and accessible 3D printing services to everyone.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Our Mission</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              To empower creativity and innovation by making 3D printing accessible to all.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Our Vision</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              A world where anyone can turn their ideas into reality through the power of 3D printing.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Our Values</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Quality, affordability, and customer satisfaction are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
