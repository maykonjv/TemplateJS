import React, { ReactElement } from 'react'
import { TemplateWithMenu } from '../../templates'
import { Body } from '../../organisms'
import { IBreadcrumbItem } from '../../molecules'

export interface Props {
}

export default function Home(props: Props): ReactElement {
	let breadcrumb = [] as IBreadcrumbItem[]
	breadcrumb.push({ name: "Cadastro", link: "index.html" })
	breadcrumb.push({ name: "Usuário" })
	return (
		<TemplateWithMenu>
			<Body title="User" breadcrumb={breadcrumb}>
				<span>teste</span>
			</Body>
		</TemplateWithMenu >
	)
}
