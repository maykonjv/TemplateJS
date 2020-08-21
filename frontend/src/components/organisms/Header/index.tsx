import React from 'react'
import { HeaderContainer, HeaderButtonMenu, HeaderTitle } from '../../atoms'
import { InputSearch, Setting } from '../../molecules'

export interface IHeader {
	title: string,
	showSearch: boolean,
}

export const Header = (props: IHeader) => {
	return (
		<HeaderContainer>
			<HeaderTitle title={props.title} />
			<HeaderButtonMenu />
			{props.showSearch && <InputSearch />}
			<Setting />
		</HeaderContainer>
	)
}
