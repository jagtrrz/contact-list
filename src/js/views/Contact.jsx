import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.jsx";
import { Modal } from "../component/Modal.jsx";

import { Button } from "react-bootstrap";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});
	const [show, setShow] = useState(false);
	const [contact, setContact] = useState();

	const handleShow = () => setShow(true);

	let contactList = store.contacts.map((item, index) => {
		return (
			<ContactCard
				item={item}
				id={item.id}
				key={index.toString()}
				edit={() => {
					store.currentContact = item;
				}}
				onDelete={() => {
					setContact(item);
					setState({ showModal: true });
				}}
			/>
		);
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{contactList}
					</ul>
				</div>
			</div>
			<Modal user={contact} show={state.showModal} onClosed={() => setState({ showModal: false })} />
		</div>
	);
};
