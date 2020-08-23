import React from 'react';
import { IAction, IState, ACTION_TYPE } from './actions';

const initialState: IState = {
	isAuthenticated: false,
	user: {},
}

const localState = JSON.parse(localStorage.getItem("managerjs:global") || JSON.stringify(initialState));
console.log(localState)

export const Store = React.createContext<IState | any>({})

function reducer(state: IState, action: IAction): IState {
	console.log("reducer:" + JSON.stringify(action))
	switch (action.type) {
		case ACTION_TYPE.AUTH:
			let newState = { ...state, isAuthenticated: true, user: action.payload }
			localStorage.setItem('managerjs:global', JSON.stringify(newState));
			return newState;
		case ACTION_TYPE.LOGOUT:
			localStorage.clear();
			return { ...state, isAuthenticated: false }

		default:
			return state
	}
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
	const [state, dispatch] = React.useReducer(reducer, localState)
	return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}