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
      <a className={classes.product__link}>
        <img src={img} alt="product thumbnail" />
        <div className={classes.product__category}>{category}</div>
        <h3 className={classes.product__name}>{name}</h3>
        <div className={classes.product__price}>{price}</div>
      </a>
    </li>
  );
}

export default Product;
