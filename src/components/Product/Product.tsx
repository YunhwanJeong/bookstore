import classes from './Product.module.css';

interface Props {
  img: string;
  name: string;
  price: number;
  category: string;
}

function Product({ img, name, price, category }: Props) {
  return (
    <li className={classes.product}>
      <img src={img} alt="product thumbnail" />
      <div>{category}</div>
      <div>{name}</div>
      <div>{price}</div>
    </li>
  );
}

export default Product;
