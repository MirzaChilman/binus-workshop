import React from 'react';
import { Link } from 'react-router-dom';
/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from '@heroicons/react/solid';

// const products = [
//   {
//     id: 1,
//     name: 'Organize Basic Set (Walnut)',
//     price: '$149',
//     rating: 5,
//     reviewCount: 38,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   {
//     id: 2,
//     name: 'Organize Pen Holder',
//     price: '$15',
//     rating: 5,
//     reviewCount: 18,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   {
//     id: 3,
//     name: 'Organize Sticky Note Holder',
//     price: '$15',
//     rating: 5,
//     reviewCount: 14,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   {
//     id: 4,
//     name: 'Organize Phone Holder',
//     price: '$15',
//     rating: 4,
//     reviewCount: 21,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   // More products...
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductCard(props) {
  const { products } = props;
  console.log(
    '🚀 ~ file: index.jsx ~ line 75 ~ ProductCard ~ products',
    products,
  );
  return (
    <div className="bg-white">
      <div className="mx-auto overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0">
          {products?.docs?.map((product) => (
            <div
              key={product?.product_id || ''}
              className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
            >
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product?.product_main_image_url || ''}
                  alt={product?.product_title || ''}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link to={`/product/${product?.product_id}` || ''}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product?.product_title || ''}
                  </Link>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">
                    {product?.rating || ''} out of 5 stars
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product?.rating > rating
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product?.evaluate_rate || ''} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product?.app_sale_price_currency || ''}
                  {product?.app_sale_price || ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
