import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';
import { logout, auth } from '../../../context/actions';
import { Store } from '../../../context/global';

interface IAuth {
	user: string,
	password: string,
}

export const LoginContext = React.createContext({
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => { },
	handleSubmit: () => { },
	isLoading: false
});


export function LoginProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
	const { dispatch } = useContext(Store);
	const [values, setValues] = useState<IAuth>({ user: '', password: '' });
	const [isLoading, setLoading] = useState(false);
	const history = useHistory()


	function onchange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target;
		console.log('onchange:' + value)
		setValues({
			...values,
			[name]: value,
		})
	}

	async function handleSubmit() {
		setLoading(true)
		setTimeout(async () => {
			try {
				const data = values;
				// const request = await api.post("/auth", data);
				// if (request.status === 200) {
					auth(dispatch);
					setLoading(false)
					history.push("/")
				// }
			} catch (e) {
				setLoading(false)
				console.error(e);
			}
		}, 5000);
	}

	useEffect(() => {
		logout(dispatch);
	}, [])

	return <LoginContext.Provider value={{ handleSubmit, onchange, isLoading }}>
		{children}
	</LoginContext.Provider>
}
