import React from 'react'

export interface Props {
	name: string
}

export const MenuTitle = (props: Props) => {
	return (
		<div className="sb-sidenav-menu-heading">{props.name}</div>
	)
}
