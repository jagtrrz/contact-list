const getState = ({ getStore, setStore }) => {
	// const apirUrl = "https://assets.breatheco.de/apis/fake/contact/agenda/jbook";
	return {
		store: {
			apiUrl: "https://assets.breatheco.de/apis/fake/contact/agenda/hastalasnarices",
			contacts: [],
			user: "hastalasnarices"
		},
		actions: {
			getContacts: apiUrl => {
				fetch(apiUrl).then(async res => {
					const response = await res.json();
					setStore({ contacts: [...getStore().contacts, ...response] });
				});
			},

			addContact: async input => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: input.name,
						email: input.email,
						agenda_slug: "hastalasnarices",
						address: input.address,
						phone: input.phone
					}),
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
				//getActions().getContacts();
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
