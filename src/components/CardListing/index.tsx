import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
  products: ProductDTO[];
};

export default function CardListing({ products }: Props) {
  return (
    <>
      <form>
        <div className=" card-listing-dsfilter container-body">
          {products.map((product) => (
            <div key={product.id} className="product-dsfilter">
              <h3>{product.name}</h3>
              <p>R$ {product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
