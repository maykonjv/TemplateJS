import React, { useContext } from 'react'
import { SettingContainer, SettingItem, SettingDivider } from '../../atoms/Setting'
import { Store } from '../../../context/global';
import { logout } from '../../../context/actions';

export const Setting = () => {
	const { dispatch } = useContext(Store);

	return (
		<SettingContainer icon="fas fa-user fa-fw" >
			<SettingItem name="Settings" />
			<SettingItem name="Register" link="/register" />
			<SettingDivider />
			<SettingItem name="Logout" event={() => logout(dispatch)} />
		</SettingContainer>
	)
}
