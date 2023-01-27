import React from 'react';
import * as productService from '../../services/product-service';
import { ProductDTO } from '../../types';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import './styles.css';

export default function ListingBody() {
  const [products, setProducts] = React.useState<ProductDTO[]>([]);
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);

  const handleOnFilter = (minPrice: number, maxPrice: number) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  React.useEffect(() => {
    const loadProducts: ProductDTO[] = productService.findAll();
    setProducts(loadProducts);

    if (minPrice !== 0 || maxPrice !== 0) {
      const filteredProducts: ProductDTO[] = productService.findByPrice(
        minPrice,
        maxPrice,
      );
      setProducts(filteredProducts);
    }
  }, [setProducts, minPrice, maxPrice]);

  return (
    <main className="container-body-960">
      <CardFilter onFilter={handleOnFilter} />

      {products.map((product) => (
        <CardListing key={product.id} product={product} />
      ))}
    </main>
  );
}
