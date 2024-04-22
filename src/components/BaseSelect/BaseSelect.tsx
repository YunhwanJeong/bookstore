import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import type { ReactNode } from 'react';
import React from 'react';
import classes from './BaseSelect.module.css';

interface IProps {
  trigger: ReactNode;
  groups: {
    label: string;
    items: {
      value: string;
      label: string;
    }[];
  }[];
}

function BaseSelect({ trigger, groups }: IProps) {
  return (
    <Select.Root>
      <Select.Trigger asChild>{trigger}</Select.Trigger>
      <Select.Portal>
        <Select.Content className={classes.selectContent}>
          <Select.ScrollUpButton className={classes.selectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={classes.selectViewPort}>
            {groups.map((group, i, arr) => (
              <>
                <Select.Group key={group.label}>
                  {arr.length > 1 && <Select.Label className={classes.selectLabel}>{group.label}</Select.Label>}
                  {group.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Select.Group>
                {arr[i + 1] && <Select.Separator className={classes.selectSeperator} />}
              </>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className={classes.selectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef<HTMLDivElement | null, Select.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={`${classes.selectItem} ${className}`} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={classes.selectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default BaseSelect;
