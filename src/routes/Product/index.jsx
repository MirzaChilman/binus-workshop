import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import options from '@utils/api';
import ProductDetail from '@components/ProductDetail';
import Spinner from '@components/Spinner';

function Product() {
  const params = useParams();
  const firstRender = useRef(true);
  const [loading, setLoading] = useState(false);
  const [productsResponse, setProductsResponse] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://amazon24.p.rapidapi.com/api/product/${params.id}?categoryID=aps&keyword=iphone&country=SG&page=1`,
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
      {!loading && <ProductDetail product={productsResponse} />}
    </main>
  );
}

export default Product;
