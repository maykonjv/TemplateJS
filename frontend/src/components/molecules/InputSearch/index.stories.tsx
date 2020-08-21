import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputSearch, Props } from './';

export default {
	title: 'Molecules/InputSearch',
	component: InputSearch,
	argTypes: {
	},
} as Meta;


const Template: Story<Props> = (args) => <InputSearch {...args} />;

export const Example1 = Template.bind({});
Example1.args = {}

export const Example2 = Template.bind({});
Example2.args = { placeholder: "Buscar" }
