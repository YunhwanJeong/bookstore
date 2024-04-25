import bookThumbnail from '@/assets/book.png';
import type { IProduct } from '@/features/products/model';

const DUMMY_BOOKS: IProduct[] = [
  {
    id: '1',
    img: bookThumbnail,
    name: 'Close to Death: A Novel',
    price: 28.38,
    category: {
      value: 'mystery',
      label: 'Mystery',
    },
  },
  {
    id: '2',
    img: bookThumbnail,
    name: 'Knife: Meditations After an Attempted Murder',
    price: 20.25,
    category: {
      value: 'suspense',
      label: 'Suspense',
    },
  },
  {
    id: '3',
    img: bookThumbnail,
    name: 'One Of Us Knows: A Thriller',
    price: 37.15,
    category: {
      value: 'thriller',
      label: 'Thriller',
    },
  },
  {
    id: '4',
    img: bookThumbnail,
    name: 'Earthflown: A Potable Study of Love and Collusion - Indigo Exclusive Edition',
    price: 45.55,
    category: {
      value: 'romance',
      label: 'Romance',
    },
  },
  {
    id: '5',
    img: bookThumbnail,
    name: 'Jujutsu Kaisen, Vol. 22',
    price: 17.34,
    category: {
      value: 'manga',
      label: 'Manga',
    },
  },
  {
    id: '6',
    img: bookThumbnail,
    name: 'The Light We Carry: Overcoming in Uncertain Times',
    price: 28.38,
    category: {
      value: 'self-help',
      label: 'Self-Help',
    },
  },
  {
    id: '7',
    img: bookThumbnail,
    name: 'Lessons in Chemistry Special Edition',
    price: 26.59,
    category: {
      value: 'literary-fiction',
      label: 'Literary Fiction',
    },
  },
  {
    id: '8',
    img: bookThumbnail,
    name: 'The Murder Inn: From the Author of The Summer House',
    price: 33.33,
    category: {
      value: 'mystery',
      label: 'Mystery',
    },
  },
];

export { DUMMY_BOOKS };
