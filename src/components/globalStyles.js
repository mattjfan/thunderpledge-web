import styled from 'styled-components';

export const Title = styled.h1`
    font-weight: 750;
    font-size: 3em;
    ${props => props.textAlign && `text-align: ${props.textAlign};`}
`
export const PaddedContainer = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    @media only screen and (max-width: 576px) {
        margin-left: 12px;
        margin-right: 12px;
    }
`;
export const Image = styled.div`
    width: 100%;
    height: ${props => props.height ? props.height : '120px'};
    background-image: url(${props => props.src});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
`;