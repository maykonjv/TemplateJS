import React from 'react'

export interface Props {
	children: React.ReactNode
}

export const HeaderContainer = (props: Props) => {
	return (
		<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
			{props.children}
		</nav>
	)
}
