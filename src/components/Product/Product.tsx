import classes from './Product.module.css';

interface IProps {
  img: string;
  name: string;
  price: number;
  category: string;
  bottomAddOn?: React.ReactNode;
}

function Product({ img, name, price, category, bottomAddOn }: IProps) {
  return (
    <li className={classes.productWrapper}>
      <div className={classes.product}>
        <img src={img} alt="product thumbnail" />
        <div className={classes.product__category}>{category}</div>
        <h3 className={classes.product__name}>{name}</h3>
        <div className={classes.product__price}>{price}</div>
      </div>
      {bottomAddOn && <div className={classes.bottomAddOn}>{bottomAddOn}</div>}
    </li>
  );
}

export default Product;
