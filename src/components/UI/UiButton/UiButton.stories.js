import React from 'react';
import { UiButton } from './UiButton';

export default {
  title: 'UI/UiButton',
  component: UiButton,
};
const Template = (args) => <UiButton {...args} />;
const props = {
  name: 'Test',
  onClick: () => {
    console.log('Hello');
  },
  disabled: false,
  theme: 'light',
};

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: 'light',
};
export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: 'dark',
};

export const Disable = Template.bind({});

Disable.args = {
  ...props,
  disabled: 'true',
};
