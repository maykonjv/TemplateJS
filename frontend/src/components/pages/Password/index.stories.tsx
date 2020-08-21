import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Password, { Props } from '.';

export default {
	title: 'Pages/Password',
	component: Password,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => (
	<Password {...args}>
	</Password>
);

export const Example1 = Template.bind({});
Example1.args = {}
