import styled from 'styled-components';

const StyledH1=styled.h1`
color:red;
`;

const MainWrapper=styled.div`

    min-height: 100vh;
`;

export default function Home() {

    return(
        <MainWrapper>
            <StyledH1>Home Paaaage</StyledH1>
        </MainWrapper>
    )
}