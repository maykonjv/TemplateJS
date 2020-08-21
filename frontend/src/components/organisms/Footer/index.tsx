import React from 'react'

export interface Props {
	site?: string,
	year: number,
	policyTerm?: string,
	policyTermLink?: string,
}

export const Footer = (props: Props) => {
	return (
		<footer className="py-4 bg-light mt-auto">
			<div className="container-fluid">
				<div className="d-flex align-items-center justify-content-between small">
					<div className="text-muted">Copyright &copy; {props.site} {props.year}</div>
					<div>
						{props.policyTerm ?
							<div>
								<a href={props.policyTermLink || "#"}>{props.policyTerm}</a>
							</div>
							: null}
					</div>
				</div>
			</div>
		</footer>
	)
}
