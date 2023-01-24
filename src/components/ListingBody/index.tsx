
import * as productService from '../../services/product-service';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import Header from '../Header';
import './styles.css';

export default function ListingBody() {
  return (
    <>
      <Header />
      <main className="container-body-960">
        <CardFilter />
        <CardListing products={productService.findAll()} />
      </main>
    </>
  );
}
