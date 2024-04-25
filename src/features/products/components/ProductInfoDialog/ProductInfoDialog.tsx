import { useAppDispatch } from '@/app/store/hooks';
import bookThumbnail from '@/assets/book.png';
import { BaseDialog, BaseSelect } from '@/common/components';
import { useCategoryGroups } from '@/features/products/hooks';
import type { IProduct } from '@/features/products/model';
import { addProduct, editProduct } from '@/features/products/slices';
import * as Form from '@radix-ui/react-form';
import { PlusIcon } from '@radix-ui/react-icons';
import { v4 as uuidV4 } from 'uuid';
import classes from './ProductInfoDialog.module.css';

interface IProps {
  selectedProduct?: IProduct;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FORM_ID = 'ProductInfoDialogForm';

// Helper function to safely extract data from form
const extractFormData = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const selectedOption = form.querySelector('select option:checked');

  return {
    name: (formData.get('name') as string) || '',
    price: Number(formData.get('price')),
    category: {
      value: (formData.get('category') as string) || '',
      label: selectedOption?.textContent || '',
    },
    description: (formData.get('description') as string) || '',
  };
};

function ProductInfoDialog({ selectedProduct, open, onOpenChange }: IProps) {
  const { categoryGroups } = useCategoryGroups();
  const dispatch = useAppDispatch();
  const dialogTitle = selectedProduct ? 'Book Details' : 'Add a Book';

  const handleProductInfoDialogFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = extractFormData(e.target as HTMLFormElement);

    if (selectedProduct) {
      dispatch(
        editProduct({
          id: selectedProduct.id,
          img: selectedProduct.img,
          name: formData.name,
          price: formData.price,
          category: formData.category,
          description: formData.description,
        }),
      );
    } else {
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
    }

    onOpenChange(false);
  };

  return (
    <BaseDialog
      trigger={
        <button className={classes.triggerButton} name="add a book" onClick={() => onOpenChange(true)}>
          <PlusIcon />
          <span>Add a Book</span>
        </button>
      }
      title={dialogTitle}
      formId={FORM_ID}
      open={open}
      onOpenChange={onOpenChange}
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
              <input
                className={classes.input}
                defaultValue={selectedProduct?.name}
                type="text"
                placeholder="Enter book name"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="price">
            <div className={classes.formLabelWrapper}>
              <Form.Label className={classes.formLabel}>Price - $</Form.Label>
              <Form.Message className={classes.formMessage} match="valueMissing">
                Please enter the price
              </Form.Message>
              <Form.Message className={classes.formMessage} match="stepMismatch">
                Please enter up to two decimal places
              </Form.Message>
              <Form.Message className={classes.formMessage} match="rangeUnderflow">
                Price should be greater than or equal to 0
              </Form.Message>
              <Form.Message className={classes.formMessage} match="badInput">
                Please enter a valid price
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className={classes.input}
                defaultValue={selectedProduct?.price}
                type="number"
                min="0"
                placeholder="0.00"
                step="0.01"
                required
              />
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
              <BaseSelect groups={categoryGroups} defaultValue={selectedProduct?.category.value} required />
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="description">
            <Form.Label className={classes.formLabel}>Description</Form.Label>
            <Form.Control asChild>
              <textarea
                className={classes.textarea}
                defaultValue={selectedProduct?.description}
                placeholder="Enter the description of the book"
              />
            </Form.Control>
          </Form.Field>
        </Form.Root>
      </div>
    </BaseDialog>
  );
}

export default ProductInfoDialog;
