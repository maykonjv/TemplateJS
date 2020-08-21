import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, IBreadcrumb, IBreadcrumbItem } from './';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default {
	title: 'Molecules/Breadcrumb',
	component: Breadcrumb,
	argTypes: {
	},
} as Meta;


const Template: Story<IBreadcrumb> = (args) => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Breadcrumb {...args} />
			</Route>
		</Switch>
	</BrowserRouter>
);

export const Example1 = Template.bind({});
Example1.args = { items: [{ name: 'Usuário' }] }

export const Example2 = Template.bind({});
Example2.args = { items: [{ name: 'Cadastro', link: "/" }, { name: 'Usuário' }] }

export const Example3 = Template.bind({});
Example3.args = { items: [{ name: 'Home', link: "/" }, { name: 'Cadastro', link: "/" }, { name: 'Usuário' }] }