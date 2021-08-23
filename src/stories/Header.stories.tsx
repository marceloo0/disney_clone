import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const ColorBlack = Template.bind({});
ColorBlack.args = {
  colorBlack: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
