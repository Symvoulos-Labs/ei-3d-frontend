import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../lib/products';
import Filters from '../components/products/Filters';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [material, setMaterial] = useState('all');
  const [color, setColor] = useState('all');
  const [price, setPrice] = useState(500);

  const categories = ['all', ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    let tempProducts = products;

    if (searchTerm) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    if (material !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.material === material
      );
    }

    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => product.color === color);
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);

    setFilteredProducts(tempProducts);
  }, [searchTerm, category, material, color, price]);

  return (
    <div className="bg-gray-100">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 from-cyan-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
              Our Products
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <Filters
                setSearchTerm={setSearchTerm}
                setCategory={setCategory}
                setMaterial={setMaterial}
                setColor={setColor}
                setPrice={setPrice}
                price={price}
              />

              <div className="lg:col-span-3">
                <div className="flex items-center space-x-2 pb-4">
                  <span className="text-sm font-medium text-gray-700">Categories:</span>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        category === cat
                          ? 'bg-cyan-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <Link to={product.href}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.material}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
