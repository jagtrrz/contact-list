import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Contact } from "./views/Contact.jsx";
import { Addcontact } from "./views/Addcontact.jsx";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/index.html" component={Contact} />
						<Route exact path="/" component={Contact} />
						<Route exact path="/contacts" component={Contact} />
						<Route exact path="/add" component={Addcontact} />
						<Route exact path="/edit" component={Addcontact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
