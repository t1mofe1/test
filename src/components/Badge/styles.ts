import styled from 'styled-components';

export const BadgesContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const BadgeContainer = styled.div`
	margin: 20px;
	width: 300px;
	border: 5px solid red;
	border-radius: 10px;
`;

export const BadgeHeader = styled.div`
	padding: 10px;
	background-color: red;
	color: white;
	font-family: 'Courier New', Courier, monospace;
	font-weight: bold;
`;

export const BadgeTitle = styled.div`
	font-size: 25px;
	text-align: center;
`;

export const BadgeSubtitle = styled.div`
	font-size: 15px;
	text-align: center;
`;

export const BadgeBody = styled.div`
	padding: 10px;
	text-align: center;
	font-size: 22px;
`;

export const BadgeFooter = styled.div`
	background-color: red;
	height: 10px;
`;
