import styled from "styled-components";

import { Link } from "react-scroll";

export const Botao = styled(Link)`
	border-radius: 50px;
	background: ${({ primario }) => (primario ? "goldenrod" : "#010606")};
	white-space: nowrap;
	padding: ${({ grande }) => (grande ? "14px 48px" : "12px 30px")};
	color: ${({ escuro }) => (escuro ? "#010606" : "#fff")};
	font-size: ${({ fonteGrande }) => (fonteGrande ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primario }) => (primario ? "#fff" : "goldenrod")};
		color: ${({ escuro }) => (escuro ? "#010606" : "goldenrod")};
	}
`;
