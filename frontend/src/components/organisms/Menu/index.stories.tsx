import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, Props } from './';

export default {
	title: 'Organisms/Menu',
	component: Menu,
	argTypes: {
	},
} as Meta;


const Template: Story<Props> = (args) => <Menu  {...args} />;

export const Example1 = Template.bind({});
Example1.args = {}
