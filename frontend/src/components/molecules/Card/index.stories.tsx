import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, Props } from './';

export default {
	title: 'Molecules/Card',
	component: Card,
	argTypes: {
	},
} as Meta;


const Template: Story<Props> = (args) => <Card {...args} />;

export const Example1 = Template.bind({});
Example1.args = { title: "Login" } as Props

export const Example2 = Template.bind({});
Example2.args = { title: "Login", footer: "Need an account? Sign up!", footerLink: "register.html" } as Props
