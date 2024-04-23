import bookThumbnail from '@/assets/book.png';
import { BaseDialog, BaseSelect } from '@/common/components';
import { useCategoryGroups } from '@/features/products/hooks';
import * as Form from '@radix-ui/react-form';
import { ChevronDownIcon, PlusIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import classes from './ProductInfoDialog.module.css';

function ProductInfoDialog() {
  const { categoryGroups } = useCategoryGroups();

  return (
    <BaseDialog
      trigger={
        <button className={classes.triggerButton}>
          <PlusIcon />
          <span>Add a Book</span>
        </button>
      }
      title={'Add a Book'}
      formId="ProductInfoDialogForm"
    >
      <div className={classes.formWrapper}>
        <img src={bookThumbnail} alt="product thumbnail" />
        <Form.Root className={classes.formRoot} id="ProductInfoDialogForm">
          <Form.Field className={classes.formField} name="Name">
            <div className={classes.formLabelWrapper}>
              <Form.Label className={classes.formLabel}>Name</Form.Label>
              <Form.Message className={classes.formMessage} match="valueMissing">
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className={classes.input} type="email" placeholder="Enter book name" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="Price">
            <div className={classes.formLabelWrapper}>
              <Form.Label className={classes.formLabel}>Price - $</Form.Label>
              <Form.Message className={classes.formMessage} match="valueMissing">
                Please enter the price
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className={classes.input} type="number" placeholder="0.00" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="Category">
            <div className={classes.formLabelWrapper}>
              <Form.Label className={classes.formLabel}>Category</Form.Label>
              <Form.Message className={classes.formMessage} match="valueMissing">
                Please enter the category
              </Form.Message>
            </div>
            <Form.Control asChild>
              <BaseSelect
                trigger={
                  <button className={classes.selectTrigger} aria-label="Book's genre">
                    <Select.Value placeholder="Select category" />
                    <Select.Icon>
                      <ChevronDownIcon />
                    </Select.Icon>
                  </button>
                }
                groups={categoryGroups}
              ></BaseSelect>
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="Description">
            <Form.Label className={classes.formLabel}>Description</Form.Label>
            <Form.Control asChild>
              <textarea className={classes.textarea} placeholder="Enter the description of the book" />
            </Form.Control>
          </Form.Field>
        </Form.Root>
      </div>
    </BaseDialog>
  );
}

export default ProductInfoDialog;
