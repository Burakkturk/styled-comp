import styled from 'styled-components';

const Flex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
max-width: 500px;
margin: 1rem auto;
background-color: ${({bg}) => bg ?? "transparent" };
`; 


export default Flex