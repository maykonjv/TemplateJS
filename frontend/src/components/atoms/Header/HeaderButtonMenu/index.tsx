import React from 'react'

export interface Props {
}

export const HeaderButtonMenu = (props: Props) => {
	return (
		<a className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle">
			<i className="fas fa-bars" />
		</a>
	)
}
