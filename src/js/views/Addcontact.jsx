import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Addcontact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		address: "",
		phone: ""
	});

	//aqui name se refiere a cada input del formulario -> name="name" name="email"...
	const createContact = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							onChange={createContact}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email and finish with .com please and dont repeat the email please"
							name="email"
							onChange={createContact}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={createContact}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={createContact}
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button
							onClick={() => {
								actions.addContact(contact);
							}}
							type="button"
							className="btn btn-primary form-control">
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
