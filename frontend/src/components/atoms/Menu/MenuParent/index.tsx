import React from 'react'

export interface Props {
	name: string,
	childID: string
}

export const MenuParent = (props: Props) => {
	return (
		<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={"#" + props.childID} aria-expanded="false" aria-controls={props.childID}>
			<div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
			{props.name}
			<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
		</a>
	)
}
