import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
	title: string,
}

export const HeaderTitle = (props: Props) => {
	return (
		<Link className="navbar-brand" to="/">{props.title}</Link>
	)
}
