import styled from 'styled-components';

export const TopArticlesStyled = styled.div`
	max-width: 100%;
	height: fit-content;
	display: flex;
	/* flex-flow: row wrap; */
	flex-direction: row;
  justify-content: center;
	padding: 20px 5% 20px 5%;
	max-width: auto;
	margin: auto;

	@media screen and (max-width: 950px) {
		padding-right: 20px;
		padding-left: 20px;
		justify-content: space-between;
	}
	@media screen and (max-width: 720px) {
		flex-direction: column;
	}
	
`;

export const Articles = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	flex-basis: 70%;

	@media screen and (max-width: 768px) {
		flex-basis: 100%;
	}
`;

export const ArticleMainPreview = styled.div`
	width: 100%;
	height: fit-content;
	margin: 5px 5px 5px 0;
	/* @media screen and (max-width: 1015px) {
		width: 50%;
	}
	@media screen and (max-width: 910px) {
		width: 47%;
	}
	@media screen and (max-width: 800px) {
		width: 45%;
	} */
	@media screen and (max-width: 720px) {
		width: 100%;
		order: 1;
		padding: 0px;
	}
`;

export const ArticleSecondPreview = styled.div`
	width: 30%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	/* @media screen and (max-width: 1015px) {
		width: 45%;
	}
	@media screen and (max-width: 910px) {
		width: 46%;
	}
	@media screen and (max-width: 800px) {
		width: 50%;
	} */
	@media screen and (max-width: 720px) {
		width: 100%;
		order: 2;
		margin-top: 20px;
		flex-direction: column;
	}
`;

export const ArticleThirdPreview = styled.div`
	width: 27%;
	height: fit-content;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1015px) {
		display: none;
	}
`;
