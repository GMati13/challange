import React, {FC, forwardRef, Ref, useCallback, useRef, useState} from 'react';
import classNames from 'classnames';

import styles from './FormCheckbox.module.scss';
import Label from '../Label/Label';
import CheckboxIcon from '../Icons/CheckboxIcon';
import Checkbox from '../Checkbox/Checkbox';
import useHover from '../../../../utils/hooks/useHover';
import useFocus from "../../../../utils/hooks/useFocus";

interface Props {
  /**
   * Label to show above checkbox input
   */
  label?: string;

  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Default value of checkbox input
   */
  defaultValue?: boolean;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Register callback for change event
   */
  onChange?: () => void;

  /**
   * Focus mode. Default: false
   */
  isFocused?: boolean;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const FormCheckbox: FC<Props> = forwardRef((props, ref) => {
  const { label, defaultValue, onChange, hovered, ...otherProps } = props;

  const checkbox = useRef(false);

  const isFocused = useFocus(checkbox);

  const isHovered = useHover(checkbox);

  const [isChecked, setIsChecked] = useState(defaultValue);

  const toggle = (value: boolean) => {
    setIsChecked(value);
    if (onChange) {
      onChange(value);
    }
  };


  return (
    <Label title={label} className={classNames(styles.label)}>
      <CheckboxIcon isActive={isChecked} hasHover={isHovered || isFocused} />
      <Checkbox
        className={classNames(styles.input)}
        defaultValue={defaultValue}
        onChange={toggle}
        ref={ref}
        {...otherProps}
      />
    </Label>
  );
});

export default FormCheckbox;
