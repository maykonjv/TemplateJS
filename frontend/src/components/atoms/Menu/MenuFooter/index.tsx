import React from 'react'

export interface Props {
	label: string,
	value: string
}

export const MenuFooter = (props: Props) => {
	return (
		<div className="sb-sidenav-footer">
			<div className="small">{props.label}</div>
			{props.value}
		</div>
	)
}
