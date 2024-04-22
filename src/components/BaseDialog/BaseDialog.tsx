import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { ReactNode } from 'react';
import classes from './BaseDialog.module.css';

interface IProps {
  trigger: ReactNode;
  title: string;
  children?: ReactNode;
  cancelLabel?: string;
  okLabel?: string;
  formId?: string;
}

function BaseDialog({ trigger, title, children, cancelLabel = 'Cancel', okLabel = 'Save', formId }: IProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.dialogOverlay} />
        <Dialog.Content className={classes.dialogContent}>
          <Dialog.Title className={classes.dialogTitle}>{title}</Dialog.Title>
          {children}
          <div className={classes.dialogFooter}>
            <Dialog.Close asChild>
              <button className={classes.button}>{cancelLabel}</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className={`${classes.button} ${classes.primary}`} form={formId}>
                {okLabel}
              </button>
            </Dialog.Close>
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
