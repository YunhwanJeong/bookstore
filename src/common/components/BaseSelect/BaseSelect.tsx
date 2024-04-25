import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import classes from './BaseSelect.module.css';

interface IProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  groups: {
    label: string;
    items: {
      value: string;
      label: string;
    }[];
  }[];
}

// At the moment, it is not possible to compose Form with Radix's other form primitives such as Checkbox, Select, etc. They are working on a solution for this.
// Forwarding the ref is necessary for the form to work correctly.
// https://www.radix-ui.com/primitives/docs/components/form#composing-with-your-own-components
// TODO: Change this to use Radix's Select primitive when it is possible to compose it with Form.
const BaseSelect = forwardRef<HTMLSelectElement, IProps>(({ groups, defaultValue, ...props }, forwardedRef) => {
  return (
    <select className={classes.select} defaultValue={defaultValue} {...props} ref={forwardedRef}>
      {groups.map((group) => {
        return (
          <optgroup key={group.label} label={group.label}>
            {group.items.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </optgroup>
        );
      })}
    </select>
  );
});

export default BaseSelect;
