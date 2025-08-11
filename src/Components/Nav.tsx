import styled from 'styled-components';

  import { Link } from 'react-router';

  const StyledDiv=styled.div`
  
      color:white;
      display: flex;
      justify-content: space-between;
      border-bottom: 3px solid white;
     
  `;

  const StyledUl=styled.ul`
      list-style: none;
      display: flex;
      flex-direction: row;
   
     
      
  `;
  const StyledLi=styled.li`
      padding: 10px;
      a{
          text-decoration: none;
          color:white;
          &:hover{
              
              color:grey;
          }
          
      }
  `;
  const StyledNav=styled.nav`
     
  `;
  export default function Nav() {
    return(
        <StyledDiv>
            <h1>Summer 2025 Dashboard</h1>


        <StyledNav>
            <StyledUl>


                <StyledLi><Link to={`/`}>Home</Link></StyledLi>
                <StyledLi><Link to={`/WebDev`}>WebDev</Link></StyledLi>
            </StyledUl>
        </StyledNav>
        </StyledDiv>
    )
  }