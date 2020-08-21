import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, IHeader } from './';

export default {
	title: 'Organisms/Header',
	component: Header,
	argTypes: {
	},
} as Meta;


const Template: Story<IHeader> = (args) => <Header {...args} />;

export const Example1 = Template.bind({});
Example1.args = {}

export const Example2 = Template.bind({});
Example2.args = { showSearch: true }

export const Example3 = Template.bind({});
Example3.args = { showSearch: true, title: "My Application" }