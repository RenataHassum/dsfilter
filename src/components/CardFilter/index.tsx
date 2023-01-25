import { useState } from 'react';
import FilterButton from '../FilterButton';
import './styles.css';
import * as productService from '../../services/product-service';

type FormData = {
  minPrice: number;
  maxPrice: number;
};

type Props = {
  onFilter: (arg1: number, arg2: number) => void;
};

export default function CardFilter({ onFilter }: Props) {
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
   
    onFilter(Number(formData.minPrice), formData.maxPrice ? Number(formData.maxPrice) : Number.MAX_VALUE);
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
