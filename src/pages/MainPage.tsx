import { ProductDeleteButton, ProductInfoDialog, ProductList } from '@/features/products/components';
import { useBooks } from '@/features/products/hooks';
import classes from './MainPage.module.css';

function MainPage() {
  const { books } = useBooks();

  return (
    <section className={classes.pageWrapper}>
      <div className={classes.pageActions}>
        <ProductInfoDialog />
      </div>
      <ProductList products={books} bottomAddOn={<ProductDeleteButton />} />
    </section>
  );
}

export default MainPage;
