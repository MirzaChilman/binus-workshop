import useLocalStorage from '@hooks/useLocalStorage';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [cart] = useLocalStorage('cart');

  return (
    <nav className="max-w-lg bg-gray-700 flex items-center justify-between max-w-3xl p-4 mx-auto">
      <Link
        className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-lg"
        to="/"
      >
        Logo
      </Link>

      <ul className="flex items-center space-x-2 text-sm font-medium text-gray-200">
        <li>
          <Link to="/cart" className="py-2 rounded-lg flex relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="absolute bottom-[-5px] text-center bg-red-500 rounded-full">
              {cart?.length}
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
