import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
          <Link to="/about" className="px-3 py-2 rounded-lg">
            {' '}
            About{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
