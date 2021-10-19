import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
	background: ${({ navScroll }) => (navScroll ? "#000" : "transparent")};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 2;

	@media screen and (max-width: 960) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
	color: goldenrod;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	position: "relative";
	margin-left: 20px;
	font-weight: bold;
	text-decoration: none;
`;

export const IconeMobile = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
	color: white;
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: 50px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLink = styled(LinkScroll)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-weight: 600;
	box-sizing: border-box;

	&.active {
		border-bottom: 3px solid goldenrod;
	}
`;

export const NavBotao = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBotaoLink = styled(LinkRouter)`
	border-radius: 50px;
	background: goldenrod;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;