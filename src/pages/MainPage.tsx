import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import type { PartialWithRequiredField } from '@/common/utils';
import { ProductDeleteButton, ProductInfoDialog, ProductList } from '@/features/products/components';
import type { IProduct } from '@/features/products/model';
import { deleteProduct, selectProducts } from '@/features/products/slices';
import { useEffect, useState } from 'react';
import classes from './MainPage.module.css';

function MainPage() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  useEffect(() => {
    if (!open) setSelectedProduct(undefined);
  }, [open]);

  const renderBottomAddOn = (product: PartialWithRequiredField<IProduct, 'id'>) => {
    const handleProductDeleteButtonClick: React.MouseEventHandler = () => {
      const confirm = window.confirm('Are you sure you want to delete this book?');

      if (confirm) {
        dispatch(deleteProduct(product.id));
      }
    };

    return <ProductDeleteButton product={product} onClick={handleProductDeleteButtonClick} />;
  };

  const handleProductClick = (product: IProduct) => () => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <section className={classes.pageWrapper}>
      <div className={classes.pageActions}>
        <ProductInfoDialog selectedProduct={selectedProduct} open={open} onOpenChange={setOpen} />
      </div>
      <ProductList products={products} renderBottomAddOn={renderBottomAddOn} onProductClick={handleProductClick} />
    </section>
  );
}

export default MainPage;
