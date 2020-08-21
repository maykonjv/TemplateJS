import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer, Props } from './';

export default {
	title: 'Organisms/Footer',
	component: Footer,
	argTypes: {
	},
} as Meta;


const Template: Story<Props> = (args) => <Footer {...args} />;

export const Example1 = Template.bind({});
Example1.args = { year: 2020 }

export const Example2 = Template.bind({});
Example2.args = { year: 2020, policyTerm: "Privacy Policy · Terms & Conditions" }

export const Example3 = Template.bind({});
Example3.args = { year: 2020, policyTerm: "Privacy Policy · Terms & Conditions", site: "ManagerJS" }