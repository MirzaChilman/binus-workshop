import ProductCard from '@components/ProductCard';
import Spinner from '@components/Spinner';
import React, { useEffect, useRef, useState } from 'react';

function Home() {
  const firstRender = useRef(true);
  const [loading, setLoading] = useState(false);
  const [productsResponse, setProductsResponse] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              'fd780695d9msh1a15692ee12390fp19584cjsn9dc738aacd1f',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
          },
        };

        const response = await fetch(
          'https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=iphone&country=SG&page=1',
          options,
        );

        const resultJson = await response.json();
        setProductsResponse(resultJson);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (firstRender.current) {
      fetchProducts();
      firstRender.current = false;
    }
  }, []);
  return (
    <main>
      {loading && <Spinner />}
      {!loading && <ProductCard products={productsResponse} />}
    </main>
  );
}

export default Home;
