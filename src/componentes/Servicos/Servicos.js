import React from "react";

import {
	ServicosContainer,
	ServicosH1,
	ServicosWrap,
	ServicosCartao,
	ServicosIcone,
	ServicosH2,
	ServicosP,
} from "./ServicosElementos";

import Icone1 from "../../imagens/robo.svg";
import Icone2 from "../../imagens/remoto2.svg";
import Icone3 from "../../imagens/curso.svg";

import { Botao } from "../Botao";

const Servicos = () => {
	return (
		<ServicosContainer id="servicos">
			<ServicosH1>Nossos Serviços</ServicosH1>
			<ServicosWrap>
				<ServicosCartao>
					<ServicosIcone src={Icone1} />
					<ServicosH2>Robôs de Operações Automatizadas</ServicosH2>
					<ServicosP>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</ServicosP>
					<Botao>Clique e Conheça mais</Botao>
				</ServicosCartao>

				<ServicosCartao>
					<ServicosIcone src={Icone2} />
					<ServicosH2>Supervisionamento das Operações</ServicosH2>
					<ServicosP>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</ServicosP>
					<Botao>Clique e Conheça mais</Botao>
				</ServicosCartao>

				<ServicosCartao>
					<ServicosIcone src={Icone3} />
					<ServicosH2>Treinamentos e Cursos</ServicosH2>
					<ServicosP>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</ServicosP>
					<Botao>Clique e Conheça mais</Botao>
				</ServicosCartao>
			</ServicosWrap>
		</ServicosContainer>
	);
};

export default Servicos;
