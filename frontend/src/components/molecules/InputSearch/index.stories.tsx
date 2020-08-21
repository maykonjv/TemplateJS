import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputSearch, Props } from './';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default {
	title: 'Molecules/InputSearch',
	component: InputSearch,
	argTypes: {
	},
} as Meta;


const Template: Story<Props> = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<InputSearch {...args} />
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = {}

export const Example2 = Template.bind({});
Example2.args = { placeholder: "Buscar" }
