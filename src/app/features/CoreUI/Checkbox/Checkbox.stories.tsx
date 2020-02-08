import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import '../../App/Root/Root.scss';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => (
  <Checkbox label='normal' onChange={action('changed')} />
);

export const disabled = () => (
  <Checkbox
    label='Disabled Text'
    defaultValue={false}
    disabled
    onChange={action('changed')}
  />
);
