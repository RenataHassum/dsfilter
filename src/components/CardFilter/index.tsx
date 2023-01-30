import { useState, useContext } from 'react';
import FilterButton from '../FilterButton';
import './styles.css';
import { FilterProps, FormData } from '../../types';
import { ContextNumberCount } from '../../types/utils/context-number';
import * as productService from '../../services/product-service';

export default function CardFilter({ onFilter }: FilterProps) {
  const { contextNumberCount, setContextNumberCount } =
    useContext(ContextNumberCount);

  const [formData, setFormData] = useState<FormData>({
    minPrice: 0,
    maxPrice: 0,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const { name } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onFilter(
      Number(formData.minPrice),
      formData.maxPrice ? Number(formData.maxPrice) : Number.MAX_VALUE,
    );

    setContextNumberCount(
      productService.findByPrice(formData.minPrice, formData.maxPrice).length,
    );
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
