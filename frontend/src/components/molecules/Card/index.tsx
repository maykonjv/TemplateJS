import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
	size: number,
	title: string,
	footer?: string,
	footerLink?: string,
	children: ReactNode
}

export const Card = (props: Props) => {
	return (
		<div className={"col-lg-" + props.size}>
			<div className="card shadow-lg border-0 rounded-lg mt-5">
				<div className="card-header"><h3 className="text-center font-weight-light my-4">{props.title}</h3></div>
				<div className="card-body">
					{props.children}
				</div>
				{props.footer &&
					<div className="card-footer text-center">
						<div className="small"><Link to={props.footerLink || "#"}>{props.footer}</Link></div>
					</div>
				}
			</div>
		</div>
	)
}
