export type Dispatch = React.Dispatch<IAction>;

export interface IState {
	isAuthenticated: boolean;
}
export interface IAction {
	type: string;
	payload: any;
}

export const ACTION_TYPE = {
	AUTH: 'AUTH',
	LOGOUT: 'LOGOUT'
};

export const auth = (dispatch: Dispatch) => {
	return dispatch({
		type: ACTION_TYPE.AUTH,
		payload: true
	});
};

export const logout = (dispatch: Dispatch) => {
	return dispatch({
		type: ACTION_TYPE.LOGOUT,
		payload: false
	});
};
