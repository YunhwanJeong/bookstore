import type { ReactNode } from 'react';
import classes from './Product.module.css';

interface IProps {
  img: string;
  name: string;
  price: number;
  category: string;
  bottomAddOn?: ReactNode;
}

function Product({ img, name, price, category, bottomAddOn }: IProps) {
  return (
    <li className={classes.productWrapper}>
      <div className={classes.product}>
        <img className={classes.product__image} src={img} alt="product thumbnail" />
        <div className={classes.product__category}>{category}</div>
        <h3 className={classes.product__name}>{name}</h3>
        <div className={classes.product__price}>{price}</div>
      </div>
      {bottomAddOn && (
        <>
          <div className={classes.divider} />
          {bottomAddOn}
        </>
      )}
    </li>
  );
}

export default Product;
