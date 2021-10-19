import React from "react";

import Logo from "../../logo1.png";

import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaLinkedin,
} from "react-icons/fa";

import { IconContext } from "react-icons/lib";

import { animateScroll as scroll } from "react-scroll";

import {
	RodapeContainer,
	RodapeWrap,
	RodapeLinksContainer,
	RodapeLinksWrap,
	RodapeLinkTitulo,
	RodapeLinkItems,
	RodapeLink,
	MidiasSociais,
	MidiasSociaisWrap,
	LogoSocial,
	Direitos,
	IconesSociais,
	LinkIconeSocial,
} from "./RodapeElementos";

const Rodape = () => {
	const toggleInicio = () => {
		scroll.scrollToTop();
	};

	return (
		<IconContext.Provider value={{ color: "#fff" }}>
			<RodapeContainer>
				<RodapeWrap>
					<RodapeLinksContainer>
						<RodapeLinksWrap>
							<RodapeLinkItems>
								<RodapeLinkTitulo>Sobre</RodapeLinkTitulo>

								<RodapeLink to="/entrar">Como funciona</RodapeLink>
								<RodapeLink to="/entrar">Referências</RodapeLink>
								<RodapeLink to="/entrar">Investidores</RodapeLink>
								<RodapeLink to="/entrar">Termos de Serviço</RodapeLink>
							</RodapeLinkItems>

							<RodapeLinkItems>
								<RodapeLinkTitulo>Videos</RodapeLinkTitulo>

								<RodapeLink to="/entrar">Como funciona</RodapeLink>
								<RodapeLink to="/entrar">Perguntas Frequentes</RodapeLink>
								<RodapeLink to="/entrar">Referências</RodapeLink>

								<RodapeLink to="/entrar">Termos de Serviço</RodapeLink>
							</RodapeLinkItems>
						</RodapeLinksWrap>
						<RodapeLinksWrap>
							<RodapeLinkItems>
								<RodapeLinkTitulo>Contate-nos</RodapeLinkTitulo>

								<RodapeLink to="/entrar">Contato</RodapeLink>
								<RodapeLink to="/entrar">Suporte</RodapeLink>
								<RodapeLink to="/entrar">Patrocinadores</RodapeLink>
								<RodapeLink to="/entrar">Investidores</RodapeLink>
							</RodapeLinkItems>

							<RodapeLinkItems>
								<RodapeLinkTitulo>Midias Sociais</RodapeLinkTitulo>

								<RodapeLink to="/entrar">Instagram</RodapeLink>
								<RodapeLink to="/entrar">Facebook</RodapeLink>
								<RodapeLink to="/entrar">Youtube</RodapeLink>
								<RodapeLink to="/entrar">Twitter</RodapeLink>
							</RodapeLinkItems>
						</RodapeLinksWrap>
					</RodapeLinksContainer>

					<MidiasSociais>
						<MidiasSociaisWrap>
							<LogoSocial to="/" onClick={toggleInicio}>
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
							</LogoSocial>
							<Direitos>
								Impera Trading &copy; {new Date().getFullYear()} Todos os
								direitos reservados.
							</Direitos>

							<IconesSociais>
								<LinkIconeSocial href="/" targer="_blank" aria-label="Facebook">
									<FaFacebook />
								</LinkIconeSocial>
								<LinkIconeSocial
									href="/"
									targer="_blank"
									aria-label="Instagran"
								>
									<FaInstagram />
								</LinkIconeSocial>
								<LinkIconeSocial href="/" targer="_blank" aria-label="YouTube">
									<FaYoutube />
								</LinkIconeSocial>
								<LinkIconeSocial href="/" targer="_blank" aria-label="LinkedIn">
									<FaLinkedin />
								</LinkIconeSocial>
								<LinkIconeSocial href="/" targer="_blank" aria-label="Twitter">
									<FaTwitter />
								</LinkIconeSocial>
							</IconesSociais>
						</MidiasSociaisWrap>
					</MidiasSociais>
				</RodapeWrap>
			</RodapeContainer>
		</IconContext.Provider>
	);
};

export default Rodape;
