const getState = ({ getStore, setStore }) => {
	// const apirUrl = "https://assets.breatheco.de/apis/fake/contact/agenda/jbook";
	return {
		store: {
			//Your data structures, A.K.A Entities
			apiUrl: "https://assets.breatheco.de/apis/fake/contact/agenda/jose_prueba",
			apiUrlPost: "https://assets.breatheco.de/apis/fake/contact/",
			agenda: [],
			user: "jose_prueba"
		},
		actions: {
			getAgenda: apiUrl => {
				fetch(apiUrl)
					.then(async res => {
						const response = await res.json();
						setStore({ agenda: [...getStore().agenda, ...response] });
					})
					.catch(err => {
						throw err;
					});
			},
			getContact: (apiUrl, contact) => {
				console.log(contact);
				fetch(apiUrl, {
					method: "POST",
					body: JSON.stringify({ contact }),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => {
					return response.json();
				});
			}

			// getAgenda: apiUrl => {
			// 	fetch(apiUrl, {
			// 		method: "PUT",
			// 		body: JSON.stringify(agenda),
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	}).then(response => {
			// 		return response.json();
			// 	});
			// },
			// getDeleteAgenda: apiUrl => {
			// 	fetch(apiUrl, {
			// 		method: "DELETE"
			// 	}).then(() => {
			// 		console.log("removed");
			// 	});
			// },
			// getUser: inputUser => {
			// 	setStore({ user: inputUser });
			// }
		}
	};
};

export default getState;
