import styled from "styled-components";

export const InfoContainer = styled.div`
	color: #fff;
	background: ${({ backgroundClaro }) =>
		backgroundClaro ? "#f9f9f9" : "black"};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrap = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const InfoLinha = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imagemInicio }) =>
		imagemInicio ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imagemInicio }) =>
			imagemInicio ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	}
`;

export const Coluna1 = styled.div`
	margin-bottom: 15px;
	padding: 0 25px;
	grid-area: col1;
`;

export const Coluna2 = styled.div`
	margin-bottom: 15px;
	padding: 0 25px;
	grid-area: col2;
`;

export const TextoWrap = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const LinhaTopo = styled.p`
	color: goldenrod;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Cabecalho = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ textoClaro }) => (textoClaro ? "#f7f8fa" : "#010606")};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const Subtitulo = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ textoEscuro }) => (textoEscuro ? "#010606" : "#fff")};
`;

export const BotaoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImagemWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Imagem = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;
