import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
`

const Img = styled.img`
    height: 100%;
    width: 100%;
`

export default function Copy({onClick}){
    return(
        <Container onClick={onClick}>
            <Img src={require('../assets/copy.png')} alt="copy"/>
        </Container>
    )
}