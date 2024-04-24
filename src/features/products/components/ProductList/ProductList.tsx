import type { PartialWithRequiredField } from '@/common/utils/types';
import { Product } from '@/features/products/components';
import type { IProduct } from '@/features/products/model';
import type { ReactNode } from 'react';
import classes from './ProductList.module.css';

interface IProps {
  products: IProduct[];
  renderBottomAddOn?: (params: PartialWithRequiredField<IProduct, 'id'>) => ReactNode;
}

function ProductList({ products, renderBottomAddOn }: IProps) {
  return (
    <ul className={classes.productList}>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            category={product.category}
            bottomAddOn={renderBottomAddOn && renderBottomAddOn(product)}
          />
        );
      })}
    </ul>
  );
}

export default ProductList;
