import React from "react";

import { Botao } from "../Botao";

import {
	InfoContainer,
	InfoWrap,
	InfoLinha,
	Coluna1,
	TextoWrap,
	LinhaTopo,
	Cabecalho,
	Subtitulo,
	BotaoWrap,
	Coluna2,
	ImagemWrap,
	Imagem,
} from "./InfoElementos";

const Info = ({
	backgroundClaro,
	id,
	imagemInicio,
	linhaTopo,
	textoClaro,
	cabecalho,
	textoEscuro,
	descricao,
	botaoTexto,
	imagem,
	alt,
	primario,
	escuro,
	escuro2,
}) => {
	return (
		<>
			<InfoContainer backgroundClaro={backgroundClaro} id={id}>
				<InfoWrap>
					<InfoLinha imagemInicio={imagemInicio}>
						<Coluna1>
							<TextoWrap>
								<LinhaTopo>{linhaTopo}</LinhaTopo>
								<Cabecalho textoClaro={textoClaro}>{cabecalho}</Cabecalho>
								<Subtitulo textoEscuro={textoEscuro}>{descricao}</Subtitulo>
								<BotaoWrap>
									<Botao
										to="inicio"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primario={primario ? 1 : 0}
										escuro={escuro ? 1 : 0}
										escuro2={escuro2 ? 1 : 0}
									>
										{botaoTexto}
									</Botao>
								</BotaoWrap>
							</TextoWrap>
						</Coluna1>
						<Coluna2>
							<ImagemWrap>
								<Imagem src={imagem} alt={alt} />
							</ImagemWrap>
						</Coluna2>
					</InfoLinha>
				</InfoWrap>
			</InfoContainer>
		</>
	);
};

export default Info;
