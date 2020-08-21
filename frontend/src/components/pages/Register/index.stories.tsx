import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Register, { Props } from '.';

export default {
	title: 'Pages/Register',
	component: Register,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => (
	<Register {...args}>
	</Register>
);

export const Example1 = Template.bind({});
Example1.args = {}
