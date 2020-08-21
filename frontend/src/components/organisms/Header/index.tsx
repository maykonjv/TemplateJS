import React from 'react'
import { HeaderContainer, HeaderButtonMenu, HeaderTitle } from '../../atoms'
import { InputSearch, Setting } from '../../molecules'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export interface IHeader {
	title: string,
	showSearch: boolean,
}

export const Header = (props: IHeader) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<HeaderContainer>
						<HeaderTitle title={props.title} />
						<HeaderButtonMenu />
						{props.showSearch && <InputSearch />}
						<Setting />
					</HeaderContainer>
				</Route>
			</Switch>
		</BrowserRouter>

	)
}
