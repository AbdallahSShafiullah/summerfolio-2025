import {Routes, Route} from "react-router";
import Nav from "./Nav.tsx";
import Home from "./mains/Home.tsx";
import WebDev from "./mains/WebDev.tsx";
import styled from 'styled-components';

const Wrapper=styled.div`
    background-color: black;
    width: 100vw;
    margin: 0 auto;
`;


export default function Root() {

    return(
        <Wrapper>

            <Nav/>

                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/WebDev`} element={<WebDev/>}/>

                </Routes>


        </Wrapper>



    )
}