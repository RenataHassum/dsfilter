import { useState, useEffect } from 'react';
import FilterButton from '../FilterButton';
import './styles.css';
import * as productService from '../../services/product-service';

type FormData = {
  minPrice: number;
  maxPrice: number;
};

// type Props = {
//   onFilter: Function;
// };

export default function CardFilter() {
  const [formData, setFormData] = useState<FormData>({
    minPrice: 0,
    maxPrice: 0,
  });

  // useEffect(() => {
  //   console.log('Passou no effect', formData.minPrice, formData.maxPrice);
  //   const prod = productService.findByPrice(
  //     formData.minPrice,
  //     formData.maxPrice,
  //   );
  //   console.log('Produtos:', prod);
  //   // onFilter(prod);
  // }, [formData]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData.minPrice || 0);
    console.log(formData.maxPrice || Number.MAX_VALUE);

    console.log('Passou no filtrar', formData.minPrice, formData.maxPrice);
    const prod = productService.findByPrice(
      formData.minPrice,
      formData.maxPrice,
    );
    console.log('Produtos:', prod);

    // onFilter(formData.minPrice, formData.maxPrice);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="card-filter-dsfilter container-body">
          <input
            name="minPrice"
            value={formData.minPrice || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Preço mínimo"
          />

          <input
            name="maxPrice"
            value={formData.maxPrice || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Preço máximo"
          />

          <FilterButton text="Filtrar" />
        </div>
      </form>
    </>
  );
}
