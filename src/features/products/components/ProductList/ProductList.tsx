import type { PartialWithRequiredField } from '@/common/utils';
import { Product } from '@/features/products/components';
import type { IProduct } from '@/features/products/model';
import type { ReactNode } from 'react';
import classes from './ProductList.module.css';

interface IProps {
  products: IProduct[];
  renderBottomAddOn?: (params: PartialWithRequiredField<IProduct, 'id'>) => ReactNode;
  onProductClick: (product: IProduct) => () => void;
}

function ProductList({ products, renderBottomAddOn, onProductClick }: IProps) {
  return (
    <ul className={classes.productList}>
      {products.map((product) => {
        return (
          <Product
            {...product}
            key={product.id}
            bottomAddOn={renderBottomAddOn && renderBottomAddOn(product)}
            onClick={onProductClick}
          />
        );
      })}
    </ul>
  );
}

export default ProductList;
