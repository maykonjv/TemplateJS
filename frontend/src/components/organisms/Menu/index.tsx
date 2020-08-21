import React from 'react'
import { MenuContainer, MenuTitle, MenuItem, MenuParent, MenuChildContainer } from '../../atoms'

export interface Props {
}

export const Menu = (props: Props) => {
	return (
		<MenuContainer footerLabel="Logged in as:" footerValue="Manager JS">
			<MenuTitle name="Core" />
			<MenuItem name="Dashboard" link="/" icon="fas fa-tachometer-alt" />
			<MenuTitle name="Interface" />

			<MenuParent name="Layouts" childID="collapseLayouts" />
			<MenuChildContainer id="collapseLayouts" parentID="sidenavAccordion">
				<MenuItem name="Static Navigation" link="/" />
				<MenuItem name="Light Sidenav" link="/" />
			</MenuChildContainer>

			<MenuParent name="Pages" childID="collapsePages" />
			<MenuChildContainer id="collapsePages" parentID="sidenavAccordion">
				<MenuParent name="Autentication" childID="pagesCollapseAuth" />
				<MenuChildContainer id="pagesCollapseAuth" parentID="collapsePages">
					<MenuItem name="Login" link="/login" />
					<MenuItem name="Register" link="/register" />
					<MenuItem name="Forgot Password" link="/password" />
				</MenuChildContainer>
				<MenuParent name="Error" childID="pagesCollapseError" />
				<MenuChildContainer id="pagesCollapseError" parentID="collapsePages">
					<MenuItem name="401 Page" link="/401" />
					<MenuItem name="404 Page" link="/404" />
					<MenuItem name="500 Page" link="/500" />
				</MenuChildContainer>
			</MenuChildContainer>

			<MenuTitle name="Addons" />
			<MenuItem name="Charts" link="/" icon="fas fa-chart-area" />
			<MenuItem name="Tables" link="/" icon="fas fa-table" />
		</MenuContainer>
	)
}
