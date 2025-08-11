import styled from 'styled-components';

const data=
    [
        {
            id:1,
            name:"First Ever Web Project",
            skills:"HTML, CSS, JS",
            description:"Digital Resume "
        },
        {
            id:2,
            name:"Cocktail Recipes",
            skills:"HTML, CSS",
            description:"Connected an API to" +
                " my react project to display info in a card like structure"
        },
        {
            id:3,
            name:"Resume",
            skills:"React",
            description:"Digital Resume in React"
        },
        {
            id:4,
            name:"Digital Art Museum",
            skills:"NextJs, API handling, Styled Components",
            description:"Displayed info from Harvard Art Museum API "
        },
        {
            id:5,
            name:"Stock App",
            skills:"NextJs, API handling, Styled Components",
            description:"An app that displays stock prices"
        },
        {
            id:6,
            name:"Summer Dashboard",
            skills:"React, Styled Components",
            description:"A dashboard for my summer 2025 projects"
        }

        ]
;

const StyledH1=styled.h1`
    color:white;
`;

const MainWrapper=styled.div`

    min-height: 100vh;
    
`;
const Intro=styled.div`
    margin-top:2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        color:white;
    }

;`

const ProjDiv=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
   
    


`;
const ProjCard=styled.div`

    border: 3px solid grey;
    box-shadow: 10px 10px 5px rebeccapurple;
    padding: 1rem;
    color:white;
    margin: 10px;
    width: 400px;
    height: 200px;
`;
export default function WebDev() {

    return(
        <MainWrapper>
            <Intro>
                <StyledH1>Webdev</StyledH1>
                <p> May 20th - Sept 1st</p>
                <p>This page has all the web projects I
                    built during Summer 2025.

                </p>


            </Intro>

            <ProjDiv>

                {
                    data.map((item)=>(
                        <ProjCard key={item.id}>
                            <p>Name:{item.name}</p>
                            <p>Skills:{item.skills}</p>
                            <p>Description: {item.description}</p>

                        </ProjCard>

                    ))
                }
            </ProjDiv>


        </MainWrapper>
    )
}