import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavbar = styled(Navbar)`
    background-color: lightgray;
`
const Brand = styled(Navbar.Brand)`
    font-family: 'Cabin Sketch', cursive;
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: 500px){
        font-size: 1.5rem;
    }
`
const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    @media (max-width: 991.5px){
        flex-direction: column;
        align-items: flex-start;
    }
`
const Li = styled.li`
    list-style-type: none;
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0 1rem;
    cursor: pointer;
    &:hover{
        color: white;
    }
    ${props => props.$isActive && `
        color: rgba(0, 0, 0, 0.5);
    `}

    @media (max-width: 991.5px){
        margin: 0.25rem 0;
    }
    @media (max-width: 500px){
        font-size: 1.2rem;
    }
`


function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <StyledNavbar expand="lg">
        <Container>
            <Brand>Front-End Toolbox</Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Ul>
                    <Li onClick={()=>navigate('/color-converter')} $isActive={location.pathname.startsWith('/color')}>Color Converter</Li>
                    <Li onClick={()=>navigate('/box-shadow')} $isActive={location.pathname.startsWith('/box')}>Box Shadow</Li>
                </Ul>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </StyledNavbar>
    );
}

export default Header;