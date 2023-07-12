/**
 * Component NavHeader
 **/

import { Container, Image, Navbar, Offcanvas } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import buttonIcon from "../../assets/list.svg";

/**
 * Affiche le navigateur du header en fonction de la taille de l'écran
 * @returns {React.ReactElement} - Header
 */
export default function NavHeader(): React.ReactElement {
    //State de l'ouverture du menu
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const { width } = useWindowSize();
    const maxWidth: number = 768;

    //Ajout d'une fermeture automatique du menu si la taille de l'écran est supérieur à md
    useEffect(() => {
        if (width >= maxWidth) {
            setMenuOpened(false);
        }
    }, [width]);

    const navigate: NavigateFunction = useNavigate()
    //Récupération de l'url pour déterminer la couleur de fond 
    const currentUrl: string = window.location.href;
    return (
        <header>
            <Navbar className={((currentUrl.includes("contact") || currentUrl.includes("skills") || currentUrl.includes("projects")) ? "bg-primary" : "bg-transparent")}>
                <Container className='d-flex justify-content-end' fluid>
                    <div className='d-md-none btn btn-outline' onClick={() => setMenuOpened(!menuOpened)}>
                        <Image src={buttonIcon} width={"30px"} />
                    </div>
                    <Nav className="me-auto w-100 justify-content-end mt-1 d-none d-md-flex  ">
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/')} ><p className='menu__link'>Accueil</p></Nav.Link>
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/skills')} ><p className='menu__link'>Compétences</p></Nav.Link>
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/projects')} ><p className='menu__link'>Mes projets</p></Nav.Link>
                        <Nav.Link data-testid="nav-link" href="#" onClick={() => navigate('/contact')}><p className='menu__link'>Contact</p></Nav.Link>
                    </Nav>
                    <Offcanvas show={menuOpened} onHide={() => setMenuOpened(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='text-body fw-bold'>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Nav className="me-auto d-flex flex-column w-100  ">
                            <Nav.Link data-testid="nav-link" href="#" onClick={() => {
                                navigate('/');
                                setMenuOpened(false);
                            }} >
                                <p className='menu__link'>Accueil</p>
                            </Nav.Link>
                            <Nav.Link data-testid="nav-link" href="#" onClick={() => {
                                navigate('/skills');
                                setMenuOpened(false);
                            }} >
                                <p className='menu__link'>Compétences</p>
                            </Nav.Link>
                            <Nav.Link data-testid="nav-link" href="#" onClick={() => {
                                navigate('/projects');
                                setMenuOpened(false);
                            }} >
                                <p className='menu__link'>Mes projets</p>
                            </Nav.Link>
                            <Nav.Link data-testid="nav-link" href="#" onClick={() => {
                                navigate('/contact');
                                setMenuOpened(false);
                            }}>
                                <p className='menu__link'>Contact</p>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}