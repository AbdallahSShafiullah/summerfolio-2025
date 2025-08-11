import styled from 'styled-components';

const data=
    [
        {
            id:1,
            name:"First Ever Web Project",
            skills:"HTML, CSS, JS",
            image:"/mp1.png",
            href:"https://mp-1-gilt.vercel.app/",
            description:"Digital Resume "
        },
        {
            id:2,
            name:"Cocktail Recipes",
            skills:"HTML, CSS",
            image:"/mp2.png",
            href:"https://mp-1-893y.vercel.app/",
            description:"Connected an API to" +
                " my react project to display info in a card like structure"
        },
        {
            id:3,
            name:"Resume",
            skills:"React",
            image:"/mp3.png",
            href:"https://mp-3-rouge.vercel.app/",
            description:"Digital Resume in React"
        },
        {
            id:4,
            name:"Digital Art Museum",
            skills:"NextJs, API handling, Styled Components",
            image:"/ArtGall.png",
            href:"https://mp-4-murex.vercel.app/",
            description:"Displayed info from Harvard Art Museum API "
        },
        {
            id:5,
            name:"Stock App",
            skills:"NextJs, API handling, Styled Components",
            image:"/finalproject.png",
            href:"",
            description:"An app that displays stock prices"
        },
        {
            id:6,
            name:"Summer Dashboard",
            skills:"React, Styled Components",
            image:"/temp.png",
            href:"https://summerfolio-2025.vercel.app/WebDev",
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
    width: 350px;
    height: 320px;
    img{
        transition: transform 0.5s ease;
        //, box-shadow 0.3s ease;
        width: 100%;
        height: 80%;
        &:hover {
            
            transform: scale(1.05); /* Slight zoom */
            //box-shadow: 5px 5px 5px pink;
        }
    }
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
                            <p>Description: {item.description}</p>

                            <a href={item.href} target="_blank"><img src={item.image} alt={item.name}/></a>
                            <p>Skills:{item.skills}</p>


                        </ProjCard>

                    ))
                }
            </ProjDiv>


        </MainWrapper>
    )
}