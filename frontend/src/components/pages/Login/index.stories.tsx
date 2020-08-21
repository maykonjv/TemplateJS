import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Login, { Props } from './';

export default {
	title: 'Pages/Login',
	component: Login,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => (
	<Login {...args}>
	</Login>
);

export const Example1 = Template.bind({});
Example1.args = {}
