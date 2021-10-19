import React from "react";
import {
	MenuContainer,
	Icone,
	IconeFechar,
	MenuWrap,
	MenuLista,
	MenuLink,
	MenuBotaoWrap,
	MenuRota,
} from "./MenuElementos";

const Menu = ({ menuAberto, toggle }) => {
	return (
		<>
			<MenuContainer menuAberto={menuAberto} onClick={toggle}>
				<Icone>
					<IconeFechar onClick={toggle} />
				</Icone>

				<MenuWrap>
					<MenuLista>
						<MenuLink to="sobre" onClick={toggle}>
							Sobre
						</MenuLink>
						<MenuLink to="descubra" onClick={toggle}>
							Descubra
						</MenuLink>
						<MenuLink to="servicos" onClick={toggle}>
							Serviços
						</MenuLink>
						<MenuLink to="inscrever" onClick={toggle}>
							Inscrever
						</MenuLink>
					</MenuLista>
					<MenuBotaoWrap>
						<MenuRota to="/entrar">Entrar</MenuRota>
					</MenuBotaoWrap>
				</MenuWrap>
			</MenuContainer>
		</>
	);
};

export default Menu;
