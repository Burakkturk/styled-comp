import styled from 'styled-components';

const Title = styled.h1`
 color : ${({renk}) => renk  || "black"} ;
 background-color: ${({bgRenk}) => bgRenk || "transparent"} ;
`;

export default Title; 
