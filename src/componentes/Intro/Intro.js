import React, { useState } from "react";

import { Botao } from "../Botao";

import {
	IntroContainer,
	IntroBackground,
	IntroVideo,
	IntroConteudo,
	IntroH1,
	IntroP,
	IntroBotaoWrap,
	ArrowForward,
	ArrowRight,
} from "./IntroElementos";

import Video from "../../videos/video.mp4";

const Intro = () => {
	const [hover, definirHover] = useState(false);

	const onHover = () => {
		definirHover(!hover);
	};

	return (
		<IntroContainer id="inicio">
			<IntroBackground>
				<IntroVideo autoPlay loop muted src={Video} type="video/mp4" />
			</IntroBackground>
			<IntroConteudo>
				<IntroH1>Investimentos de Maneira Fácil</IntroH1>
				<IntroP>Crie uma conta e começe a operar hoje</IntroP>
				<IntroBotaoWrap>
					<Botao
						to="inscrever"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primario="true"
						escuro="true"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						Começar {hover ? <ArrowForward /> : <ArrowRight />}
					</Botao>
				</IntroBotaoWrap>
			</IntroConteudo>
		</IntroContainer>
	);
};

export default Intro;
