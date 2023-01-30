import React from 'react';
import * as productService from '../../services/product-service';
import { ProductDTO, QueryParams } from '../../types';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import './styles.css';

export default function ListingBody() {
  const [products, setProducts] = React.useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = React.useState<QueryParams>({
    minPrice: 0,
    maxPrice: 0,
  });

  React.useEffect(() => {
    const loadProducts: ProductDTO[] = productService.findAll();
    setProducts(loadProducts);

    if (queryParams.minPrice !== 0 || queryParams.maxPrice !== 0) {
      const filteredProducts: ProductDTO[] = productService.findByPrice(
        queryParams.minPrice,
        queryParams.maxPrice,
      );
      setProducts(filteredProducts);
    }
  }, [setProducts, queryParams.minPrice, queryParams.maxPrice]);

  const handleOnFilter = (minPrice: number, maxPrice: number) => {
    setQueryParams({ ...queryParams, minPrice, maxPrice });
  };

  return (
    <main className="container-body-960">
      <CardFilter onFilter={handleOnFilter} />

      {products.map((product) => (
        <CardListing key={product.id} product={product} />
      ))}
    </main>
  );
}
