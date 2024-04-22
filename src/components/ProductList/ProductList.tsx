import { Product } from '@/components';
import { IProduct } from '@/model';
import classes from './ProductList.module.css';

interface IProps {
  products: IProduct[];
  bottomAddOn?: React.ReactNode;
}

function ProductList({ products, bottomAddOn }: IProps) {
  return (
    <ul className={classes.productList}>
      {products.map(({ id, img, name, price, category }) => {
        return <Product key={id} img={img} name={name} price={price} category={category} bottomAddOn={bottomAddOn} />;
      })}
    </ul>
  );
}

export default ProductList;
