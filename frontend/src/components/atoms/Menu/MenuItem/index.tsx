import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
	name: string,
	link: string
	icon?: string,
}

export const MenuItem = (props: Props) => {
	return (
		<Link className="nav-link" to={props.link}>
			{props.icon &&
				<div className="sb-nav-link-icon"><i className={props.icon} /></div>
			}
			{props.name}
		</Link>
	)
}
