import Header from '@components/Header';
import React from 'react';

function Layout({ children }) {
  return (
    <div className="mx-auto max-w-lg">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
