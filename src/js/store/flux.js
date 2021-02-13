const getState = ({ getStore, setStore }) => {
	// const apirUrl = "https://assets.breatheco.de/apis/fake/contact/agenda/jbook";
	return {
		store: {
			apiUrl: "https://assets.breatheco.de/apis/fake/contact/agenda/hastalasnarices",
			contacts: [],
			currentContact: {}
		},
		actions: {
			getContacts: apiUrl => {
				fetch(apiUrl).then(async res => {
					const response = await res.json();
					setStore({ contacts: [...getStore().contacts, ...response] });
				});
			},

			addContact: async input => {
				setStore({ contacts: [...getStore().contacts, input] });
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
			},

			edditContact: async contact => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
					method: "PUT",
					body: JSON.stringify({
						full_name: contact.name,
						email: contact.email,
						agenda_slug: "hastalasnarices",
						address: contact.address,
						phone: contact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
			},

			deleteContact: async contact => {
				setStore({ contacts: getStore().contacts.filter(index => index !== contact) });
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
					method: "DELETE"
				});
				response = await response.json();
			}
		}
	};
};

export default getState;
