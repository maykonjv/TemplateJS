import React from 'react';
import { Header, Menu, Footer } from '../../organisms';

export interface ITemplate {
	children: React.ReactNode
}

export default function TemplateWithMenu(props: ITemplate) {
	return (
		<div>
			<Header title="Manager JS" showSearch />
			<div id="layoutSidenav">
				<Menu />
				<div id="layoutSidenav_content">
					{props.children}
					<Footer year={2020} policyTerm="Privacy Policy · Terms & Conditions" site="ManagerJS" />
				</div>
			</div>
		</div>
	);
}
