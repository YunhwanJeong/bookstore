import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import type { ReactNode } from 'react';
import classes from './BaseDialog.module.css';

interface IProps {
  open: boolean;
  trigger: ReactNode;
  title: string;
  children?: ReactNode;
  cancelLabel?: string;
  okLabel?: string;
  formId?: string;
  onOpenChange: (open: boolean) => void;
}

function BaseDialog({
  trigger,
  title,
  children,
  cancelLabel = 'Cancel',
  okLabel = 'Save',
  formId,
  open,
  onOpenChange,
}: IProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.dialogOverlay} />
        <Dialog.Content className={classes.dialogContent}>
          <Dialog.Title className={classes.dialogTitle}>{title}</Dialog.Title>
          <VisuallyHidden.Root>
            <Dialog.Description>base dialog</Dialog.Description>
          </VisuallyHidden.Root>
          {children}
          <div className={classes.dialogFooter}>
            <Dialog.Close asChild>
              <button className={classes.button}>{cancelLabel}</button>
            </Dialog.Close>
            {formId ? (
              <button type="submit" className={`${classes.button} ${classes.primary}`} form={formId}>
                {okLabel}
              </button>
            ) : (
              <Dialog.Close asChild>
                <button className={`${classes.button} ${classes.primary}`}>{okLabel}</button>
              </Dialog.Close>
            )}
          </div>
          <Dialog.Close asChild>
            <button className={classes.iconButton} aria-label="Close">
              <Cross2Icon width={20} height={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default BaseDialog;
