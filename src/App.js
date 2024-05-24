import {  DarkButton, PinkButton } from "./components/Button.styled";
import { Button } from "./components/Button.styled";
// import styled from 'styled-components/native'
import Flex from "./components/Flex"
import StyledLink from "./components/Links";
import Title from "./components/Title"


const App = () => {
  return (
   <>
    <Flex bg="#bebe">
      <Title renk="white" bgRenk="red">
        Styled Components
      </Title>
      <h1>Styled Components</h1>
      <Button>Tikla</Button>
      <DarkButton>Send</DarkButton>
      
      </Flex>
      <Title renk="green">Props</Title>
      <Title bgRenk="purple">Props</Title>

      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
      <Flex>
      <PinkButton>Pembe</PinkButton>
      <PinkButton primary>İçi boş</PinkButton>
      </Flex>
      <Flex>
        <StyledLink href="https://gsstore.org">BT</StyledLink>
      </Flex>
      </>
  );
};

export default App;
