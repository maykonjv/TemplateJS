import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Password, { Props } from '.';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default {
	title: 'Pages/Password',
	component: Password,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Password {...args}>
				</Password>
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = {}
