import React, { ReactNode } from 'react'
import { MenuFooter } from '../MenuFooter'

export interface Props {
	footerLabel: string,
	footerValue: string,
	children: ReactNode
}

export const MenuContainer = (props: Props) => {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
				<div className="sb-sidenav-menu">
					<div className="nav">
						{props.children}
					</div>
				</div>
				<MenuFooter label={props.footerLabel} value={props.footerValue} />
			</nav>
		</div>
	)
}
