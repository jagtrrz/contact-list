import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Modal = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClosed ? (
							<button
								onClick={() => props.onClosed()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => {
								props.onClosed();
								actions.deleteContact(props.user);
							}}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	history: PropTypes.object,
	onClosed: PropTypes.func,
	show: PropTypes.bool,
	user: PropTypes.object
};

Modal.defaultProps = {
	show: false,
	onClose: null
};

export default Modal;
