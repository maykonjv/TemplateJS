import React from 'react'

export interface Props {
	placeholder?: string,

}

export const InputSearch = (props: Props) => {
	return (
		<form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
			<div className="input-group">
				<input className="form-control" type="text" placeholder={props.placeholder || "Search for..."} aria-label="Search" aria-describedby="basic-addon2" />
				<div className="input-group-append">
					<button className="btn btn-primary" type="button"><i className="fas fa-search" /></button>
				</div>
			</div>
		</form>
	)
}
