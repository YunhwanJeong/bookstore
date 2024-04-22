import { ProductDeleteButton, ProductList } from '@/components';
import { useBooks } from '@/hooks';
import classes from './MainPage.module.css';

function MainPage() {
  const { books } = useBooks();

  return (
    <section className={classes.pageWrapper}>
      <ProductList products={books} bottomAddOn={<ProductDeleteButton />} />
    </section>
  );
}

export default MainPage;
