import React, { useCallback, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import useLocalStorage from '@hooks/useLocalStorage';

const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: 'Back of womens Basic Tee in black.',
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: 'Side profile of womens Basic Tee in black.',
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: 'Front of womens Basic Tee in black.',
      primary: false,
    },
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    {
      name: 'Heather Grey',
      bgColor: 'bg-gray-400',
      selectedColor: 'ring-gray-400',
    },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ProductDetail(props) {
  const [myCart, setMyCart] = useLocalStorage(
    'cart',
    JSON.parse(window.localStorage.getItem('cart')) || [],
  );
  console.log(
    '🚀 ~ file: index.jsx ~ line 75 ~ ProductDetail ~ myCart',
    myCart,
  );
  const { product: response } = props;

  const [loading, setLoading] = useState(false);

  const renderFeatureBullets = () => {
    if (Array.isArray(response.feature_bullets)) {
      return response?.feature_bullets?.join(', ');
    }
    return response?.feature_bullets
      ? Object.entries(response?.feature_bullets)?.join(', ')
      : 'None';
  };

  const handleAddToCart = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      if (JSON.parse(window.localStorage.getItem('cart'))) {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.push(response);
        setMyCart(cart);
      } else {
        const cart = [];
        cart.push(response);
        setMyCart(cart);
      }
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4">
            {response?.breadcrumbs?.slice(-1).map((breadcrumb) => (
              <li key={breadcrumb.name + breadcrumb.url}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.url}
                    className="mr-4 text-xs font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {response?.product_title}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {response?.product_title}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {response?.currency}
                  {response?.app_sale_price}
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {response?.product_details?.Customer_Reviews}
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                  src={response?.product_main_image_url}
                  alt={response?.product_main_image_url}
                  className="lg:col-span-2 lg:row-span-2 rounded-lg"
                />
                {response?.product_small_image_urls?.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className="hidden lg:block rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleAddToCart}
                  className={`${
                    loading
                      ? 'bg-gray-500 hover:bg-gray-700'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } hover:cursor-pointer mt-8 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {loading ? (
                    <svg
                      role="status"
                      className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-200"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    'Add to cart'
                  )}
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500 break-all">
                  {renderFeatureBullets()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
