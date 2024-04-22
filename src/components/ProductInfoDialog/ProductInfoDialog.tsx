import bookThumbnail from '@/assets/book.png';
import { BaseDialog } from '@/components';
import * as Form from '@radix-ui/react-form';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, PlusIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
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
    >
      <div className={classes.formWrapper}>
        <img src={bookThumbnail} alt="product thumbnail" />
        <Form.Root className={classes.formRoot}>
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
              <Select.Root>
                <Select.Trigger className={classes.selectTrigger} aria-label="Book's genre">
                  <Select.Value placeholder="Select category" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className={classes.selectContent}>
                    <Select.ScrollUpButton className={classes.selectScrollButton}>
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className={classes.selectViewPort}>
                      <Select.Item className={classes.selectItem} value="Mystery">
                        <Select.ItemText>Mystery</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item className={classes.selectItem} value="Suspense">
                        <Select.ItemText>Suspense</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item className={classes.selectItem} value="Thriller">
                        <Select.ItemText>Thriller</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item className={classes.selectItem} value="Romance">
                        <Select.ItemText>Romance</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item className={classes.selectItem} value="Manga">
                        <Select.ItemText>Manga</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item className={classes.selectItem} value="Self-Help">
                        <Select.ItemText>Self-Help</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item className={classes.selectItem} value="Literary Fiction">
                        <Select.ItemText>Literary Fiction</Select.ItemText>
                        <Select.ItemIndicator className={classes.selectItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    </Select.Viewport>
                    <Select.ScrollDownButton className={classes.selectScrollButton}>
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </Form.Control>
          </Form.Field>
          <Form.Field className={classes.formField} name="Description">
            <Form.Label className={classes.formLabel}>Description</Form.Label>
            <Form.Control asChild>
              <textarea className={classes.textarea} placeholder="Enter the description of the book" />
            </Form.Control>
          </Form.Field>

          <Form.Submit />
        </Form.Root>
      </div>
    </BaseDialog>
  );
}

export default ProductInfoDialog;
