import React, { ReactNode } from 'react'
import { Breadcrumb, IBreadcrumbItem } from '../../molecules'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export interface Props {
	breadcrumb?: IBreadcrumbItem[],
	title?: string,
	children: ReactNode
}

export const Body = (props: Props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<main>
						<div className="container-fluid">
							<h1 className="mt-4">{props.title}</h1>
							{props?.breadcrumb && <Breadcrumb items={props.breadcrumb} />}
							{props.children}
						</div>
					</main>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
