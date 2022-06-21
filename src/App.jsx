import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@routes/Home';
import Product from '@routes/Product';
import Cart from '@routes/Cart';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback="Loading. . .">
              <Home />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/product/:id"
          element={
            <React.Suspense fallback="Loading. . .">
              <Product />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <React.Suspense fallback="Loading. . .">
              <Cart />
            </React.Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
