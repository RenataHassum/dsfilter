import * as productService from '../../services/product-service';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import './styles.css';

export default function ListingBody() {
  return (
    <main className="container-body-960">
      <CardFilter />
      <CardListing products={productService.findAll()} />
    </main>
  );
}
