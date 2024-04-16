// Filename - Button.js

import styled from "styled-components";

const Button = styled.div`
	height: 50px;
	width: 100px;
	cursor: pointer;
	text-decoration: none;
	color: yellow   ;
	background-color: ${(props) =>
		props.bg === "green" ? "green" : "pink"};
	margin: auto;
	font-size: 2rem;
`;

export default Button;
