import React from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductCard from '@components/ProductCard';

const ProductDetail = React.lazy(() => import('./routes/Product'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          Home
        </Link>
        <Link to="/product/1">
          Product
        </Link>
        <ProductCard />
        <Routes>
          <Route exact path="/product/:id" element={
            <React.Suspense fallback="Loading. . .">
              <ProductDetail />
            </React.Suspense>
          } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
