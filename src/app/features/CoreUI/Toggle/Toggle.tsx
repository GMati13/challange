import React, { FC, forwardRef, Ref, useState } from 'react';
import classNames from 'classnames';

import Label from '../Label/Label';
import styles from './Toggle.module.scss';
import Checkbox from '../Checkbox/Checkbox';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to be displayed alongside with toggle input
   */
  label?: string;

  /**
   * Default value of toggle input, does not make the input controlled
   */
  defaultValue?: boolean;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Register callback for change event
   */
  onChange?: (newChecked: boolean) => void;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const Toggle: FC<Props> = forwardRef((props, ref) => {
  const { label, defaultValue, disabled, onChange, ...otherProps } = props;
  const [isChecked, setIsChecked] = useState(!!defaultValue);

  const toggle = (value: boolean) => {
    setIsChecked(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Label title={label || ''} disabled={disabled} position='right'>
      <span
        className={classNames(styles.toggleButton, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
        })}
      >
        <div className={classNames(styles.toggleHandle, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
        })}
        />
      </span>
      <Checkbox
        className={styles.input}
        disabled={disabled}
        onChange={toggle}
        ref={ref}
        {...otherProps}
      />
    </Label>
  );
});

export default Toggle;
