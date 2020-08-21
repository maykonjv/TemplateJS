import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
	name: string,
	link?: string
}

export const SettingItem = (props: Props) => {
	return (
		<Link className="dropdown-item" to={props.link || "#"}>{props.name}</Link>
	)
}
