import React from 'react';
import { Footer } from '../../organisms';

export interface ITemplate {
	children: React.ReactNode
}

export default function TemplateWithoutMenu(props: ITemplate) {
	return (
		<div className="bg-primary">
			<div id="layoutAuthentication">
				<div id="layoutAuthentication_content">
					<main>
						<div className="container">
							<div className="row justify-content-center">
								{props.children}
							</div>
						</div>
					</main>
				</div>
				<Footer year={2020} policyTerm="Privacy Policy · Terms & Conditions" site="ManagerJS" />
			</div>
		</div>
	);
}
