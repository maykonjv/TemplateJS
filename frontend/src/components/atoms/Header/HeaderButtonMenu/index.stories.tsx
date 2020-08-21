import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderButtonMenu, Props } from './';

export default {
	title: 'Atoms/HeaderButtonMenu',
	component: HeaderButtonMenu,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => <HeaderButtonMenu {...args} />;

export const Unique = Template.bind({});