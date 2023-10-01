import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Container = styled.div`
    width: 100%;
`

export default function MainLayout(){
    return(
        <Container>
            <Header/>
            <Outlet/>
        </Container>
    )
}