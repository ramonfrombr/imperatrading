import React, { useState } from "react";
import Menu from "../componentes/Menu/Menu";
import Navbar from "../componentes/Navbar/Navbar";
import Intro from "../componentes/Intro/Intro";
import Info from "../componentes/Info/Info";
import PainelBinary from "../componentes/PainelBinary/PainelBinary";
import {
	inicioObjUm,
	inicioObjDois,
	inicioObjTres,
} from "../componentes/Info/Dados";

import Servicos from "../componentes/Servicos/Servicos";
import Rodape from "../componentes/Rodape/Rodape";

const Inicio = () => {
	const [menuAberto, definirMenuAberto] = useState(false);

	const toggle = () => {
		definirMenuAberto(!menuAberto);
	};

	return (
		<>
			<Menu menuAberto={menuAberto} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Intro />
			<Info {...inicioObjUm} />
			<Info {...inicioObjDois} />
			<Servicos />
			<Info {...inicioObjTres} />
			<Rodape />
		</>
	);
};

export default Inicio;
