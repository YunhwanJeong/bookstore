import type { IProduct } from '@/features/products/model';
import type { ReactNode } from 'react';
import classes from './Product.module.css';

interface IProps {
  id: string;
  img: string;
  name: string;
  price: number;
  category: {
    value: string;
    label: string;
  };
  description?: string;
  bottomAddOn?: ReactNode;
  onClick: (product: IProduct) => () => void;
}

function Product({ bottomAddOn, onClick, ...product }: IProps) {
  return (
    <li className={classes.productWrapper}>
      <div className={classes.product} onClick={onClick(product)}>
        <img className={classes.product__image} src={product.img} alt="product thumbnail" />
        <div className={classes.product__category}>{product.category.label}</div>
        <h3 className={classes.product__name}>{product.name}</h3>
        <div className={classes.product__price}>{product.price}</div>
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
