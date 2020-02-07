import React from 'react';
import { action } from '@storybook/addon-actions';

import FormCheckbox from './FormCheckbox';
import '../../App/Root/Root.scss';

export default {
  component: FormCheckbox,
  title: 'Form Checkbox',
};

export const normal = () => (
  <FormCheckbox label='Normal' onChange={action('changed')} />
);

export const hover = () => (
  <FormCheckbox label='Normal' onChange={action('changed')} />
);

export const focus = () => (
  <FormCheckbox label='Focus' onChange={action('changed')} />
);

export const active = () => (
  <FormCheckbox label='Active' defaultValue onChange={action('changed')} />
);

export const withPlaceholder = () => (
  <FormCheckbox label='With Placeholder' onChange={action('changed')} />
);

export const disabled = () => (
  <FormCheckbox
    label='Disabled'
    disabled
  />
);
