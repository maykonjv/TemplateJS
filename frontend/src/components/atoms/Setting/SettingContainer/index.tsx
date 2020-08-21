import React from 'react'

export interface Props {
	icon?: string,
	children: React.ReactNode
}

export const SettingContainer = (props: Props) => {
	return (
		<ul className="navbar-nav ml-auto ml-md-0">
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{props.icon &&
						<i className={props.icon} />
					}
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
					{props.children}
				</div>
			</li>
		</ul>
	)
}
