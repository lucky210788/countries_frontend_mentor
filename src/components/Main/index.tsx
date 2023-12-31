import styled from 'styled-components';
import { Container } from '../Container';
import React, {ReactElement} from "react";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

interface MainProps {
    children: ReactElement | ReactElement[];
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Main;