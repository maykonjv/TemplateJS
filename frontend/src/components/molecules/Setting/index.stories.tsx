import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Setting } from './';

export default {
	title: 'Molecules/Setting',
	component: Setting,
	argTypes: {
	},
} as Meta;


const Template: Story = (args) => <Setting {...args} />;

export const Example1 = Template.bind({});
Example1.args = {}
