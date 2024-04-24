import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import type { PartialWithRequiredField } from '@/common/utils/types';
import { ProductDeleteButton, ProductInfoDialog, ProductList } from '@/features/products/components';
import type { IProduct } from '@/features/products/model';
import { deleteProduct, selectProducts } from '@/features/products/slices';
import classes from './MainPage.module.css';

function MainPage() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const renderBottomAddOn = (product: PartialWithRequiredField<IProduct, 'id'>) => {
    const handleProductDeleteButtonClick: React.MouseEventHandler = () => {
      const confirm = window.confirm('Are you sure you want to delete this book?');

      if (confirm) {
        dispatch(deleteProduct(product.id));
      }
    };

    return <ProductDeleteButton product={product} onClick={handleProductDeleteButtonClick} />;
  };

  return (
    <section className={classes.pageWrapper}>
      <div className={classes.pageActions}>
        <ProductInfoDialog />
      </div>
      <ProductList products={products} renderBottomAddOn={renderBottomAddOn} />
    </section>
  );
}

export default MainPage;
