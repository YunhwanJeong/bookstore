import classes from './ProductDeleteButton.module.css';

interface IProps {
  label?: string;
}

function ProductDeleteButton({ label = 'delete' }: IProps) {
  return <button className={classes.button}>{label}</button>;
}

export default ProductDeleteButton;
