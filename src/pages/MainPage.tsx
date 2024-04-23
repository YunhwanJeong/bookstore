import { useAppSelector } from '@/app/store/hooks';
import { ProductDeleteButton, ProductInfoDialog, ProductList } from '@/features/products/components';
import { selectProducts } from '@/features/products/slices';
import classes from './MainPage.module.css';

function MainPage() {
  const products = useAppSelector(selectProducts);

  return (
    <section className={classes.pageWrapper}>
      <div className={classes.pageActions}>
        <ProductInfoDialog />
      </div>
      <ProductList products={products} bottomAddOn={<ProductDeleteButton />} />
    </section>
  );
}

export default MainPage;
