import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
	event?: any
	name: string,
	link?: string
}

export const SettingItem = (props: Props) => {
	return (
		<Link onClick={props.event || null} className="dropdown-item" to={props.link || "#"}>{props.name}</Link>
	)
}
