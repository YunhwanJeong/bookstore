import { generateTestId } from '@/common/utils/test';
import type { PartialWithRequiredField } from '@/common/utils/types';
import type { IProduct } from '@/features/products/model';
import type { MouseEventHandler } from 'react';
import classes from './ProductDeleteButton.module.css';

interface IProps {
  product: PartialWithRequiredField<IProduct, 'id'>;
  label?: string;
  onClick?: MouseEventHandler;
}

function ProductDeleteButton({ product, label = 'delete', onClick }: IProps) {
  return (
    <button
      data-testid={`${generateTestId('product-delete-button', product.id)}`}
      className={classes.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ProductDeleteButton;
