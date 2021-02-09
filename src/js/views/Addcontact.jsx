import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Addcontact = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [contact, setContact] = useState();

	const [help, setHelp] = useState(false);

	const createContact = () => {
		setContact({
			full_name: name,
			email: email,
			agenda_slug: "hastalasnarices",
			address: address,
			phone: phone
		});
	};

	//	console.log("fefe", createContact());

	useEffect(
		() => {
			actions.getContact(contact);
		},
		[contact != undefined]
	);

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
							onChange={e => {
								setName(e.target.value);
							}}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email and finish with .com please and dont repeat the email please"
							onChange={e => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => {
								setPhone(e.target.value);
							}}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => {
								setAddress(e.target.value);
							}}
							value={address}
						/>
					</div>
					{/* //<Link className="mt-3 w-100 text-center" to="/"> */}
					<button
						onClick={() => {
							createContact();
							// setHelp(!help);
							console.log("he creado un contacto?", contact);
						}}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					{/* </Link> */}
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
