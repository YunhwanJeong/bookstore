import { BaseDialog } from '@/components';
import { PlusIcon } from '@radix-ui/react-icons';
import classes from './ProductInfoDialog.module.css';

function ProductInfoDialog() {
  return (
    <BaseDialog
      trigger={
        <button className={classes.triggerButton}>
          <PlusIcon />
          <span>Add a Book</span>
        </button>
      }
      title={'Add a Book'}
    ></BaseDialog>
  );
}

export default ProductInfoDialog;
