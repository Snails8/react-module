import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Button',
    },
    colorType: {
      control: { type: 'select' },
      options: ['primary', 'tertiary'],
    },
    width: {
      control: 'number',
      defaultValue: 70,
    },
    height: {
      control: 'number',
      defaultValue: 70,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    handleClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
