import { ProductList } from '@/components';
import classes from './MainPage.module.css';

function MainPage() {
  return (
    <section className={classes.pageWrapper}>
      <ProductList />
    </section>
  );
}

export default MainPage;
