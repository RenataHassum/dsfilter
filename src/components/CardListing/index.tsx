import { ProductDTO } from '../../types';
import './styles.css';

type Props = {
  product: ProductDTO;
};

export default function CardListing({ product }: Props) {
  return (
    <>
      <section>
        <div className=" card-listing-dsfilter container-body">
          <div className="product-dsfilter">
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
