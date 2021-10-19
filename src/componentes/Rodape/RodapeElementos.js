import styled from "styled-components";

import { Link } from "react-router-dom";

export const RodapeContainer = styled.div`
	background-color: #101522;
`;

export const RodapeWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const RodapeLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-bottom: 32px;
	}
`;

export const RodapeLinksWrap = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const RodapeLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const RodapeLinkTitulo = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
`;

export const RodapeLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0%.5rem;
	font-size: 14px;

	&:hover {
		color: #01bf71;
		transition: 0.3s ease-out;
	}
`;

export const MidiasSociais = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const MidiasSociaisWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const LogoSocial = styled(Link)`
	color: #fff;
	justify-content: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const Direitos = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const IconesSociais = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const LinkIconeSocial = styled.a`
	color: #fff;
	font-size: 24px;
`;
