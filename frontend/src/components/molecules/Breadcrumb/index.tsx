import React from 'react'

export interface IBreadcrumbItem {
	name: string,
	link?: string
}
export interface IBreadcrumb {
	items?: Array<IBreadcrumbItem>
}

export const Breadcrumb = (props: IBreadcrumb) => {
	return (
		<ol className="breadcrumb mb-4">
			{props.items?.map((o, i) => {
				return <li key={i} className="breadcrumb-item">{o.link ? <a href={o.link}>{o.name}</a> : o.name} </li>
			})}
		</ol>
	)
}
