import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';
import { auth } from '../../../context/actions';
import { Store } from '../../../context/global';

interface IAuth {
	identifier: string,
	password: string,
}

export const LoginContext = React.createContext({
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => { },
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => { },
	isLoading: false,
	error: ''
});


export function LoginProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
	const { dispatch } = useContext(Store);
	const [values, setValues] = useState<IAuth>({} as IAuth);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const history = useHistory()


	function onchange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name, } = event.target;
		setValues({
			...values,
			[name]: value,
		})
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		setLoading(true)
		const form = event.currentTarget;
		event.preventDefault();
		console.log(form)
		if (form.checkValidity() === false) {
			setLoading(false)
			setError("Falha no login")
			return;
		}

		try {
			const { data, status } = await api.post('/auth/local', values);

			if (status === 200) {
				auth(dispatch, data);
				setLoading(false)
				history.push("/")
			} else {
				setLoading(false)
				setError(data[0].messages[0].message)
			}
		} catch (error) {
			setLoading(false)
			console.log(error.response.data.message[0].messages[0].message)
			setError(error.response.data.message[0].messages[0].message)
		}
	}


	return <LoginContext.Provider value={{ handleSubmit, onchange, isLoading, error }}>
		{children}
	</LoginContext.Provider>
}
