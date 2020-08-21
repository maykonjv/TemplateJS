import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, IHeader } from './';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

export default {
	title: 'Organisms/Header',
	component: Header,
	argTypes: {
	},
} as Meta;


const Template: Story<IHeader> = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Header {...args} />
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = {}

export const Example2 = Template.bind({});
Example2.args = { showSearch: true }

export const Example3 = Template.bind({});
Example3.args = { showSearch: true, title: "My Application" }