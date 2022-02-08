import "./App.css";

import React, { useState } from "react";

import Inicio from "./paginas";

import PaginaEntrar from "./paginas/entrar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    
	const [menuAberto, definirMenuAberto] = useState(false);

	return (
		<Router>
			<Switch>
				<Route path="/" component={Inicio} exact />
				<Route path="/entrar" component={PaginaEntrar} exact />
			</Switch>
		</Router>
	);
}

export default App;
