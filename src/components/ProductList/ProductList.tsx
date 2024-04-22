import bookThumbnail from '@/assets/book.png';
import { Product } from '@/components';
import { v4 as uuidv4 } from 'uuid';
import classes from './ProductList.module.css';

interface IProduct {
  id: string;
  img: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

function ProductList() {
  const products: IProduct[] = [
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'Close to Death: A Novel',
      price: 28.38,
      category: 'Mystery',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'Knife: Meditations After an Attempted Murder',
      price: 28.38,
      category: 'Suspense',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'One Of Us Knows: A Thriller',
      price: 28.38,
      category: 'Thriller',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'Earthflown: A Potable Study of Love and Collusion - Indigo Exclusive Edition',
      price: 28.38,
      category: 'Romance',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'Jujutsu Kaisen, Vol. 22',
      price: 28.38,
      category: 'Manga',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'The Light We Carry: Overcoming in Uncertain Times',
      price: 28.38,
      category: 'Self-Help',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'Lessons in Chemistry Special Edition',
      price: 28.38,
      category: 'Literary Fiction',
    },
    {
      id: uuidv4(),
      img: bookThumbnail,
      name: 'The Murder Inn: From the Author of The Summer House',
      price: 28.38,
      category: 'Mystery',
    },
  ];

  return (
    <ul className={classes.productList}>
      {products.map(({ id, img, name, price, category }) => {
        return <Product key={id} img={img} name={name} price={price} category={category} />;
      })}
    </ul>
  );
}

export default ProductList;
