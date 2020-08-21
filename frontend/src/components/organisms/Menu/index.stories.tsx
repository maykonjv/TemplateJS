import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, Props } from './';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default {
	title: 'Organisms/Menu',
	component: Menu,
	argTypes: {
	},
} as Meta;


const Template: Story<Props> = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Menu  {...args} />
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = {}
