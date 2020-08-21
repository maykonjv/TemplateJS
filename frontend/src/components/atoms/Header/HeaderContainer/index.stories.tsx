import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderContainer, Props } from './';

export default {
	title: 'Atoms/HeaderContainer',
	component: HeaderContainer,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => <HeaderContainer  {...args} ><span style={{ color: "white" }}>Container</span></HeaderContainer>;

export const Unique = Template.bind({});