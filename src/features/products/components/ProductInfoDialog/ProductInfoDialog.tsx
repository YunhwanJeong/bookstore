import { useAppDispatch } from '@/app/store/hooks';
import bookThumbnail from '@/assets/book.png';
import { BaseDialog, BaseSelect } from '@/common/components';
import { useCategoryGroups } from '@/features/products/hooks';
import { addProduct } from '@/features/products/slices';
import * as Form from '@radix-ui/react-form';
import { PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import classes from './ProductInfoDialog.module.css';

const FORM_ID = 'ProductInfoDialogForm';

// Helper function to safely extract data from form
const extractFormData = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  return {
    name: (formData.get('name') as string) || '',
    price: Number(formData.get('price')),
    category: (formData.get('category') as string) || '',
    description: (formData.get('description') as string) || '',
  };
};

function ProductInfoDialog() {
  const { categoryGroups } = useCategoryGroups();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleProductInfoDialogFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = extractFormData(e.target as HTMLFormElement);

    dispatch(
      addProduct({
        id: uuidV4(),
        img: bookThumbnail,
        name: formData.name,
        price: formData.price,
        category: formData.category,
        description: formData.description,
      }),
    );
    setOpen(false);
  };

  return (
    <BaseDialog
      trigger={
        <button className={classes.triggerButton} name="add a book" onClick={() => setOpen(true)}>
          <PlusIcon />
          <span>Add a Book</span>
        </button>
      }
      title={'Add a Book'}
      formId={FORM_ID}
      open={open}
      onOpenChange={setOpen}
    >
      <div className={classes.formWrapper}>
        <img src={bookThumbnail} alt="product thumbnail" />
        <Form.Root className={classes.formRoot} id={FORM_ID} onSubmit={handleProductInfoDialogFormSubmit}>
          <Form.Field className={classes.formField} name="name">
            <div className={classes.formLabelWrapper}>
              <Form.Label className={classes.formLabel}>Name</Form.Label>
              <Form.Message className={classes.formMessage} match="valueMissing">
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className={classes.input} type="text" placeholder="Enter book name" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="price">
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
          <Form.Field className={classes.formField} name="category">
            <div className={classes.formLabelWrapper}>
              <Form.Label className={classes.formLabel}>Category</Form.Label>
              <Form.Message className={classes.formMessage} match="valueMissing">
                Please select the category
              </Form.Message>
            </div>
            <Form.Control asChild>
              <BaseSelect groups={categoryGroups} required></BaseSelect>
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="description">
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
