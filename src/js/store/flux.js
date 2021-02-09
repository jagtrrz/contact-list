const getState = ({ getStore, setStore }) => {
	// const apirUrl = "https://assets.breatheco.de/apis/fake/contact/agenda/jbook";
	return {
		store: {
			//Your data structures, A.K.A Entities
			apiUrl: "https://assets.breatheco.de/apis/fake/contact/agenda/hastalasnarices",
			apiUrlPost: "https://assets.breatheco.de/apis/fake/contact/",
			agenda: [],
			user: "hastalasnarices"
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
			// getContact: (apiUrl, contact) => {
			// 	console.log("ho", contact);
			// 	console.log("ee", apiUrl);
			// 	fetch(apiUrl, {
			// 		method: "POST",
			// 		body: JSON.stringify({ contact }),
			// 		headers: new Headers({
			// 			"Content-Type": "application/json"
			// 		})
			// 	}).then(response => {
			// 		console.log(response);
			// 		return response.json();
			// 	});
			// }
			getContact: async newContact => {
				//console.log("contact", contact);
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({ newContact }),
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
				console.log(response);
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
