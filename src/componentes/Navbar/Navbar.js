import React, { useState, useEffect } from "react";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	IconeMobile,
	NavMenu,
	NavItem,
	NavLink,
	NavBotao,
	NavBotaoLink,
} from "./NavbarElementos";

import Logo from "../../logo1.png";

import { FaBars } from "react-icons/fa";

import { IconContext } from "react-icons/lib";

import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
	const [navScroll, definirNavScroll] = useState(false);

	const onScroll = () => {
		if (window.scrollY >= 80) {
			definirNavScroll(true);
		} else {
			definirNavScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
	}, []);

	const toggleInicio = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav navScroll={navScroll}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleInicio}>
							<img
								height={48}
								width={48}
								style={{ marginRight: "15px" }}
								src={Logo}
								alt=""
							/>
							<div
								style={{
									fontFamily: "Abril Fatface",
									color: "#ffdd00",
								}}
							>
								IMPERA
							</div>
							<div
								style={{
									fontFamily: "Great Vibes",
									marginTop: "8px",
									marginLeft: "4px",
									color: "#ffdd00",
								}}
							>
								trading
							</div>
						</NavLogo>

						<IconeMobile onClick={toggle}>
							<FaBars />
						</IconeMobile>

						<NavMenu>
							<NavItem>
								<NavLink
									to="sobre"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-80}
								>
									Sobre
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="descubra"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-80}
								>
									Descubra
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="servicos"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-80}
								>
									Serviços
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="inscrever"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-80}
								>
									Inscrever
								</NavLink>
							</NavItem>
						</NavMenu>

						<NavBotao>
							<NavBotaoLink to="/entrar">Entrar</NavBotaoLink>
						</NavBotao>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
