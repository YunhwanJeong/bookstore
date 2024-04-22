import { Product } from '@/components';
import type { IProduct } from '@/model';
import type { ReactNode } from 'react';
import classes from './ProductList.module.css';

interface IProps {
  products: IProduct[];
  bottomAddOn?: ReactNode;
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
