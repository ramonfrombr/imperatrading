import React from "react";

import {
	Container,
	FormularioWrap,
	Icone,
	FormularioConteudo,
	Formulario,
	FormularioH1,
	FormularioLabel,
	FormularioInput,
	FormularioBotao,
	Texto,
} from "./EntrarElementos";

const Entrar = () => {
	return (
		<>
			<Container>
				<FormularioWrap>
					<Icone to="/">
						<div
							style={{
								fontFamily: "Abril Fatface",
								color: "black",
							}}
						>
							IMPERA
						</div>
						<div
							style={{
								fontFamily: "Great Vibes",
								marginTop: "8px",
								marginLeft: "4px",
								color: "black",
							}}
						>
							trading
						</div>
					</Icone>

					<FormularioConteudo>
						<Formulario>
							<FormularioH1>Entre na sua conta</FormularioH1>

							<FormularioLabel htmlFor="for">Email</FormularioLabel>

							<FormularioInput type="email" required />

							<FormularioLabel htmlFor="for">Senha</FormularioLabel>

							<FormularioInput type="password" required />

							<FormularioBotao>Continuar</FormularioBotao>

							<Texto>Esqueci minha senha</Texto>
						</Formulario>
					</FormularioConteudo>
				</FormularioWrap>
			</Container>
		</>
	);
};

export default Entrar;
