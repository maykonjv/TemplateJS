export interface Auth {
	token: string;
	user: {
		name: string;
		email: string;
	};
}

export function signIn(): Promise<Auth> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token: 'asfjaksldfjowerj2309r0923432oklj5l3j5k43j5kl32',
				user: {
					name: 'Rodolfo',
					email: 'rodolfo@email.com'
				}
			});
		}, 2000);
	});
}
