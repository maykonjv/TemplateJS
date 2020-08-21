import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Setting } from './';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default {
	title: 'Molecules/Setting',
	component: Setting,
	argTypes: {
	},
} as Meta;


const Template: Story = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Setting {...args} />
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = {}
