import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Login, { Props } from './';
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

export default {
	title: 'Pages/Login',
	component: Login,
	argTypes: {
	},
} as Meta;

const Template: Story<Props> = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Login {...args}>
				</Login>
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = {}
