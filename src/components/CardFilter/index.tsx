import { useState } from 'react';
import FilterButton from '../FilterButton';
import './styles.css';

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

export default function CardFilter() {
  const [formData, setFormData] = useState<FormData>({
    minPrice: undefined,
    maxPrice: undefined,
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    console.log(formData.minPrice || 0);
    console.log(formData.maxPrice || Number.MAX_VALUE);
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
