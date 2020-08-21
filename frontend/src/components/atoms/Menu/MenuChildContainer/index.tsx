import React, { ReactNode } from 'react'

export interface Props {
	id: string,
	parentID: string,
	children: ReactNode
}

export const MenuChildContainer = (props: Props) => {
	return (
		<div className="collapse" id={props.id} aria-labelledby="headingOne" data-parent={"#" + props.parentID}>
			<nav className="sb-sidenav-menu-nested nav">
				{props.children}
			</nav>
		</div>
	)
}
