import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TemplateWithMenu, { ITemplate } from './';
import { Body } from '../../organisms';
import { IBreadcrumbItem } from '../../molecules';

export default {
	title: 'Templetes/TemplateWithMenu',
	component: TemplateWithMenu,
	argTypes: {
	},
} as Meta;

const items = [{ name: 'Cadastro', link: "/" }, { name: 'Usuário' }] as IBreadcrumbItem[];
const Template: Story<ITemplate> = (args) => (
	<TemplateWithMenu {...args}>
		<Body breadcrumb={items} title="ManagerJS">body</Body>
	</TemplateWithMenu>
);

export const Example1 = Template.bind({});
Example1.args = {}
