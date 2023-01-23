import FilterButton from '../FilterButton';
import './styles.css';

export default function CardFilter() {
  return (
    <>
      <form>
        <div className="card-filter-dsfilter container-body">
          <input type="text" placeholder="Preço mínimo" />
          <input type="text" placeholder="Preço máximo" />
          <FilterButton text="Filtrar" />
        </div>
      </form>
    </>
  );
}
