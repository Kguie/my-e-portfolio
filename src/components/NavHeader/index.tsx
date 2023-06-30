/**
 * Component NavHeader
 **/

import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavigateFunction, useNavigate } from 'react-router-dom';

/**
 * Affiche le navigateur du header en fonction de la taille de l'écran
 */
export default function NavHeader() {

    const navigate: NavigateFunction = useNavigate()
    //Récupération de l'url pour déterminer la couleur de fond 
    const currentUrl: string = window.location.href;
    return (
        <Navbar expand="md" className={((currentUrl.includes("contact") || currentUrl.includes("skills") || currentUrl.includes("projects")) ? "bg-primary" : "bg-transparent")}>
            <Container className='d-flex justify-content-end' fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-end mt-1 ">
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/')} ><p className='menu__link'>Accueil</p></Nav.Link>
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/skills')} ><p className='menu__link'>Compétences</p></Nav.Link>
                        <Nav.Link data-testid="nav-link" href="#" ><p className='menu__link'>Projets</p></Nav.Link>
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/contact')}><p className='menu__link'>Contact</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}