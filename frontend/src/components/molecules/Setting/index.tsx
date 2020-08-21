import React from 'react'
import { SettingContainer, SettingItem, SettingDivider } from '../../atoms/Setting'

export const Setting = () => {
	return (
		<SettingContainer icon="fas fa-user fa-fw" >
			<SettingItem name="Settings" />
			<SettingItem name="Activity Log" />
			<SettingDivider />
			<SettingItem name="Logout" link="/login" />
		</SettingContainer >
	)
}
