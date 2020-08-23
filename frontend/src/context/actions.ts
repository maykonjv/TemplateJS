export type Dispatch = React.Dispatch<IAction>;

export interface IState {
	isAuthenticated: boolean,
	user: any
}
export interface IAction {
	type: string;
	payload: any;
}

export const ACTION_TYPE = {
	AUTH: 'AUTH',
	LOGOUT: 'LOGOUT'
};

export const auth = (dispatch: Dispatch, data: any) => {
	return dispatch({
		type: ACTION_TYPE.AUTH,
		payload: data
	});
};

export const logout = (dispatch: Dispatch) => {
	return dispatch({
		type: ACTION_TYPE.LOGOUT,
		payload: false
	});
};
